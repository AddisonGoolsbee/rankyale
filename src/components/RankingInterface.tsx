import { Entry } from "../utils/types";
import { useEffect, useState } from "react";
// import ConfettiBurst from "./ConfettiBurst";

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
  isRankingLoading: boolean;
  isSandwich: boolean;
};

const Choice = ({
  entry,
  onClick,
  isSandwich,
}: {
  entry: Entry;
  onClick: () => void;
  isSandwich: boolean;
}) => {
  // const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    if (disabled) return;
    // setClicked(true);
    setDisabled(true);
    setTimeout(() => {
      // setClicked(false);
      setDisabled(false);
    }, 400);
    onClick();
  };

  useEffect(() => {
    if (entry) {
      const img = new Image();
      img.src = entry.image
        ? entry.image === "assets/defaultStudent.avif"
          ? "/defaultStudent.png"
          : entry.image
        : "/defaultStudent.png";
    }
  }, [entry]);

  if (!entry) return null;

  return (
    <div
      onClick={handleClick}
      className="flex flex-col flex-1 items-center rounded-lg hover:scale-105 transition duration-200 active:scale-100 cursor-pointer"
    >
      <div className="relative aspect-[3/4] w-36 sm:w-48 md:w-60 overflow-hidden mx-4 z-10 rounded-lg flex items-center justify-center">
        <img
          src={
            isSandwich
              ? "/sandwich.gif"
              : !entry.image || entry.image === "assets/defaultStudent.avif"
              ? "/defaultStudent.png"
              : entry.image
          }
          alt={entry.name}
          key={entry.image}
          className={`absolute inset-0 w-full h-full ${
            isSandwich ? "object-contain" : "object-cover"
          }`}
        />
      </div>

      <span
        className={`sm:mt-4 mt-2 font-semibold ${
          entry.name.length > 17
            ? "text-sm sm:text-2xl"
            : "text-base sm:text-2xl"
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
  isRankingLoading,
  isSandwich,
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

  if (!valid) {
    return (
      <div className="sm:p-6 py-4 w-full text-center relative flex flex-col items-center">
        <div className="text-lg sm:text-2xl my-4">
          You are unable to rank people :(
        </div>
      </div>
    );
  }

  if (isRankingLoading) {
    return;
  }

  if (isPairsLoading) {
    return (
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin my-24"></div>
    );
  }

  if (remainingVotes - currentPairIndex <= 0) {
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
          entry={
            entriesSubset[
              pairs[100 - remainingVotes + currentPairIndex]?.entry1
            ]
          }
          onClick={() =>
            onVote(pairs[100 - remainingVotes + currentPairIndex], 0)
          }
          isSandwich={isSandwich}
        />
        <div className="sm:text-3xl text-xl font-semibold self-center">or</div>
        <Choice
          entry={
            entriesSubset[
              pairs[100 - remainingVotes + currentPairIndex]?.entry2
            ]
          }
          onClick={() =>
            onVote(pairs[100 - remainingVotes + currentPairIndex], 1)
          }
          isSandwich={isSandwich}
        />
      </div>
      <button
        onClick={() =>
          onVote(pairs[100 - remainingVotes + currentPairIndex], 2)
        }
        className="sm:px-12 px-8 sm:py-6 py-3 bg-white sm:text-2xl text-base font-semibold rounded-2xl hover:scale-105 active:scale-100 transition duration-200 shadow-lg"
      >
        I'm indifferent
      </button>
      <div className="text-gray-400 my-2 sm:text-base text-sm">
        {remainingVotes - currentPairIndex} votes left today for this category
      </div>
    </div>
  );
};

export default RankingInterface;
