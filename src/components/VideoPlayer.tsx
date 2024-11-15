"use client";

import { useEffect, useRef } from "react";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.error("Video playback failed:", err);
      });
    }
  }, [videoSrc]);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          // height: "100vh",
          // objectFit: "cover",
        }}
      />
    </div>
  );
};

export default VideoPlayer;
