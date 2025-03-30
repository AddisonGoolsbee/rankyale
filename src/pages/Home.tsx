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
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [classYear, setClassYear] = useState<number | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

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
    if (user) {
      const fetchClassYear = async () => {
        try {
          const getClassYear = httpsCallable(functions, "getClassYear");
          const res = await getClassYear();
          const data = res.data as { classYear: number };
          setClassYear(data.classYear);
        } catch (err) {
          console.error("Failed to fetch class year:", err);
        }
      };
      fetchClassYear();

      getCollection("colleges").then((data) => {
        const sorted = data.sort(
          (a, b) => b.score - a.score || a.name.localeCompare(b.name)
        );
        setEntries(sorted);
      });
    }
  }, [user]);

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
        <div className="text-3xl font-bold">College Rankings</div>
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
        <div
          onClick={rankStuff}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-semibold p-4 rounded-lg shadow-lg cursor-pointer hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out active:scale-95"
        >
          Rank Colleges
        </div>
      </div>

      {modalOpen && (
        <RankingModal
          onClose={() => setModalOpen(false)}
          entries={entries}
          setEntries={setEntries}
          user={user}
        />
      )}

      <div className="mt-8 flex flex-col items-center w-full">
        {entries.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col items-center w-full space-y-2">
            {entries.map((college, index) => (
              <div
                key={college.name}
                className="bg-white rounded-xl p-4 flex flex-row justify-between items-center space-x-4 w-full max-w-xl shadow-xs"
              >
                <div className="flex flex-row gap-4 text-xl font-medium">
                  <span>{index + 1}</span>
                  <span>{college.name}</span>
                  <span className="text-gray-500 text-base self-center">
                    score: {Math.floor(college.score)}
                  </span>
                </div>
                <img
                  src={college.image}
                  alt={college.name}
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
