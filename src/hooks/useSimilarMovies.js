import { useEffect } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { similarMovies } from "../utils/movieSlice";

const useSimilarMovies = (id) => {
    const dispatch = useDispatch();
  const SimilarMoviesHandle = async () => {
    const Api = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
      OPTIONS_OF_API
    );
    const json = await Api.json();
    dispatch(similarMovies(json.results))
  };

  useEffect(() => {
    SimilarMoviesHandle();
  }, [id]);
};

export default useSimilarMovies;
