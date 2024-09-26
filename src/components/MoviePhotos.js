import React, { useEffect, useState } from "react";
import { OPTIONS_OF_API, POSTER_URL } from "../utils/constants";

const MoviePhotos = ({ id }) => {
  const [poster, setPoster] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const imageApiHandling = async () => {
    const imageApi = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      OPTIONS_OF_API
    );
    const json = await imageApi.json();
    setPoster(json.backdrops);
  };

  useEffect(() => {
    imageApiHandling();
  }, [id]);

  const imagesData = !showMore ? poster.slice(0, 3) : poster;
  const handleImageLength = poster.length > 8;
  return (
    <div className="container">
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${showMore ? 'transition-all duration-300 ease-in-out' : 'transition-all duration-300 ease-in-out overflow-hidden'}`}>
        {imagesData.map((data, index) => (
          <div className="relative aspect-square" key={index}>
            <img
              className="absolute aspect-square top-0 left-0 w-full h-full object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
              src={POSTER_URL + data.file_path}
              alt="posters"
            />
          </div>
        ))}
      </div>
      <div className="mx-auto flex justify-center items-center my-3">
        {handleImageLength && <div
          className="flex flex-col justify-center cursor-pointer"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          )}

          {!showMore && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </div>}
      </div>
    </div>
  );
};

export default MoviePhotos;