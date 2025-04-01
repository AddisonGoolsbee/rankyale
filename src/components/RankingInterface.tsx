import { Entry } from "../utils/types";

type RankingInterfaceProps = {
  pairs: { entry1: number; entry2: number }[];
  currentPairIndex: number;
  entriesSubset: Entry[];
  onVote: (
    selectedEntries: { entry1: number; entry2: number },
    mode: number
  ) => void;
  maxRankings: number;
};

const Choice = ({ entry, onClick }: { entry: Entry; onClick: () => void }) => {
  if (!entry) return null;
  return (
    <div
      onClick={onClick}
      className="flex flex-col flex-1 items-center rounded-lg hover:scale-105 transition duration-200 active:scale-100"
    >
      <img
        src={
          entry.image === "assets/defaultStudent.avif"
            ? "src/assets/defaultStudent.png"
            : entry.image
        }
        alt={entry.name}
        className="h-40 sm:h-60 md:h-80 object-contain mb-4 rounded-lg"
      />
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
}: RankingInterfaceProps) => {
  if (pairs.length === 0) {
    return (
      <div className="text-2xl text-gray-600">
        Come back tomorrow for more rankings!
      </div>
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
