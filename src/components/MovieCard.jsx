const MovieCard = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden mr-4"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-2">
        <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
