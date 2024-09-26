import React from "react";
import { useSelector } from "react-redux";
import FavoritesContent from "./FavoritesContent";

const Favorites = () => {
  const fav = useSelector((store) => store?.favorites);
  console.log(fav);
  return (
    <div>
      <div className="container mx-auto border-2 border-slate-100 rounded-lg">
        <div className="flex justify-center text-center border-b-2 border-slate-500 my-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-crown flex items-center text-center text-orange-600 m-1"
          >
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
            <path d="M5 21h14" />
          </svg>
          <h1 className="text-4xl mx-2">Favorites</h1>
        </div>
        <main className="leaderboard__profiles max-h-96 overflow-y-auto scroll-smooth">
          {fav.length === 0 ? (
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-tv-minimal-play mr-2"
              >
                <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
                <path d="M7 21h10" />
                <rect width="20" height="14" x="2" y="3" rx="2" />
              </svg> 
              <h1 className="text-sm">No Favorite Movies Added</h1>
            </div>
          ) : (
            fav.map((fm) => <FavoritesContent fm={fm} />)
          )}
        </main>
      </div>
    </div>
  );
};

export default Favorites;
