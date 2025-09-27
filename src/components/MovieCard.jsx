const MovieCard = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] 
                 rounded-lg shadow-md overflow-hidden mr-3 sm:mr-4"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
      />
      <div className="p-1 sm:p-2">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold truncate">
          {movie.title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
