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
  remainingVotes: number;
  valid: boolean;
  isPairsLoading: boolean;
};

const Choice = ({ entry, onClick }: { entry: Entry; onClick: () => void }) => {
  useEffect(() => {
    if (entry) {
      const img = new Image();
      img.src = entry.image
        ? entry.image === "assets/defaultStudent.avif"
          ? "/defaultStudent.png"
          : entry.image
        : "/defaultStudent.png"; // Default image if entry.image is undefined
    }
  }, [entry]);

  if (!entry) return null;

  return (
    <div
      onClick={onClick}
      className="flex flex-col flex-1 items-center rounded-lg hover:scale-105 transition duration-200 active:scale-100 cursor-pointer"
    >
      <div className="h-46 min-w-32 sm:h-60 sm:min-w-44 md:h-80 md:min-w-80 w-full flex items-center justify-center rounded-lg overflow-hidden mx-4">
        <img
          src={
            entry.image === "assets/defaultStudent.avif"
              ? "/defaultStudent.png"
              : entry.image
          }
          alt={entry.name}
          className="object-contain h-full min-w-32 sm:min-w-44 md:min-w-60 rounded-lg"
          style={{ display: entry.image ? "block" : "none" }}
        />
        {!entry.image && <div className="text-gray-400">Loading...</div>}
      </div>
      <span
        className={`sm:mt-4 mt-2 font-semibold ${
          entry.name.length > 17 ? "text-sm" : "text-base sm:text-2xl"
        }`}
      >
        {entry.name}
      </span>
    </div>
  );
};

const RankingInterface = ({
  pairs,
  currentPairIndex,
  entriesSubset,
  onVote,
  remainingVotes,
  valid,
  isPairsLoading,
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
                ? "/defaultStudent.png"
                : entry.image
              : "/defaultStudent.png";
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

  if (isPairsLoading && entriesSubset.length !== 0) {
    return (
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin my-24"></div>
    );
  }

  if (pairs.length - currentPairIndex <= 0) {
    return (
      <>
        {entriesSubset.length !== 0 && (
          <div className="sm:text-lg text-sm text-gray-600 flex flex-col items-center sm:my-6 my-4 sm:mb-8 mb-6">
            {valid ? (
              <div>Come back tomorrow for more rankings!</div>
            ) : (
              <div>You are unable to rank this category</div>
            )}
          </div>
        )}
      </>
    );
  }

  return (
    <div className="sm:p-6 py-4 w-full text-center relative flex flex-col items-center">
      <div className="flex justify-center flex-row sm:mx-8 sm:mb-6 mb-4">
        <Choice
          entry={entriesSubset[pairs[currentPairIndex - 1]?.entry1]}
          onClick={() => onVote(pairs[currentPairIndex - 1], 0)}
        />
        <div className="sm:text-3xl text-xl font-semibold self-center">or</div>
        <Choice
          entry={entriesSubset[pairs[currentPairIndex - 1]?.entry2]}
          onClick={() => onVote(pairs[currentPairIndex - 1], 1)}
        />
      </div>
      <button
        onClick={() => onVote(pairs[currentPairIndex - 1], 2)}
        className="sm:px-12 px-8 sm:py-6 py-3 bg-white sm:text-2xl text-base font-semibold rounded-2xl hover:scale-105 active:scale-100 transition duration-200 shadow-lg"
      >
        I'm indifferent
      </button>
      <div className="text-gray-400 my-2 sm:text-base text-sm">
        {remainingVotes - currentPairIndex + 1} votes left today for this
        category
      </div>
    </div>
  );
};

export default RankingInterface;
