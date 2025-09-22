// GptMovieSuggestions.jsx
const GptMovieSuggestions = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Top Picks For You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {["Inception", "Stranger Things", "Dark", "Breaking Bad", "The Witcher"].map(
          (movie, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 shadow hover:scale-105 transition-transform duration-200"
            >
              <div className="h-40 bg-gray-700 rounded mb-3"></div>
              <h3 className="font-semibold">{movie}</h3>
              <p className="text-sm text-gray-400">Recommended for you</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
