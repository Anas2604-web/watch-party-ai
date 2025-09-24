import { useRef, useState } from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";
import { getMovieSuggestions } from "../utils/gemini"; 

const GptSearchBar = () => {
  const LangKey = useSelector((store) => store.config.lang);
  const SearchText = useRef("");
  const [movieNames, setMovieNames] = useState([]);


  const handleGPTSearch = async (e) => {
    e.preventDefault();

    const query = SearchText.current.value;
    if (!query) return;

    console.log("User Query:", query);

    const names = await getMovieSuggestions(query);
    console.log("AI Movie Suggestions:", names[0].split(","));

    if (!names || names.length === 0) {
      console.log("No movie suggestions found.");
      return;
    }
    setMovieNames(names);
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

      {movieNames.length > 0 && (
        <div className="mt-4 w-full max-w-2xl bg-gray-900 rounded-lg p-4">
          <h2 className="text-white font-bold mb-2">AI Movie Suggestions:</h2>
          <ul className="list-disc list-inside text-white">
            {movieNames.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
