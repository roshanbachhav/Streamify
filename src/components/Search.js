import React, { useState } from "react";
import Searchbar from "./Searchbar";
import SearchbarOutput from "./SearchbarOutput";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Pagination from "./Pagination";
import SmartAssistant from "./SmartAssistant";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);
  const [loading , setLoading ] = useState(true);
  const smartAssistantSwitch = useSelector(
    (store) => store.configure.smartAssist
  );
  const searchedMoviesList = useSelector(
    (store) => store?.movies?.searchMovies
  );

  return (
    <div
      className={`scroll-smooth min-vh-100 ${
        darkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <Navbar />
      {smartAssistantSwitch ? (
        <SmartAssistant />
      ) : (
        <>
          <Searchbar page={currentPage} setLoading={setLoading} />
          <SearchbarOutput loading={loading} />
          {searchedMoviesList && searchedMoviesList.length > 0 ? (
            <Pagination page={currentPage} setPage={setCurrentPage} />
          ) : null }
        </>
      )}
    </div>
  );
};

export default Search;
