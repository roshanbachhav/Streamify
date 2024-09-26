import React, { useState } from "react";
import MoviePhotos from "./MoviePhotos";
import MovieVideos from "./MovieVideos";

const MovieTabs = ({ id }) => {
  const [activeTab, setActiveTab] = useState("photo");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="container my-5">
        <div className="">
          <ul className="px-4 flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <button
                className={`inline-flex items-center justify-center p-4 text-base border-b-2 rounded-t-lg ${
                  activeTab === "photo"
                    ? "text-orange-600 border-orange-600 dark:text-blue-500 dark:border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                onClick={() => handleTabClick("photo")}
              >
                Photos
              </button>
            </li>
            <li className="mr-2">
              <button
                className={`inline-flex items-center justify-center p-4 text-base border-b-2 rounded-t-lg ${
                  activeTab === "video"
                    ? "text-orange-600 border-orange-600 dark:text-blue-500 dark:border-blue-500"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }`}
                onClick={() => handleTabClick("video")}
              >
                Video
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container">
        {activeTab === "photo" && (
          <div className="container relative overflow-x-auto shadow-md sm:rounded-lg min-h-96">
            <MoviePhotos id={id} />
          </div>
        )}
        {activeTab === "video" && (
          <div className="container relative overflow-x-auto shadow-md sm:rounded-lg min-h-96">
            <MovieVideos id={id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieTabs;
