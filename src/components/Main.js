import React, { useState } from "react";
import { useSelector } from "react-redux";
import TrailerBackground from "./TrailerBackground";
import UpcomingMovies from "./UpcomingMovies";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import SmartAssistant from "./SmartAssistant";
import HomeTrailer from "./HomeTrailer";
import SaveFavorites from "./SaveFavorites";

const Main = () => {
  const [mute , setMute] = useState(false);
  const movies = useSelector((store) => store?.movies?.addNowPlayingMovies);
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);
  const smartAssistantSwitch = useSelector(
    (store) => store.configure.smartAssist
  );
  if (!movies) return;
  const TrailerMovie = movies[1];

  const { original_title, overview, release_date, id } = TrailerMovie;
  console.log(id);
  return (
    <div
      className={`scroll-smooth min-vh-100 ${
        darkTheme ? "dark-theme" : "light-theme"
      }`}
    >
      {smartAssistantSwitch ? (
          <SmartAssistant />
      ) : (
        <>
          <TrailerBackground
            title={original_title}
            description={overview}
            date={release_date}
            id={id}
            mute={mute}
            setMute={setMute}
          />
          <HomeTrailer movieId={id} mute={mute}/>
          <SaveFavorites />
          <UpcomingMovies />
          <PopularMovies />
          <TopRatedMovies />
        </>
      )}
    </div>
  );
};

export default Main;
