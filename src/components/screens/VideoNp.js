import React from "react";
//import VideoPlayer from "react-video-js-player";
import ReactPlayer from "react-player";
import Videonp from "../../videos/videonp.mp4";
import "../styles/video.css";

export const VideoNp = () => {
  return (
    <div className="container-video">
      <ReactPlayer
        url={Videonp}
        width="80%"
        height="auto"
        autoplay
        controls
        playing
        className="react-player"
      />
    </div>
  );
};
