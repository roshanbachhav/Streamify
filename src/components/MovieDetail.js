import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useMovies from "../hooks/useMovies";
import MovieDescription from "./MovieDescription";
import TrailerVideo from "./TrailerVideo";
import MovieCast from "./MovieCast";
import MovieTabs from "./MovieTabs";
import UserKnows from "./UserKnows";

const MovieDetail = () => {
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);
  const movieDetail = useSelector((store) => store?.movies?.movieDetail);
  const [mute , setMute] = useState(false);
  const { id } = useParams();
  useMovies(id);

  const { original_title , overview , release_date , } = movieDetail;
  return (
    <div
      className={`scroll-smooth min-vh-100 ${
        darkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      <TrailerVideo movieId={id} mute={mute}/>
      <MovieDescription title={original_title} description={overview} date={release_date} mute={mute} setMute={setMute} />
      <MovieTabs id={id} />
      <UserKnows id={id}/>
      <MovieCast id={id} />
    </div>
  );
};

export default MovieDetail;
