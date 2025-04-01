import { Entry } from "../utils/types";
import { useEffect } from "react";

type RankingInterfaceProps = {
  pairs: { entry1: number; entry2: number }[];
  currentPairIndex: number;
  entriesSubset: Entry[];
  onVote: (
    selectedEntries: { entry1: number; entry2: number },
    mode: number
  ) => void;
  maxRankings: number;
  valid: boolean;
};

const Choice = ({ entry, onClick }: { entry: Entry; onClick: () => void }) => {
  useEffect(() => {
    if (entry) {
      const img = new Image();
      img.src = entry.image
        ? entry.image === "assets/defaultStudent.avif"
          ? "src/assets/defaultStudent.png"
          : entry.image
        : "src/assets/defaultStudent.png"; // Default image if entry.image is undefined
    }
  }, [entry]);

  if (!entry) return null;

  return (
    <div
      onClick={onClick}
      className="flex flex-col flex-1 items-center rounded-lg hover:scale-105 transition duration-200 active:scale-100"
    >
      <div className="h-40 min-w-28 sm:h-60 sm:min-w-44 md:h-80 md:min-w-60 w-full flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src={
            entry.image === "assets/defaultStudent.avif"
              ? "src/assets/defaultStudent.png"
              : entry.image
          }
          alt={entry.name}
          className="object-contain h-full"
          style={{ display: entry.image ? "block" : "none" }}
        />
        {!entry.image && <div className="text-gray-400">Loading...</div>}
      </div>
      <span className="text-2xl font-semibold">{entry.name}</span>
    </div>
  );
};

const RankingInterface = ({
  pairs,
  currentPairIndex,
  entriesSubset,
  onVote,
  maxRankings,
  valid,
}: RankingInterfaceProps) => {
  useEffect(() => {
    const preloadImages = (index: number) => {
      if (index < pairs.length) {
        const preloadEntry = (entryIndex: number) => {
          const entry = entriesSubset[entryIndex];
          if (entry) {
            const img = new Image();
            img.src = entry.image
              ? entry.image === "assets/defaultStudent.avif"
                ? "src/assets/defaultStudent.png"
                : entry.image
              : "src/assets/defaultStudent.png"; // Default image if entry.image is undefined
          }
        };

        // Preload the next two pairs
        preloadEntry(pairs[index]?.entry1);
        preloadEntry(pairs[index]?.entry2);
        if (index + 1 < pairs.length) {
          preloadEntry(pairs[index + 1]?.entry1);
          preloadEntry(pairs[index + 1]?.entry2);
        }
      }
    };

    preloadImages(currentPairIndex);
  }, [currentPairIndex, pairs, entriesSubset]);

  if (pairs.length === 0) {
    return (
      <>
        {entriesSubset.length !== 0 && (
          <>
            {valid ? (
              <div className="text-2xl text-gray-600 my-10">
                Come back tomorrow for more rankings!
              </div>
            ) : (
              <div className="text-2xl text-gray-600 my-10">
                You are unable to rank this category
              </div>
            )}
          </>
        )}
      </>
    );
  }

  return (
    <div className="p-6 w-full text-center relative flex flex-col items-center">
      <div className="flex justify-center gap-4 sm:gap-12 flex-row sm:mx-8 mb-6">
        <Choice
          entry={entriesSubset[pairs[currentPairIndex - 1]?.entry1]}
          onClick={() => onVote(pairs[currentPairIndex - 1], 0)}
        />
        <div className="text-3xl font-semibold self-center">or</div>
        <Choice
          entry={entriesSubset[pairs[currentPairIndex - 1]?.entry2]}
          onClick={() => onVote(pairs[currentPairIndex - 1], 1)}
        />
      </div>
      <button
        onClick={() => onVote(pairs[currentPairIndex - 1], 2)}
        className="px-12 py-4 bg-white text-xl font-semibold rounded-lg hover:scale-105 active:scale-100 transition duration-200 shadow-lg"
      >
        I'm indifferent
      </button>
      <div className="text-gray-500 my-2">
        {maxRankings - currentPairIndex + 1} more to go
      </div>
    </div>
  );
};

export default RankingInterface;
