import { Entry } from "../utils/types";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { functions } from "../utils/firebase";
import { httpsCallable } from "firebase/functions";
import { User } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebase";

type RankModalProps = {
  onClose: () => void;
  entries: Entry[];
  setEntries: React.Dispatch<React.SetStateAction<Entry[]>>;
  user: User;
};

const RankingModal = ({
  onClose,
  entries,
  setEntries,
  user,
}: RankModalProps) => {
  const NUM_RANKINGS = 10;
  const updateEloRating = httpsCallable(functions, "updateEloRating");
  const K = 32;

  const [rankingPairs, setRankingPairs] = useState<
    { entry1: number; entry2: number }[]
  >([]);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  const handleVote = async (
    selectedEntries: { entry1: number; entry2: number },
    mode: number
  ) => {
    // mode 0 = entry1, mode 1 = entry2, mode 2 = indifferent
    const entry1 = entries[selectedEntries.entry1];
    const entry2 = entries[selectedEntries.entry2];

    const expectedScore1 =
      1 / (1 + Math.pow(10, (entry2.score - entry1.score) / 400));
    const expectedScore2 =
      1 / (1 + Math.pow(10, (entry1.score - entry2.score) / 400));

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

    setEntries((prevEntries) => {
      const updatedEntries = [...prevEntries];
      updatedEntries[selectedEntries.entry1] = { ...entry1, score: score1 };
      updatedEntries[selectedEntries.entry2] = { ...entry2, score: score2 };
      return updatedEntries;
    });

    // update on the backend where it's secure
    try {
      await updateEloRating({
        collectionName: "colleges",
        entry1Id: entry1.id,
        entry2Id: entry2.id,
        mode: mode,
      });
    } catch (error) {
      console.error("Error calling updateEloRating:", error);
    }

    setCurrentPairIndex(currentPairIndex + 1);
    if (currentPairIndex + 1 >= NUM_RANKINGS) {
      onClose();
    }
  };

  useEffect(() => {
    if (!user || entries.length < 2) return;

    const fetchVotesAndGeneratePairs = async () => {
      const votesSnap = await getDocs(
        query(
          collection(db, "votes"),
          where("uid", "==", user.uid),
          where("collection", "==", "colleges")
        )
      );

      const seenPairs = new Set<string>();
      votesSnap.forEach((doc) => {
        const { entryA, entryB } = doc.data();
        seenPairs.add(`${entryA}_${entryB}`);
      });

      const randomPairs: { entry1: number; entry2: number }[] = [];

      let attempts = 0;
      while (randomPairs.length < NUM_RANKINGS && attempts < 1000) {
        const i1 = Math.floor(Math.random() * entries.length);
        let i2 = Math.floor(Math.random() * entries.length);
        while (i2 === i1) {
          i2 = Math.floor(Math.random() * entries.length);
        }

        const [idA, idB] = [entries[i1].id, entries[i2].id].sort();
        const pairKey = `${idA}_${idB}`;

        const alreadyInList = randomPairs.some((pair) => {
          const [a, b] = [
            entries[pair.entry1].id,
            entries[pair.entry2].id,
          ].sort();
          return `${a}_${b}` === pairKey;
        });

        if (!seenPairs.has(pairKey) && !alreadyInList) {
          randomPairs.push({ entry1: i1, entry2: i2 });
        }

        attempts++;
      }

      setRankingPairs(randomPairs);
    };

    fetchVotesAndGeneratePairs();
  }, [user, entries]);

  const Choice = ({
    entry,
    onClick,
  }: {
    entry: Entry;
    onClick: () => void;
  }) => {
    return (
      <div
        onClick={onClick}
        className="flex flex-col flex-1 items-center bg-white rounded-lg p-4 shadow-md hover:scale-105 duration:300 transition active:scale-95"
      >
        {rankingPairs.length !== 0 && (
          <>
            <img
              src={entry.image}
              alt={entry.name}
              className="w-32 sm:w-48 h-32 sm:h-48 object-contain mb-4"
            />
            <span className="text-xl font-semibold">{entry.name}</span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div
        className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl w-full text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 left-2 p-2 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-semibold">Which dining hall is better?</h2>
        <div className="text-gray-500 my-2">
          {NUM_RANKINGS - currentPairIndex} more to go
        </div>

        <div className="flex justify-center gap-12 flex-row mx-8 my-6">
          <Choice
            entry={entries[rankingPairs[currentPairIndex]?.entry1]}
            onClick={() => handleVote(rankingPairs[currentPairIndex], 0)}
          />
          <Choice
            entry={entries[rankingPairs[currentPairIndex]?.entry2]}
            onClick={() => handleVote(rankingPairs[currentPairIndex], 1)}
          />
        </div>

        <button
          onClick={() => handleVote(rankingPairs[currentPairIndex], 2)}
          className="px-4 py-3 bg-gray-400 text-white text-lg rounded-lg hover:bg-gray-500 duration-200 transition"
        >
          I'm indifferent
        </button>
      </div>
    </div>
  );
};

export default RankingModal;
