import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div className="p-4 min-h-screen -mt-48 relative z-20">
      {/* Horizontal scrollable movie list */}
      {movies && movies.length > 0 ? (
        <div className="space-y-6  ml-14">
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Trending" movies={movies} />
        <MovieList title="Op" movies={movies} />
        <MovieList title="Now Playing" movies={movies} />
        </div>
      ) : (
        <p className="text-gray-500">Loading movies...</p>
      )}
    </div>
  );
};

export default SecondaryContainer;
