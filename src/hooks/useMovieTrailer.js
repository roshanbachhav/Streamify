import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { addTrailers } from "../utils/movieSlice";
import { OPTIONS_OF_API } from "../utils/constants";

const useMovieTrailer = (movieId, mute , movieTrailerId) => {
  const dispatch = useDispatch();
  const iFrameRef = useRef(null);

  useEffect(() => {
    const getMovieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          OPTIONS_OF_API
        );

        if (!response.ok) {
          throw new Error("Failed to fetch trailer");
        }

        const data = await response.json();
        const trailer =
          data.results.find((m) => m.type === "Trailer") ||
          data.results.find((m) => m.type === "Teaser");

        if (trailer) {
          dispatch(addTrailers(trailer));
        } else {
          console.error("No trailer or teaser found for this movie.");
        }
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    getMovieTrailer();
  }, [movieId, dispatch]);

  useEffect(() => {
    if (iFrameRef.current) {
      const url = `https://www.youtube.com/embed/${movieTrailerId}?autoplay=1&mute=${
        mute ? 0 : 1
      }&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${movieTrailerId}`;
      iFrameRef.current.src = url;
    }
  }, [movieId, movieTrailerId, mute]);

  useEffect(() => {
    if (iFrameRef.current) {
      const url = new URL(iFrameRef.current.src);
      url.searchParams.set("mute", mute ? "0" : "1");
      iFrameRef.current.src = url.toString();
    }
  }, [mute]);

  return iFrameRef; 
};

export default useMovieTrailer;
