// First 24 hours: 284071 votes, 2626 unique users (37% of campus)

import { useEffect, useState } from "react";
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
import RankingInterface from "../components/RankingInterface";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundOrbs from "../components/BackgroundOrbs";

const auth = getAuth();

function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [classYear, setClassYear] = useState<number | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [topEntries, setTopEntries] = useState<{
    [key: string]: Entry[];
  }>({
    All: [],
    Freshmen: [],
    Sophomores: [],
    Juniors: [],
    Seniors: [],
  });
    const [subsetEntries, setSubsetEntries] = useState<{
      [key: string]: Entry[];
    }>({
      All: [],
      Freshmen: [],
      Sophomores: [],
      Juniors: [],
      Seniors: [],
    });
  const [rankingPairs, setRankingPairs] = useState<{
    [key: string]: { entry1: number; entry2: number }[];
  }>({
    All: [],
    Freshmen: [],
    Sophomores: [],
    Juniors: [],
    Seniors: [],
  });
  const [isPairsLoading, setIsPairsLoading] = useState(true);

  const [rankingIndices, setRankingIndices] = useState<{
    [key: string]: number;
  }>({
    All: 0,
    Freshmen: 0,
    Sophomores: 0,
    Juniors: 0,
    Seniors: 0,
  });

  const [rankingRemainingVotes, setRankingRemainingVotes] = useState<{
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
    const fetchTopEntries = httpsCallable(functions, "fetchTopEntries");

    const yearMapReverse = {
      2028: "Freshmen",
      2027: "Sophomores",
      2026: "Juniors",
      2025: "Seniors",
    };

    if (user) {
      const fetchClassYear = async () => {
        try {
          const getUser = httpsCallable(functions, "getUser");
          const res = await getUser();
          const data = res.data as {
            classYear: number;
            todaysVotes: { [key: string]: number };
          };
          setClassYear(data.classYear);
          setSelectedYear(
            yearMapReverse[
              data.classYear as keyof typeof yearMapReverse
            ] as string
          );

          const votes = data.todaysVotes;
          const updatedVotes = { ...votes };

          Object.keys(votes).forEach((key) => {
            updatedVotes[key] = MAX_DAILY_RANKINGS - votes[key];
          });

          setRankingRemainingVotes(updatedVotes);
          return data.classYear;
        } catch (err) {
          console.error("Failed to fetch class year:", err);
        }
      };
      fetchClassYear().then(() => {
        fetchTopEntries({
          collection: "students",
        }).then((res) => {
          setTopEntries(res.data as { [key: string]: Entry[] });
        });
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchRandomBuckets = httpsCallable(functions, "fetchRandomBuckets");
    const getBuckets = async () => {
      const cached = localStorage.getItem("buckets");
      if (cached) {
        return JSON.parse(cached);
      }

      const buckets = await fetchRandomBuckets({ collection: "students" });
      localStorage.setItem("buckets", JSON.stringify(buckets.data));
      return buckets.data;
    };

    const getEntriesFromPairs = httpsCallable(functions, "getEntriesFromPairs");

    if (!user || !selectedYear || subsetEntries[selectedYear].length > 0) return;

    const updateEntriesForYear = async () => {
      if (rankingPairs[selectedYear].length > 0) {
        setCurrentPairIndex(rankingIndices[selectedYear] + 1);
        return;
      }

      if (!user || topEntries[selectedYear].length < 2) return;

      setIsPairsLoading(true);
      try {
        const buckets = await getBuckets();
        const pairs = buckets[selectedYear] || [];
        const response = await getEntriesFromPairs({
          collection: "students",
          pairs: pairs,
        });
        const entries = response.data as { [key: string]: Entry };
        const entryList = Object.entries(entries).map(([id, data]) => ({
          ...data,
          id,
        }));
        setSubsetEntries({
          ...subsetEntries,
          [selectedYear]: entryList,
        });

        const idToIndex = Object.fromEntries(
          entryList.map((entry, index) => [entry.id, index])
        );

        const randomPairs: { entry1: number; entry2: number }[] = pairs.map(
          (pair: { a: string; b: string }) => ({
            entry1: idToIndex[pair.a.trim()],
            entry2: idToIndex[pair.b.trim()],
          })
        );

        if (randomPairs.length === 0) {
          setIsPairsLoading(false);
          return;
        }
        setRankingPairs((prev) => ({
          ...prev,
          [selectedYear]: randomPairs,
        }));
        setRankingIndices((prev) => ({
          ...prev,
          [selectedYear]: 0,
        }));
        setIsPairsLoading(false);
      } catch (err) {
        console.error("Failed to fetch pairs:", err);
        setIsPairsLoading(false);
      }
    };

    updateEntriesForYear();
  }, [selectedYear, topEntries, user, classYear, rankingPairs, rankingIndices, subsetEntries]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result?.user || auth.currentUser;
      const email = user?.email;

      if (!email?.endsWith("@yale.edu")) {
        alert("Only yale.edu emails are allowed");
        await signOut(auth);
      }
    } catch (err) {
      console.error("Login error:", err);
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

    const entry1 = subsetEntries[selectedYear][selectedEntries.entry1];
    const entry2 = subsetEntries[selectedYear][selectedEntries.entry2];

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

    setTopEntries((prevTopEntries) => {
      const updatedTopEntries = { ...prevTopEntries };
      for (const year of ["All", selectedYear]) {
        const list = updatedTopEntries[year] ?? [];
        let found1 = false;
        let found2 = false;

        const updatedList = list.map((entry) => {
          if (entry.id === entry1.id) {
            found1 = true;
            return { ...entry, score: score1 };
          }
          if (entry.id === entry2.id) {
            found2 = true;
            return { ...entry, score: score2 };
          }
          return entry;
        });

        if (!found1) updatedList.push({ ...entry1, score: score1 });
        if (!found2) updatedList.push({ ...entry2, score: score2 });

        updatedTopEntries[year] = updatedList.sort((a, b) => b.score - a.score);
      }
      return updatedTopEntries;
    });


    try {
      await updateEloRating({
        collectionName: "students",
        entry1Id: entry1.id,
        entry2Id: entry2.id,
        mode: mode,
        subcategory: selectedYear,
      });
    } catch (error) {
      console.error("Error calling updateEloRating:", error);
    }
  };

  if (!authChecked) {
    return (
      <div className="relative flex items-center justify-center min-h-[100dvh] bg-gray-100">
        <BackgroundOrbs />
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[100dvh] bg-gray-100 flex-col gap-8">
        <BackgroundOrbs />
        <div className="text-6xl sm:text-8xl font-bold font-['Knewave'] tracking-wide z-10">
          RANKYALE
        </div>
        <div className="text-lg sm:text-xl italic font-light mx-10 text-center z-10">
          Who is the most popular student?
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-blue-700 transition z-10 cursor-pointer"
        >
          Sign in with your Yale email
        </button>
      </div>
    );
  }

  const isLoading = topEntries[selectedYear].length === 0;

  return (
    <>
      <BackgroundOrbs />
      <Navbar handleLogout={handleLogout} />
      <div className="flex flex-col w-full min-h-[100dvh] z-10 relative">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 sm:mt-0 mb-8 sm:mb-8 text-center bg-clip-text z-10">
            Who is the Most Popular Student?
          </h1>
          {!isLoading && (
            <div className="flex bg-white rounded-lg shadow-md p-1 mb-2 text-xs sm:text-base z-10">
              {["All", "Freshmen", "Sophomores", "Juniors", "Seniors"].map(
                (year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-3 sm:px-6 py-2 rounded-md transition-colors duration-200 cursor-pointer ${
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
            key={selectedYear}
            pairs={rankingPairs[selectedYear]}
            currentPairIndex={currentPairIndex}
            entriesSubset={subsetEntries[selectedYear]}
            onVote={handleVote}
            remainingVotes={rankingRemainingVotes[selectedYear]}
            valid={true}
            isPairsLoading={isPairsLoading}
            isRankingLoading={isLoading}
          />
        </div>

        <div className="flex flex-col items-center w-full">
          {isLoading ? (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="flex flex-col items-center mx-3 sm:mx-0 sm:w-full space-y-3">
              {topEntries[selectedYear].slice(0, 100).map((entry, index) => (
                <div
                  key={entry.email ?? entry.name}
                  className="bg-white/50 backdrop-blur-lg rounded-xl py-2 px-4 flex flex-row justify-between items-center space-x-4 w-full max-w-xl shadow-xs"
                >
                  <div className="flex flex-row gap-4 text-xl font-medium">
                    <span>{index + 1}</span>
                    <span className="sm:text-xl text-lg">{entry.name}</span>
                  </div>
                  <img
                    src={
                      entry.image === "assets/defaultStudent.avif"
                        ? "/defaultStudent.png"
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
      <Footer />
    </>
  );
}

export default Home;
