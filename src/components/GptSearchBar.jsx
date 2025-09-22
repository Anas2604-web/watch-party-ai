import lang from "../utils/langConstants";

import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const LangKey = useSelector((store) => store.config.lang)
  return (
    <div className="flex justify-center">
      <form
        className="flex items-center gap-2 bg-gray-800 rounded-lg shadow-md px-4 py-2 w-full max-w-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
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
