import React, { useEffect, useState } from "react";
import { OPTIONS_OF_API, POSTER_URL } from "../utils/constants";

const MovieProvidersPlatforms = ({ id }) => {
  const [providers, setProviders] = useState([]);
  const moviePlatformsAvailable = async () => {
    const movieProviderApi = await fetch(
      "https://api.themoviedb.org/3/movie/1094138/watch/providers",
      OPTIONS_OF_API
    );
    const json = await movieProviderApi.json();
    setProviders(json.results.IN.flatrate[0]);
  };

  useEffect(() => {
    moviePlatformsAvailable();
  }, [id]);

  const { logo_path } = providers;
  return (
    <div>
      <div className="container flex">
        <img src={POSTER_URL + logo_path} className="w-20" alt="Streaming logo" />
      </div>
    </div>
  );
};

export default MovieProvidersPlatforms;
