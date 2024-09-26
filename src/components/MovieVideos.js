// This component is Movie Detials of Movies Video
import React, { Suspense, useEffect, useState } from "react";
import { OPTIONS_OF_API } from "../utils/constants";
import SwiperShimmer from "./SwiperShimmer";

const MovieVideos = ({ id }) => {
  const [video, setVideo] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const videoApiHandling = async () => {
    const videoApi = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      OPTIONS_OF_API
    );
    const json = await videoApi.json();
    setVideo(json.results);
  };

  useEffect(() => {
    videoApiHandling();
  }, [id]);
  //   const videoData = !showMore ? video.slice(0, 8) : video;
  const handleVideoLength = video.length > 8;

  const VideoTypo = React.lazy(() => import("./VideoTypo"));
  return (
    <div className="container">
      <h1 className="text-3xl font-medium mb-2 mx-2 pt-4">Clips</h1>
      <div
        className={`grid grid-cols-0 md:grid-cols-3 gap-3 ${
          showMore
            ? "transition-all duration-300 ease-in-out"
            : "transition-all duration-300 ease-in-out overflow-hidden"
        }`}
      >
        {video
          .filter((fv) => fv.type === "Clip")
          .map((videosClips) => (
            <Suspense
              fallback={
                <div>Loading</div>
              }
            >
              <VideoTypo videosClips={videosClips} />
            </Suspense>
          ))}
      </div>

      {showMore && (
        <>
          <h1 className="text-3xl font-medium mt-5 mb-2 mx-2 border-t-2 pt-4">Trailer & Teasers</h1>
          <div
            className={`grid grid-cols-0 md:grid-cols-3 gap-4 ${
              showMore
                ? "transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out overflow-hidden"
            }`}
          >
            {video
              .filter((fv) => fv.type === "Trailer")
              .map((videosClips) => (
                <Suspense
                  fallback={
                    <div
                      role="status"
                      class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                    >
                      <svg
                        class="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  }
                >
                  <VideoTypo videosClips={videosClips} />
                </Suspense>
              ))}
          </div>

          <h1 className="text-3xl font-medium mt-5 mb-2 mx-2 border-t-2 pt-4">Behind The Scenes</h1>
          <div
            className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${
              showMore
                ? "transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out overflow-hidden"
            }`}
          >
            {video
              .filter((fv) => fv.type === "Behind the Scenes")
              .map((videosClips) => (
                <Suspense
                  fallback={
                    <div
                      role="status"
                      class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                    >
                      <svg
                        class="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  }
                >
                  <VideoTypo videosClips={videosClips} />
                </Suspense>
              ))}
          </div>

          <h1 className="text-3xl font-medium mt-5 mb-2 mx-2 border-t-2 pt-4">Featurette</h1>
          <div
            className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${
              showMore
                ? "transition-all duration-300 ease-in-out"
                : "transition-all duration-300 ease-in-out overflow-hidden"
            }`}
          >
            {video
              .filter((fv) => fv.type === "Featurette")
              .map((videosClips) => (
                <Suspense
                  fallback={
                    <div
                      role="status"
                      class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                    >
                      <svg
                        class="w-10 h-10 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  }
                >
                  <VideoTypo videosClips={videosClips} />
                </Suspense>
              ))}
          </div>
        </>
      )}

      <div className="mx-auto flex justify-center items-center my-3">
        {handleVideoLength && (
          <div
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
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieVideos;
