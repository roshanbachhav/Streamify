import React from "react";
import MiniSwiper from "./MiniSwiper";
import { MUTE, UNMUTE } from "../utils/constants";

const TrailerBackground = ({ title, description, date , id , mute , setMute}) => {
  const handleMute = () => {
    setMute(!mute);
  };
  return (
    <div className="absolute inset-0 aspect-video bg-gradient-to-t from-black overflow-hidden">
      <div
        className="row d-flex flex-column w-full justify-content-end"
        style={{ height: "100vh" }}
      >
        <div className="col-md-12 flex">
          {/* <div className="col-md-2"></div> */}
          <div className="col-md-8 justify-end p-5">
            <h1 className="text-7xl font-extrabold trailer-title text-white">
              {title}
            </h1>
            <p className="  text-xl my-3 w-50 text-center text-white trailer-overview">
              {description.slice(0, 150)}
            </p>
            <p className="text-white text-center w-50 text-2xl">
              Release : {date}
            </p>
          </div>
          <div className="col-md-4 flex justify-center">
            <MiniSwiper id={id} />
            <div className="container flex justify-center items-start pt-28">
              <button className="text-white" onClick={handleMute} title="Unmute / Mute">
                {mute ? UNMUTE : MUTE}
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4 flex justify-center">
          <button className="w-36 hover:bg-orange-500 bg-slate-50 text-black font-bold py-2 px-4 rounded flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-4 mr-5"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerBackground;
