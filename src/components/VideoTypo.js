import React from "react";

const VideoTypo = ({ videosClips }) => {
  return (
    <div className="m-0 cursor-pointer" key={videosClips.key}>
      <iframe
        className="rounded-lg cursor-pointer"
        width="100%"
        height="300"
        src={`https://www.youtube.com/embed/${videosClips.key}?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&disablekb=1&iv_load_policy=3`}
        title={`${videosClips.name}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTypo;
