import { useEffect } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { recommendedMovies } from "../utils/movieSlice";

const useRecommandedMovies = (id) => {
  const dispatch = useDispatch();

  const RecommandedMovies = async () => {
    const recommanded = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      OPTIONS_OF_API
    );
    const json = await recommanded.json();
    dispatch(recommendedMovies(json.results));
  };

  useEffect(() => {
    RecommandedMovies();
  }, []);
};

export default useRecommandedMovies;
