import { useEffect, useState } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { searchMovies } from "../utils/movieSlice";

const useSearchbar = (query,currentPage , setLoading) => {
  const dispatch = useDispatch();
  const handleingSearchApi = async (currentPage) => {
    const api = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${currentPage}`,
      OPTIONS_OF_API
    );
    const json = await api.json();
    dispatch(searchMovies(json.results));
    setLoading(false);
  };

  useEffect(() => {
    handleingSearchApi(currentPage);
  },[query , currentPage]);

};

export default useSearchbar;
