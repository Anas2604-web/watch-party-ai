import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black z-20 text-white">
      <div className="max-w-5xl mx-auto pt-16 sm:pt-20 px-3 sm:px-6">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;

