import React from "react";
import Navbar from "./Navbar";
import useNowPlaying from "../hooks/useNowPlaying";
import { useSelector } from "react-redux";
import Main from "./Main";

const Browse = () => {
  useNowPlaying();

  const movies = useSelector(store => store?.movies);
  if(!movies) return;

  
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export default Browse;
