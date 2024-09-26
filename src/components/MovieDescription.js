import React from "react";
import { useSelector } from "react-redux";
import { MUTE, UNMUTE } from "../utils/constants";
import MiniSwiper from "./MiniSwiper";
import MovieProvidersPlatforms from "./MovieProvidersPlatforms";

const MovieDescription = ({ title, description, date, mute, setMute , id }) => {
  const movieDetail = useSelector((store) => store?.movies?.movieDetail);
  const handleMute = () => {
    setMute(!mute);
  };
  return (
    <div className="absolute inset-0 aspect-video bg-gradient-to-t from-black overflow-hidden">
      <div
        className="row d-flex flex-column w-full justify-content-end"
        style={{ height: "100vh" }}
      >
        <div className="col-md-12 flex">
          <div className="col-md-8 justify-end p-5">
            <h1 className="text-7xl font-extrabold trailer-title text-white">
              {title}
            </h1>
            <div className="container">
              {movieDetail.genres && movieDetail.genres.length > 0 ? (
                movieDetail.genres.map((g) => (
                  <span
                    key={g.id}
                    className="mx-1 my-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 transform scale-100 hover:scale-125 transition-transform duration-200 ease-in-out cursor-default"
                  >
                    {g.name}
                  </span>
                ))
              ) : (
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  No genres available
                </span>
              )}
            </div>
            <p className="text-xl my-3 w-50 text-center text-white trailer-overview">
              {description && description.length > 0 ? (
                description.slice(0, 150)
              ) : (
                <span>Loading ....</span>
              )}
            </p>
            <p className="text-white text-center w-50 text-2xl">
              Release : {date}
            </p>
          </div>
          <div className="col-md-4 flex items-center">
            <div className="container flex flex-col justify-center items-center">
              <button className="text-white mb-5" onClick={handleMute} title="Unmute / Mute">
                {mute ? UNMUTE : MUTE}
              </button>
              <h1 className="text-white text-xl mb-2">Streaming on </h1>
              <MovieProvidersPlatforms id={id} />
            </div>
          </div>
        </div>
        <div className="col-md-4 flex justify-center"></div>
      </div>
    </div>
  );
};

export default MovieDescription;
