import { useRef, useState } from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
import { getMovieSuggestions } from "../utils/gemini"; 
import useSuggestions from "../hooks/useSuggestions";

const GptSearchBar = () => {
  const LangKey = useSelector((store) => store.config.lang);
  const SearchText = useRef("");
  const [movieNames, setMovieNames] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]); // Trigger TMDB search

  useSuggestions(selectedMovies);

  const handleGPTSearch = async (e) => {
    e.preventDefault();

    const query = SearchText.current.value.trim();
    if (!query) return;

    console.log("User Query:", query);

    const names = await getMovieSuggestions(query);
    console.log("AI Movie Suggestions Raw:", names);

    if (!names || names.length === 0) {
      console.log("No movie suggestions found.");
      return;
    }

    // Split comma-separated AI result
    const movieList = names[0]
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean);

    console.log("Parsed Movie List:", movieList);

    setMovieNames(movieList);
    setSelectedMovies(movieList); // Trigger TMDB search
  };

  return (
    <div className="flex flex-col items-center">
      <form
        className="flex items-center gap-2 bg-gray-800 rounded-lg shadow-md px-4 py-2 w-full max-w-2xl"
        onSubmit={handleGPTSearch}
      >
        <input
          type="text"
          ref={SearchText}
          placeholder={lang[LangKey].getSearchplaceholder}
          className="flex-grow outline-none p-2 rounded-md text-white bg-transparent placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md transition"
        >
          {lang[LangKey].search}
        </button>
      </form>

    </div>
  );
};

export default GptSearchBar;
