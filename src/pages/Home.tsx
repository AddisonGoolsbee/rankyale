import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCollection } from "../api";
import { Entry } from "../types";
import RankingModal from "../components/RankingModal";

function Home() {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [modalOpen, setModalOpen] = useState(false);


    useEffect(() => {
        getCollection("colleges").then((data) => {
            console.log("Fetched data:", data);
            const sorted = data.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
            setEntries(sorted);
        });
    }, []);

    const rankStuff = () => {
        if (entries.length < 2) return;
        setModalOpen(true);
    };

    return (
        <div className="flex flex-col w-full bg-gray-100 min-h-screen">
            <div className="flex items-center w-screen justify-between p-4 pr-10">
                <div className="text-3xl font-bold">College Rankings</div>
                <Link to="/about" className="underline">
                    About
                </Link>
            </div>

            <div className="flex flex-col items-center w-full my-10">
                <div onClick={rankStuff} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-semibold p-4 rounded-lg shadow-lg cursor-pointer hover:from-blue-600 hover:to-purple-600 transition duration-300 ease-in-out active:scale-95">
                    Rank Colleges
                </div>
            </div>

            {modalOpen && (
                <RankingModal
                    onClose={() => setModalOpen(false)}
                    entries={entries}
                    setEntries={setEntries}
                />
            )}

            <div className="mt-8 flex flex-col items-center w-full">
                {entries.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flex flex-col items-center w-full space-y-2">
                        {entries.map((college, index) => (
                            <div key={college.name} className="bg-white rounded-xl p-4 flex flex-row justify-between items-center space-x-4 w-full max-w-xl shadow-xs">
                                <div className="flex flex-row gap-4 text-xl font-medium">
                                    <span className="">{index + 1}</span>
                                    <span className="">{college.name}</span>
                                    <span className="text-gray-500 text-base self-center">score: {Math.floor(college.score)}</span>
                                </div>
                                <img src={college.image} alt={college.name} className="w-10 h-10 object-contain" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
