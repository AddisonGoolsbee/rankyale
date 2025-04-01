import { FC } from "react";

import Navbar from "../components/Navbar";

const About: FC = () => (
  <>
    <Navbar handleLogout={() => Promise.resolve()} />
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold mt-16 sm:mt-40 mb-4">Welcome to Rank Yale 🏆</h1>

      <div className="flex flex-col justify-center items-center text-xl max-w-2xl mx-auto gap-4 my-8">
        <p>
          Rank Yale is a toxic website for ranking the popularity of Yale
          students. There's not much more to say. Have fun!
        </p>

        <div>
          I love feedback! Fill out&nbsp;
          <a
            href="https://forms.gle/Pqmeex4c6ubKRDAh8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-all duration-300 underline"
          >
            this anonymous google form
          </a>
          &nbsp;to let me know of any requested features, complaints, bugs, etc.
        </div>
      </div>
      {/* <img
        src="src/assets/me.jpeg"
        alt="A humorous depiction of me"
        className="w-48 h-48 rounded-lg mx-auto mb-4 object-cover"
      /> */}
    </div>
  </>
);

export default About;
