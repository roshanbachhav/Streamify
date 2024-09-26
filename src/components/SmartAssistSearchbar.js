import React, { useRef } from "react";
import useSmartAssistSearch from "../hooks/useSmartAssistSearch";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";

const SmartAssistSearchbar = ({ setLoading }) => {
  const textOfSearchbar = useRef(null);
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);
  const handleSubmit = useSmartAssistSearch(textOfSearchbar, setLoading);

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="row">
          <div className="flex justify-center mt-36">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="flex">
                  <input
                    ref={textOfSearchbar}
                    type="text"
                    className="text-xl w-full h-14 mr-4 px-3 outline-none border-1 border-slate-900 text-black rounded-2xl"
                    placeholder="Search for movies by genre or cast member..."
                  />
                  <button
                    onClick={handleSubmit}
                    className={`bg-slate-900 w-44 h-14 text-xl transition ease-in-out delay-100 hover:bg-orange-700 rounded-2xl ${
                      darkTheme
                        ? "btn-dark-theme border-1 border-white "
                        : "btn-ligth-theme"
                    }`}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row my-3">
            <div className="col-md-1"></div>
            <div className="col-md-11 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                class="lucide lucide-circle-alert mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
              <p className="line-1 anim-typewriter w-full max-w-4xl text-base">
                <Typewriter
                  options={{
                    strings: [
                      "Welcome! This AI feature is designed to assist with movie searches. Please use it responsibly and avoid misuse.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 30,
                    deleteSpeed: 50,
                    pauseFor: 2000,
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartAssistSearchbar;
