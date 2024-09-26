import { useEffect, useState } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const [ loading , setLoading ] = useState(true);
  const dispatch = useDispatch();
  const upcomingMovies = async () => {
    const upcomingMoviesData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      OPTIONS_OF_API
    );
    const json = await upcomingMoviesData.json();
    setLoading(false);
    dispatch(addUpcomingMovies(json.results));
    
  };

  useEffect(() => {
    upcomingMovies();
  }, []);

  return loading;
};

export default useUpcomingMovies;
