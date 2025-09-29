import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const mainMovie = movies ? movies[0] : null;

  const { title, overview, id } = mainMovie || {};

  return (
    <div className="relative w-full h-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-10">
        <VideoTitle title={title} overview={overview} />
      </div>

      {id && (
        <div className="w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-screen">
          <VideoBackGround movieId={id} />
        </div>
      )}
    </div>
  );
};


export default MainContainer