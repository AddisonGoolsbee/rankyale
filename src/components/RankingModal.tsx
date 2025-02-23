import { Entry } from "../types";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

type RankModalProps = {
    onClose: () => void;
    entries: Entry[];
};

const RankingModal = ({ onClose, entries }: RankModalProps) => {
    const NUM_RANKINGS = 10;
    const K = 32;

    const [rankingPairs, setRankingPairs] = useState<{ entry1: number; entry2: number }[]>([]);
    const [currentPairIndex, setCurrentPairIndex] = useState(0);

    const handleVote = (selectedEntries: { entry1: number; entry2: number }, mode: number) => {
        // mode 0 = entry1, mode 1 = entry2, mode 2 = indifferent
        const entry1 = entries[selectedEntries.entry1];
        const entry2 = entries[selectedEntries.entry2];

        const expectedScore1 = 1 / (1 + Math.pow(10, (entry2.score - entry1.score) / 400));
        const expectedScore2 = 1 / (1 + Math.pow(10, (entry1.score - entry2.score) / 400));

        let score1 = entry1.score;
        let score2 = entry2.score;

        // Apply Elo adjustments based on user choice
        if (mode === 0) {
            // Entry1 wins
            score1 += K * (1 - expectedScore1);
            score2 += K * (0 - expectedScore2);
        } else if (mode === 1) {
            // Entry2 wins
            score1 += K * (0 - expectedScore1);
            score2 += K * (1 - expectedScore2);
        } else {
            // Indifferent
            // No change in scores
        }

        // Update the scores
        entries[selectedEntries.entry1].score = score1;
        entries[selectedEntries.entry2].score = score2;

        setCurrentPairIndex(currentPairIndex + 1);
        if (currentPairIndex + 1 >= NUM_RANKINGS) {
            onClose();
        }
    };

    useEffect(() => {
        const randomPairs: { entry1: number; entry2: number }[] = [];
        while (randomPairs.length < NUM_RANKINGS) {
            const randomIndex1 = Math.floor(Math.random() * entries.length);
            let randomIndex2 = Math.floor(Math.random() * entries.length);

            while (randomIndex2 === randomIndex1) {
                randomIndex2 = Math.floor(Math.random() * entries.length);
            }

            // Check if the pair already exists
            const pairExists = randomPairs.some(pair =>
                (pair.entry1 === randomIndex1 && pair.entry2 === randomIndex2) ||
                (pair.entry1 === randomIndex2 && pair.entry2 === randomIndex1)
            );

            if (!pairExists) {
                randomPairs.push({ entry1: randomIndex1, entry2: randomIndex2 });
            }
        }
        setRankingPairs(randomPairs);
    }, [entries]);

    const Choice = ({ entry, onClick }: { entry: Entry, onClick: () => void }) => {
        return (
            <div onClick={onClick} className="flex flex-col flex-1 items-center bg-white rounded-lg p-4 shadow-md hover:scale-105 duration:300 transition active:scale-95">
                {rankingPairs.length !== 0 && (
                    <>
                        <img src={entry.image} alt={entry.name} className="w-32 sm:w-48 h-32 sm:h-48 object-contain mb-4" />
                        <span className="text-xl font-semibold">{entry.name}</span>
                    </>
                )}
            </div >
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl w-full text-center relative" onClick={(e) => e.stopPropagation()}>

                <button onClick={onClose} className="absolute top-2 left-2 p-2 text-gray-600 hover:text-black">
                    <X size={24} />
                </button>


                <h2 className="text-3xl font-semibold">Which dining hall is better?</h2>
                <div className="text-gray-500 my-2">{NUM_RANKINGS - currentPairIndex} more to go</div>

                <div className="flex justify-center gap-12 flex-row mx-8 my-6">
                    <Choice entry={entries[rankingPairs[currentPairIndex]?.entry1]} onClick={() => handleVote(rankingPairs[currentPairIndex], 0)} />
                    <Choice entry={entries[rankingPairs[currentPairIndex]?.entry2]} onClick={() => handleVote(rankingPairs[currentPairIndex], 0)} />
                </div>

                <button onClick={() => handleVote(rankingPairs[currentPairIndex], 2)} className="px-4 py-2 bg-[#bcbcbc] text-white rounded hover:bg-gray-400 duration-200 transition">
                    I'm indifferent
                </button>
            </div>
        </div>
    );
};

export default RankingModal;
