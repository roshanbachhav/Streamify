import { useEffect, useState } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const [ loading , setLoading ] = useState(true);
    const dispatch = useDispatch();
    const topRatedMovies = async () => {
        const topRatedMoviesApi = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', OPTIONS_OF_API)
        const json = await topRatedMoviesApi.json();
        setLoading(false)
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(() => {
        topRatedMovies();
    },[])

    return loading;
}

export default useTopRatedMovies;