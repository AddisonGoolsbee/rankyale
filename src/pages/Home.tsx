import { useEffect, useState } from "react";
import { getCollection } from "../utils/api";
import { Entry } from "../utils/types";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { httpsCallable } from "firebase/functions";
import { functions } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";
import RankingInterface from "../components/RankingInterface";
import Navbar from "../components/Navbar";

const auth = getAuth();

const yearMap: { [key: string]: number } = {
  Freshmen: 2028,
  Sophomores: 2027,
  Juniors: 2026,
  Seniors: 2025,
};

function Home() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entriesSubset, setEntriesSubset] = useState<Entry[]>([]); // subset of entries based on selected year, not present in non-student categories
  const [user, setUser] = useState<User | null>(null);
  const [classYear, setClassYear] = useState<number | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [rankingPairs, setRankingPairs] = useState<{
    [key: string]: { entry1: number; entry2: number }[];
  }>({
    All: [],
    Freshmen: [],
    Sophomores: [],
    Juniors: [],
    Seniors: [],
  });

  const [rankingIndices, setRankingIndices] = useState<{
    [key: string]: number;
  }>({
    All: 0,
    Freshmen: 0,
    Sophomores: 0,
    Juniors: 0,
    Seniors: 0,
  });
  const [currentPairIndex, setCurrentPairIndex] = useState(1);
  const updateEloRating = httpsCallable(functions, "updateEloRating");
  const K = 32;

  const MAX_DAILY_RANKINGS = 100;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (u?.email?.endsWith("@yale.edu")) {
        setUser(u);
      } else {
        if (u) await signOut(auth);
        setUser(null);
      }
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const yearMapReverse = {
      2028: "Freshmen",
      2027: "Sophomores",
      2026: "Juniors",
      2025: "Seniors",
    };

    if (user) {
      const fetchClassYear = async () => {
        try {
          const getClassYear = httpsCallable(functions, "getClassYear");
          const res = await getClassYear();
          const data = res.data as { classYear: number };
          setClassYear(data.classYear);
          setSelectedYear(
            yearMapReverse[
              data.classYear as keyof typeof yearMapReverse
            ] as string
          );
          return data.classYear;
        } catch (err) {
          console.error("Failed to fetch class year:", err);
        }
      };
      fetchClassYear();
      getCollection("students").then((data) => {
        const sorted = data.sort(
          (a, b) => b.score - a.score || a.name.localeCompare(b.name)
        );
        setEntries(sorted);
      });
    }
  }, [user]);

  useEffect(() => {
    if (!user || !selectedYear) return;

    const updateEntriesForYear = async () => {
      let filtered = entries;
      if (selectedYear === "All") {
        setEntriesSubset(filtered);
      } else {
        const numericYear = yearMap[selectedYear];
        filtered = entries.filter((entry) => entry.class_year === numericYear);
        setEntriesSubset(filtered);
      }

      if (rankingPairs[selectedYear].length > 0) {
        setCurrentPairIndex(rankingIndices[selectedYear] + 1);
        return;
      }

      if (
        !user ||
        filtered.length < 2 ||
        (selectedYear !== "All" && yearMap[selectedYear] !== classYear)
      )
        return;

      const votesSnap = await getDocs(
        query(
          collection(db, "votes"),
          where("uid", "==", user.uid),
          where("collection", "==", "students")
        )
      );

      const seenPairs = new Set<string>();
      votesSnap.forEach((doc) => {
        const { entryA, entryB } = doc.data();
        seenPairs.add(`${entryA}_${entryB}`);
      });

      const randomPairs: { entry1: number; entry2: number }[] = [];
      let attempts = 0;

      while (randomPairs.length < MAX_DAILY_RANKINGS && attempts < 1000) {
        const i1 = Math.floor(Math.random() * filtered.length);
        let i2 = Math.floor(Math.random() * filtered.length);

        while (i2 === i1) {
          i2 = Math.floor(Math.random() * filtered.length);
        }

        const [idA, idB] = [filtered[i1].id, filtered[i2].id].sort();
        const pairKey = `${idA}_${idB}`;

        const alreadyInList = randomPairs.some((pair) => {
          const [a, b] = [
            filtered[pair.entry1].id,
            filtered[pair.entry2].id,
          ].sort();
          return `${a}_${b}` === pairKey;
        });

        if (!seenPairs.has(pairKey) && !alreadyInList) {
          randomPairs.push({ entry1: i1, entry2: i2 });
        }

        attempts++;
      }

      setRankingPairs((prev) => ({
        ...prev,
        [selectedYear]: randomPairs,
      }));
      setRankingIndices((prev) => ({
        ...prev,
        [selectedYear]: 0,
      }));
    };

    updateEntriesForYear();
  }, [selectedYear, entries, user, classYear, rankingPairs, rankingIndices]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const email = result.user.email;
    if (!email?.endsWith("@yale.edu")) {
      alert("Only yale.edu emails are allowed");
      await signOut(auth);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleVote = async (
    selectedEntries: { entry1: number; entry2: number },
    mode: number
  ) => {
    setRankingIndices((prev) => ({
      ...prev,
      [selectedYear]: prev[selectedYear] + 1,
    }));
    setCurrentPairIndex(currentPairIndex + 1);

    const entry1 = entriesSubset[selectedEntries.entry1];
    const entry2 = entriesSubset[selectedEntries.entry2];

    const expectedScore1 =
      1 / (1 + Math.pow(10, (entry2.score - entry1.score) / 400));
    const expectedScore2 =
      1 / (1 + Math.pow(10, (entry1.score - entry2.score) / 400));

    let score1 = entry1.score;
    let score2 = entry2.score;

    if (mode === 0) {
      score1 += K * (1 - expectedScore1);
      score2 += K * (0 - expectedScore2);
    } else if (mode === 1) {
      score1 += K * (0 - expectedScore1);
      score2 += K * (1 - expectedScore2);
    }

    setEntriesSubset((prevEntries) => {
      const updatedEntries = [...prevEntries];
      updatedEntries[selectedEntries.entry1] = { ...entry1, score: score1 };
      updatedEntries[selectedEntries.entry2] = { ...entry2, score: score2 };
      updatedEntries.sort(
        (a, b) => b.score - a.score || a.name.localeCompare(b.name)
      );
      return updatedEntries;
    });

    try {
      await updateEloRating({
        collectionName: "students",
        entry1Id: entry1.id,
        entry2Id: entry2.id,
        mode: mode,
      });
    } catch (error) {
      console.error("Error calling updateEloRating:", error);
    }
  };

  if (!authChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-3 text-lg rounded shadow hover:bg-blue-700 transition"
        >
          Sign in with Yale email
        </button>
      </div>
    );
  }

  const isLoading = entriesSubset.length === 0;

  return (
    <>
      <Navbar handleLogout={handleLogout} />
      <div className="flex flex-col w-full bg-gray-100 min-h-screen">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 sm:mt-0 mb-8 sm:mb-8 text-center bg-clip-text">
            Who is the Most Popular Student?
          </h1>
          {!isLoading && (
            <div className="flex bg-white rounded-lg shadow-md p-1 mb-2 text-xs sm:text-base">
              {["All", "Freshmen", "Sophomores", "Juniors", "Seniors"].map(
                (year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 sm:px-6 py-2 rounded-md transition-colors duration-200 ${
                      selectedYear === year
                        ? "bg-blue-500 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {year}
                  </button>
                )
              )}
            </div>
          )}
          <RankingInterface
            pairs={rankingPairs[selectedYear]}
            currentPairIndex={currentPairIndex}
            entriesSubset={entriesSubset}
            onVote={handleVote}
            maxRankings={MAX_DAILY_RANKINGS}
            valid={
              selectedYear !== "All" && yearMap[selectedYear] === classYear
            }
          />
        </div>

        <div className="flex flex-col items-center w-full mb-12">
          {isLoading ? (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-col items-center mx-3 sm:mx-0 sm:w-full space-y-3">
              {entriesSubset.slice(0, 100).map((entry, index) => (
                <div
                  key={entry.email ?? entry.name}
                  className="bg-white rounded-xl py-2 px-4 flex flex-row justify-between items-center space-x-4 w-full max-w-xl shadow-xs"
                >
                  <div className="flex flex-row gap-4 text-xl font-medium">
                    <span>{index + 1}</span>
                    <span className="sm:text-xl text-lg">{entry.name}</span>
                    {/* <span className="text-gray-500 text-base self-center">
                      score: {Math.floor(entry.score)}
                    </span> */}
                  </div>
                  <img
                    src={
                      entry.image === "assets/defaultStudent.avif"
                        ? "src/assets/defaultStudent.png"
                        : entry.image
                    }
                    alt={entry.name}
                    className="h-16 object-contain rounded-md"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
