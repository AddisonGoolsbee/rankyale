import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollection } from "../utils/api";
import { Entry } from "../utils/types";
import RankingModal from "../components/RankingModal";
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

const auth = getAuth();

function Home() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [entriesSubset, setEntriesSubset] = useState<Entry[]>([]); // subset of entries based on selected year, not present in non-student categories
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [classYear, setClassYear] = useState<number | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [selectedYear, setSelectedYear] = useState<string>("All");

  const yearMap: { [key: string]: number } = {
    Freshmen: 2028,
    Sophomores: 2027,
    Juniors: 2026,
    Seniors: 2025,
  };

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
      fetchClassYear().then((classYear) => {
        getCollection("students").then((data) => {
          const sorted = data.sort(
            (a, b) => b.score - a.score || a.name.localeCompare(b.name)
          );
          setEntries(sorted);
          const filtered = sorted.filter(
            (entry) => entry.class_year === classYear
          );
          setEntriesSubset(filtered);
        });
      });
    }
  }, [user]);

  const updateEntriesSubset = (year: string) => {
    setSelectedYear(year);
    if (year === "All") {
      setEntriesSubset(entries);
    } else {
      const numericYear = yearMap[year];
      const filtered = entries.filter(
        (entry) => entry.class_year === numericYear
      );
      setEntriesSubset(filtered);
    }
  };

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

  const rankStuff = () => {
    if (entries.length < 2) return;
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col w-full bg-gray-100 min-h-screen">
      <div className="flex items-center w-screen justify-between p-4 pr-10">
        <div className="text-3xl font-bold">RankYale</div>
        <div className="flex items-center gap-6">
          <Link to="/about" className="underline">
            About
          </Link>
          <button
            onClick={handleLogout}
            className="text-sm underline text-red-600 hover:text-red-800"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center w-full my-10">
        <h1 className="text-5xl font-bold mb-8 text-center bg-clip-text">
          Who is the Most Popular Student?
        </h1>
        <div className="flex bg-white rounded-lg shadow-md p-1 mb-8">
          {["All", "Freshmen", "Sophomores", "Juniors", "Seniors"].map(
            (year) => (
              <button
                key={year}
                onClick={() => updateEntriesSubset(year)}
                className={`px-6 py-2 rounded-md transition-colors duration-200 ${
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
        <div
          onClick={rankStuff}
          className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-semibold p-6 py-4 rounded-2xl shadow-lg transition duration-300 ease-in-out ${
            selectedYear === "All" || yearMap[selectedYear] === classYear
              ? "cursor-pointer hover:from-blue-600 hover:to-purple-600 active:scale-95"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          Vote
        </div>
      </div>

      {modalOpen && (
        <RankingModal
          onClose={() => setModalOpen(false)}
          entries={entriesSubset}
          setEntries={setEntriesSubset}
          user={user}
          collectionName="students"
          prompt="Who is more popular?"
        />
      )}

      <div className="mt-8 flex flex-col items-center w-full">
        {entriesSubset.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col items-center w-full space-y-2">
            {entriesSubset.slice(0, 100).map((entry, index) => (
              <div
                key={entry.email ?? entry.name}
                className="bg-white rounded-xl p-4 flex flex-row justify-between items-center space-x-4 w-full max-w-xl shadow-xs"
              >
                <div className="flex flex-row gap-4 text-xl font-medium">
                  <span>{index + 1}</span>
                  <span>{entry.name}</span>
                  <span className="text-gray-500 text-base self-center">
                    score: {Math.floor(entry.score)}
                  </span>
                </div>
                <img
                  src={
                    entry.image === "assets/defaultStudent.avif"
                      ? "../assets/defaultStudent.avif"
                      : entry.image
                  }
                  alt={entry.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
