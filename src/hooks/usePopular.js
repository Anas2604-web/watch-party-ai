import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const TMDB_PROXY_URL = "https://tmdbproxy-l5awbdon4q-uc.a.run.app";

const usePopular = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      const res = await fetch(
  `${TMDB_PROXY_URL}?path=movie/popular&query=language=en-US&page=1`
);

      const json = await res.json();
      dispatch(addPopular(json.results || []));
    } catch (err) {
      console.error("Error fetching popular movies:", err);
      dispatch(addPopular([]));
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopular;
