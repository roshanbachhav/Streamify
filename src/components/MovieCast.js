import React from "react";
import useMovieCast from "../hooks/useMovieCast";
import Cast from "./Cast";
import Crew from "./Crew";

const MovieCast = ({ id }) => {
  useMovieCast(id);
  return (
    <div>
      <Cast />
      <Crew />
    </div>
  );
};

export default MovieCast;
