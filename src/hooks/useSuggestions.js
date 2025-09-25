import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieSearch } from "../utils/gptSlice";

const TMDB_PROXY_URL = "https://tmdbproxy-l5awbdon4q-uc.a.run.app";

const useSuggestions = (movies) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    if (!movies || movies.length === 0) return;

    try {
      // Search all movies in parallel
      const resultsArray = await Promise.all(
        movies.map(async (movie) => {
          const res = await fetch(
            `${TMDB_PROXY_URL}?path=/search/movie?query=${encodeURIComponent(
              movie
            )}&include_adult=false&language=en-US&page=1`
          );
          const json = await res.json();
          return json.results || [];
        })
      );

      // Flatten results array
      const allResults = resultsArray.flat();


      dispatch(getMovieSearch(allResults));
    } catch (err) {
      dispatch(getMovieSearch([]));
    }
  };

  useEffect(() => {
    getMovies();
  }, [movies]);
};

export default useSuggestions;
