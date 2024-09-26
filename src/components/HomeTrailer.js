import React, { useEffect, useRef } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const HomeTrailer = ({ movieId , mute }) => {
  const movieTrailerId = useSelector(
    (store) => store?.movies?.addTrailers?.key
  );
  const iFrameRef = useMovieTrailer(movieId, mute , movieTrailerId);

  return (
    <div className="overflow-x-hidden">
      <iframe
        className="w-full h-[100%] aspect-video overflow-x-hidden"
        ref={iFrameRef}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default HomeTrailer;
