import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailer(movieId);

  return (
    <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-[90vh] lg:h-[100vh] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&playlist=" +
          trailerVideo?.key +
          "&loop=1&controls=0&modestbranding=1&showinfo=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/20 to-transparent"></div>
    </div>
  );
};

export default VideoBackGround