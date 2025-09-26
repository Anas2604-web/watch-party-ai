import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const TMDB_PROXY_URL = "https://us-central1-watchparty-3d876.cloudfunctions.net/tmdbProxy";

const useTopRated = () => {
  const dispatch = useDispatch();

  const topRated = useSelector((state) => state.movies.topRatedMovies);

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
    !topRated &&  getTopRatedMovies();
  }, []);
};

export default useTopRated;
