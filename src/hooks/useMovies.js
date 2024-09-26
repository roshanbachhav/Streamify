import { useEffect } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { movieDetail } from "../utils/movieSlice";



const useMovies = (id) => {
    const dispatch = useDispatch();
    const Movie = async () => {
      const movieApi = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        OPTIONS_OF_API
      );
      const json = await movieApi.json();
      dispatch(movieDetail(json));
    };
  
    useEffect(() => {
      Movie();
    }, [id]);
}

export default useMovies
