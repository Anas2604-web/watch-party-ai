import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div className="p-4">
      {/* Section title */}
        <h2 className="text-2xl font-bold mb-4">Explore More</h2>

      {/* Horizontal scrollable movie list */}
      {movies && movies.length > 0 ? (
        <MovieList title="Now Playing" movies={movies} />
      ) : (
        <p className="text-gray-500">Loading movies...</p>
      )}
    </div>
  );
};

export default SecondaryContainer;
