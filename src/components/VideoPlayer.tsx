"use client";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        style={{
          width: "100vw",
          // height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default VideoPlayer;
