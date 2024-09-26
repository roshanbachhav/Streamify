import React from "react";
import { useSelector } from "react-redux";
import { POSTER_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useSearchbar from "./useSearchbar";
import Shimmer from "./Shimmer";

const SearchbarOutput = ({ loading }) => {
  const searchMoviesList = useSelector((store) => store?.movies?.searchMovies);
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);

  return (
    <div>
      {loading ? (
        <Shimmer />
      ) : (
        <div className="container mx-auto my-5 min-h-50 overflow-x-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {searchMoviesList
              ?.filter(
                (filterMovies) =>
                  filterMovies?.POSTER_URL || filterMovies?.backdrop_path
              )
              .map((movie) => (
                <div
                  key={movie.id}
                  className="mx-3 relative text-xs flex w-full max-w-[23rem] flex-col rounded-lg shadow-lg"
                >
                  <div className="upcoming-poster relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-sm bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                      src={
                        POSTER_URL +
                        (movie?.poster_path || movie?.backdrop_path)
                      }
                      alt={movie?.original_title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      className={`!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button ${
                      darkTheme ? "btn-dark-theme" : "btn-ligth-theme"
                    }`}
                    >
                      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="p-2 text-center mt-2 items-center">
                    <div className="flex flex-col items-center text-center justify-between mb-3">
                      <h5 className="block ml-4 text-center text-base antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        {movie?.original_title
                          ? movie.original_title.slice(0, 16)
                          : "Untitled"}
                      </h5>
                      <p className="flex items-center gap-1.5 font-sans text-sm font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <span className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-blue-gray-900"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                          Language:
                        </span>
                        <span className="font-semibold">
                          {movie?.original_language?.toUpperCase()}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-1">
                    <Link to={`/movies/movie-info/${movie?.id}`}>
                      <button
                        className={`w-full select-none rounded-lg bg-gray-900 hover:bg-orange-600 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none flex items-center justify-center ${
                          darkTheme ? "btn-dark-theme" : "btn-ligth-theme"
                        }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          className="w-4 mr-5 fill-current"
                        >
                          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                        </svg>
                        Play
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchbarOutput;
