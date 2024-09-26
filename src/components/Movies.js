import React, { useState } from "react";
import Navbar from "./Navbar";
import MoviesData from "./MoviesData";
import { useSelector } from "react-redux";
import SmartAssistant from "./SmartAssistant";
import Pagination from "./Pagination";

const Movies = () => {
  const [ currentPage , setCurrentPage ] = useState(1);
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);

  const smartAssistantSwitch = useSelector(
    (store) => store.configure.smartAssist
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
          <MoviesData page={currentPage} />
          <Pagination page={currentPage} setPage={setCurrentPage}/>
        </>
      )}
    </div>
  );
};

export default Movies;
