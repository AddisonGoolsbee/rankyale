import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getColleges } from "../api";
import { Entry } from "../types";

function Home() {
    const [colleges, setColleges] = useState<Entry[]>([]);

    useEffect(() => {
        getColleges().then((data) => {
            const sorted = data.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
            setColleges(sorted);
        });
    }, []);

    return (
        <div className="flex flex-col w-full bg-gray-100 min-h-screen">
            <div className="flex items-center w-screen justify-between p-4 pr-10">
                <div className="text-3xl font-bold">College Rankings</div>
                <Link to="/about" className="underline">
                    About
                </Link>
            </div>

            <div className="mt-12 flex flex-col items-center w-full">
                {colleges.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flex flex-col items-center w-full space-y-2">
                        {colleges.map((college, index) => (
                            <div key={college.name} className="bg-white rounded-xl p-4 flex flex-row justify-between items-center space-x-4 w-full max-w-xl shadow-xs">
                                <div className="flex flex-row gap-4 text-xl font-medium">
                                    <span className="">{index + 1}</span>
                                    <span className="">{college.name}</span>
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
