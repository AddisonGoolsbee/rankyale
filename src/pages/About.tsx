import { FC } from "react";

import Navbar from "../components/Navbar";
import BackgroundOrbs from "../components/BackgroundOrbs";
import Footer from "../components/Footer";

const About: FC = () => (
  <>
    <BackgroundOrbs />
    <div className="min-h-screen flex flex-col relative">
      <Navbar handleLogout={() => Promise.resolve()} />
      <div className="text-center p-5 relative z-10 flex-1">
        <h1 className="text-[1.8rem] sm:text-4xl font-bold sm:mt-24 mb-4">
          Welcome to Rank Yale 🏆
        </h1>

        <div className="flex flex-col justify-center items-center text-base sm:text-xl max-w-xl mx-auto gap-8 my-8">
          <p>
            Rank Yale is a website for ranking the popularity of Yale students.
            Don't take the rankings too seriously, though! If you want to opt
            out from being ranked, there's a button in the header for it, though
            do note that this will prevent you from voting.
          </p>
          <p>
            My name is Addison Goolsbee and I have too much time on my hands.
            Here's my horrendous Yalies photo, hopefully yours is a little
            better:
          </p>
          <img
            src="https://yalestudentphotos.s3.amazonaws.com/3ab9ef532e796c8afef63d6dcd253773.jpg"
            alt="A humorous depiction of me"
            className="w-48 h-56 rounded-lg mx-auto mb-4 object-cover"
          />

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
            &nbsp;to let me know what you think. Also check out{" "}
            <a
              href="https://addisongoolsbee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 transition-all duration-300 underline"
            >
              my website
            </a>
            .
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default About;
