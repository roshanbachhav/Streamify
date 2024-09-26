import React, { useState } from "react";
import SmartAssistSearchbar from "./SmartAssistSearchbar";
import SmartAssistOutput from "./SmartAssistOutput";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

const SmartAssistant = () => {
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);
  const aiMoviesList = useSelector(
    (store) => store?.movies?.aiSearchMovies
  );
  const [loading, setLoading] = useState(false);
  return (
    <div
      className={`scroll-smooth min-vh-100 ${
        darkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <SmartAssistSearchbar setLoading={setLoading} />
      <SmartAssistOutput loading={loading} />
      {aiMoviesList && aiMoviesList.length > 0 ? (
        <Pagination />
      ) : null}
    </div>
  );
};

export default SmartAssistant;
