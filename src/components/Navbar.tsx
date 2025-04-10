import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { httpsCallable } from "firebase/functions";
import { functions } from "../utils/firebase";

interface NavbarProps {
  handleLogout: () => Promise<void>;
  banned?: boolean;
  setBanned?: (banned: boolean) => void;
  isSandwich?: boolean;
  setIsSandwich?: (isSandwich: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({
  handleLogout,
  banned,
  setBanned,
  isSandwich,
  setIsSandwich,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOptOut = async () => {
    try {
      const optOut = httpsCallable(functions, "optOut");
      await optOut({ collection: "students" });
      setShowModal(false);
      setBanned?.(true);
      alert("You have been removed and can no longer participate.");
    } catch (err) {
      console.error("Opt-out failed", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="w-screen z-10">
        {/* Top Bar */}
        <div className="flex items-center justify-between sm:p-6 p-4 sm:pr-10">
          <div
            className="text-3xl sm:text-4xl font-bold font-['Knewave'] tracking-wide cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            RANKYALE
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className="sm:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 z-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="w-6 h-1 bg-gray-700 rounded-full transition-all" />
            <span className="w-6 h-1 bg-gray-700 rounded-full transition-all" />
            <span className="w-6 h-1 bg-gray-700 rounded-full transition-all" />
          </button>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-8 text-lg font-semibold">
            <Link
              to="/about"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <button
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsSandwich?.(!isSandwich)}
            >
              Sandwich
            </button>
            {!banned && (
              <button
                onClick={() => setShowModal(true)}
                className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              >
                Opt Out
              </button>
            )}
            <a
              href="https://forms.gle/Pqmeex4c6ubKRDAh8"
              target="_blank"
              rel="noopener noreferrer"
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              Feedback
            </a>
            <button
              onClick={handleLogout}
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full text-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Mobile nav dropdown */}
        {isOpen && (
          <div className="sm:hidden flex flex-col items-end pr-6 pb-4 -mt-2 text-base font-semibold animate-fade-in-down">
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="p-2 pl-8"
            >
              About
            </Link>
            <button
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full p-2 pl-8"
              onClick={() => setIsSandwich?.(!isSandwich)}
            >
              Sandwich
            </button>
            {!banned && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowModal(true);
                }}
                className="p-2 pl-8"
              >
                Opt Out
              </button>
            )}
            <a
              href="https://forms.gle/Pqmeex4c6ubKRDAh8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="p-2 pl-8"
            >
              Feedback
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
              className="text-red-600 p-2 pl-8"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Are you sure?
            </h2>
            <p className="mb-6">
              If you opt out, you will no longer show up on the site. In
              addition, you will be <span className="font-bold">UNABLE</span> to
              rank people. This action is{" "}
              <span className="font-bold">irreversible</span>.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleOptOut}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
