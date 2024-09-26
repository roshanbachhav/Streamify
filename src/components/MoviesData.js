import React, { useEffect, useState } from "react";
import { OPTIONS_OF_API, POSTER_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteMovies } from "../utils/favoritesSlice";

const MoviesData = ({ page }) => {
  const darkTheme = useSelector((store) => store?.configure?.darkTheme);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const favorite = useSelector((store) => store?.favorites);


  const movieData = async (currentPage) => {
    const moviesApi = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`,
      OPTIONS_OF_API
    );
    const json = await moviesApi.json();
    setLoading(false);
    setMovies(json.results);
  };

  useEffect(() => {
    movieData(page);
  }, [page]);

  return (
    <div className="container">
      <div className="container mx-auto min-h-50 overflow-x-hidden">
        {loading ? (
          <div className="mt-28">
            <Shimmer />
          </div>
        ) : (
          <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
            {movies
              ?.filter(
                (filterMovies) =>
                  (filterMovies?.POSTER_URL &&
                    filterMovies?.original_language === "en" &&
                    filterMovies?.original_language === "hi" &&
                    filterMovies?.original_language === "mr") ||
                  filterMovies?.backdrop_path
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
                      alt={movie?.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      className={`!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase ${
                        favorite.some((fav) => fav.id === movie?.id)
                          ? "text-red-500"
                          : "text-white"
                      } transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                      type="button"
                      onClick={() => {
                        dispatch(
                          addFavoriteMovies({
                            id: movie?.id,
                            title: movie?.title,
                            popularity: movie?.popularity,
                            img: movie?.poster_path,
                          })
                        );
                      }}
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
                    <div className="flex items-center text-center justify-between mb-3">
                      <h5 className="block ml-4 text-center text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                        {movie?.original_title.slice(0, 16)}
                      </h5>
                      <p className="flex items-center gap-1.5 font-sans text-sm text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="15"
                          height="15"
                          color="#fff"
                          fill="none"
                        >
                          <path
                            d="M13.8561 22C26.0783 19 19.2338 7 10.9227 2C9.9453 5.5 8.47838 6.5 5.54497 10C1.66121 14.6339 3.5895 20 8.96719 22C8.1524 21 6.04958 18.9008 7.5 16C8 15 9 14 8.5 12C9.47778 12.5 11.5 13 12 15.5C12.8148 14.5 13.6604 12.4 12.8783 10C19 14.5 16.5 19 13.8561 22Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {Math.ceil(movie?.popularity)}
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
        )}
      </div>
    </div>
  );
};

export default MoviesData;
