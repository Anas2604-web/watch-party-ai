import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

const TMDB_PROXY_URL = "https://tmdbproxy-l5awbdon4q-uc.a.run.app";

const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const res = await fetch(
  `${TMDB_PROXY_URL}?path=movie/top_rated&query=language=en-US&page=1`
);

      const json = await res.json();
      dispatch(addTopRated(json.results || []));
    } catch (err) {
      console.error("Error fetching top rated movies:", err);
      dispatch(addTopRated([]));
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRated;
