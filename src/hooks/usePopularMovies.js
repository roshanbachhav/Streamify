import { useEffect, useState } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const PopularMovies = async () => {
    const popularMoviesApi = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      OPTIONS_OF_API
    );
    const json = await popularMoviesApi.json();
    setLoading(false);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    PopularMovies();
  }, []);
  return loading;
};

export default usePopularMovies;
