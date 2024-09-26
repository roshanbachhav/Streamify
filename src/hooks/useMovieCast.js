import { useEffect } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { castMembers, crewMembers } from "../utils/movieMemberSlice";

const useMovieCast = (id) => {
  const dispatch = useDispatch();
  const handleMoviesCasting = async () => {
    const api = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      OPTIONS_OF_API
    );
    const json = await api.json();
    dispatch(castMembers(json.cast));
    dispatch(crewMembers(json.crew));
  };

  useEffect(() => {
    handleMoviesCasting();
  }, [id]);
};

export default useMovieCast;
