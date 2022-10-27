import React from "react";
import Lottie from "lottie-react";
import Course from "../../assets/programming.json";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold  tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                <span className="inline-block text-blue-500 mt-3 font-sans font-bold">
               <div className="flex items-center"> <FaCode className="mr-3"></FaCode> Programming Language</div>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                A programming language is a system of notation for writing
                computer programs. Most programming languages are text-based
                formal languages, but they may also be graphical. They are a
                kind of computer language.Some
                languages have both, with the basic language defined by a
                standard and extensions taken from the dominant implementation
                being common. Programming language theory is a subfield of
                computer science that deals with the design, implementation,
                analysis, characterization, and classification of programming
                languages.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Course</span>
                <FaCode></FaCode>
              </Link>
              <Link
                href="/blog"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700 text-lg text-blue-400"
              >
                Learn More...
              </Link>
            </div>
          </div>

          <div className="relative lg:w-1/2 ">
            <div className="w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96 mb-10">
              <Lottie  animationData={Course} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
