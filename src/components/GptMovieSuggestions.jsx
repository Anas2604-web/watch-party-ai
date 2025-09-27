import { useSelector } from "react-redux";
import { FaPlay, FaStar } from "react-icons/fa";

const placeholderMovies = [
  "Movie A", "Movie B", "Movie C", "Movie D", "Movie E",
  "Movie F", "Movie G", "Movie H", "Movie I", "Movie J"
];

const GptMovieSuggestions = () => {
  const movieSuggestions = useSelector((state) => state.gpt.movieNames);

  const moviesWithPosters =
    movieSuggestions?.filter((movie) => movie.poster_path) || [];

  const showPlaceholders = moviesWithPosters.length === 0;

  return (
  <div className="mt-10 px-3 sm:px-4 lg:px-6">
    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-white">Top Picks For You</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 cursor-pointer">
      {showPlaceholders
        ? placeholderMovies.map((movie, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse"
            >
              <div className="h-40 sm:h-52 md:h-60 w-full bg-gray-700"></div>
              <div className="p-3 sm:p-4">
                <div className="h-3 bg-gray-600 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-600 rounded w-1/2"></div>
              </div>
            </div>
          ))
        : moviesWithPosters.map((movie, index) => (
            <div
              key={index}
              className="relative group bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-40 sm:h-52 md:h-60 w-full object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-3 sm:p-4">
                <FaPlay className="text-3xl sm:text-4xl text-white mb-1 sm:mb-2" />
                <h3 className="font-semibold text-white text-sm sm:text-lg mb-1 truncate">
                  {movie.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {movie.release_date
                    ? new Date(movie.release_date).getFullYear()
                    : "Unknown Year"}
                </p>
                {movie.vote_average ? (
                  <div className="flex items-center mt-1">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="text-white font-bold text-sm sm:text-base">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">No rating</p>
                )}
              </div>
            </div>
          ))}
    </div>
  </div>
);

};

export default GptMovieSuggestions;
