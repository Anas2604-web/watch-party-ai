import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2 sm:px-4 mb-6 sm:mb-10 relative z-10">
      <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 px-1 sm:px-2">
        {title}
      </h2>

      <div className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-2">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
