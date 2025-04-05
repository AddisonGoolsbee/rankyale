import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleLogout: () => Promise<void>;
}

const Navbar: FC<NavbarProps> = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
          <a
            href="https://forms.gle/iTfYsY3BHdP8TxHL6"
            target="_blank"
            rel="noopener noreferrer"
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Opt Out
          </a>
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
        <div className="sm:hidden flex flex-col items-end gap-4 pr-6 pb-4 text-base font-semibold animate-fade-in-down">
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <a
            href="https://forms.gle/iTfYsY3BHdP8TxHL6"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Opt Out
          </a>
          <a
            href="https://forms.gle/Pqmeex4c6ubKRDAh8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Feedback
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="text-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
