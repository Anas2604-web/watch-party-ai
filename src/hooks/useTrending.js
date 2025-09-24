import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrending } from "../utils/movieSlice";

const TMDB_PROXY_URL = "https://tmdbproxy-l5awbdon4q-uc.a.run.app";

const useTrending = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    try {
      const res = await fetch(
  `${TMDB_PROXY_URL}?path=trending/movie/day&query=language=en-US&page=1`
);

      const json = await res.json();
      dispatch(addTrending(json.results || []));
    } catch (err) {
      console.error("Error fetching trendin movies:", err);
      dispatch(addTrending([]));
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrending;
