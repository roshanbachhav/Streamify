import React from "react";
import { POSTER_URL } from "../utils/constants";

const FavoritesContent = ({fm}) => {
  return (
    <div>
      <article className="flex items-center space-x-3 p-2 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        <img
          src={POSTER_URL + fm.img}
          alt={fm.title}
          loading="lazy"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-sm tracking-wide ml-1">
            {fm.title}
          </span>
          <span className="text-orange-400 flex my-1 font-bold text-xs text-left ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-star"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {fm.popularity}
            <span className="opacity-80 font-semibold text-xs ml-1"></span>
          </span>
        </div>
      </article>
    </div>
  );
};

export default FavoritesContent;
