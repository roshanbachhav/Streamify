import { useEffect } from "react";
import { NOW_PLAYING_API, OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice"

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const api_data = await fetch(NOW_PLAYING_API, OPTIONS_OF_API);
    const json = await api_data.json();
    dispatch(addNowPlayingMovies(json.results));
    // console.log("USENOWPLAYING: " , json.results)
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlaying;