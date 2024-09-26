import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useSearchbar from "./useSearchbar";
import { OPTIONS_OF_API } from "../utils/constants";

const Searchbar = ({ page , setLoading }) => {
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);
  const [query, setQuery] = useState("");
  const searchResultRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchResultRef.current.value);
  };
  useSearchbar(query, page , setLoading);

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
                    ref={searchResultRef}
                    type="text"
                    className="text-xl w-full h-14 mr-4 px-3 outline-none border-1 border-slate-900 text-black rounded-2xl"
                    placeholder="Search for movies by genre or cast member..."
                  />
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className={`bg-slate-900 w-44 h-14 text-xl transition ease-in-out delay-100 rounded-2xl hover:bg-orange-700 ${
                      darkTheme
                        ? "btn-dark-theme border-1 border-white"
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
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
