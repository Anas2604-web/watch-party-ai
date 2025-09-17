import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailer(movieId);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
    </div>
  );
};

export default VideoBackGround;
