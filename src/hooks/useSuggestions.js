import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMovieSearch } from "../utils/gptSlice";

const TMDB_PROXY_URL = "https://us-central1-watchparty-3d876.cloudfunctions.net/tmdbProxy";

const useSuggestions = (movies) => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    if (!movies || movies.length === 0) return;

    try {
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
