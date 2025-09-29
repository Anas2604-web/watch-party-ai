import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="p-2 sm:p-4 min-h-screen mt-56 sm:-mt-20 relative z-20">
      {movies.nowPlayingMovies ||
      movies.trendingMovies ||
      movies.popularMovies ||
      movies.topRatedMovies ? (
        <div className="space-y-4 sm:space-y-6 ml-0 sm:ml-6 md:ml-14">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Trending" movies={movies.trendingMovies} />
          <MovieList title="Popular Movies" movies={movies.popularMovies} />
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        </div>
      ) : (
        <p className="text-gray-500 text-center sm:text-left">Loading movies...</p>
      )}
    </div>
  );
};



export default SecondaryContainer;
