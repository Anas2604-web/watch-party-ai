import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
