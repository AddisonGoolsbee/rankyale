import { FC } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleLogout: () => Promise<void>;
}

const Navbar: FC<NavbarProps> = ({ handleLogout }) => (
  <div className="flex items-center w-screen justify-between sm:p-6 p-4 sm:pr-10">
    <div
      className="text-3xl sm:text-4xl font-bold font-['Knewave'] tracking-wide cursor-pointer"
      onClick={() => (window.location.href = "/")}
    >
      RANKYALE
    </div>
    <div className="flex items-center gap-4 sm:gap-8 text-base sm:text-lg font-semibold">
      <Link
        to="/about"
        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
      >
        About
      </Link>
      <a
        href="https://forms.gle/Pqmeex4c6ubKRDAh8"
        target="_blank"
        rel="noopener noreferrer"
        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hidden sm:block"
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
);

export default Navbar;
