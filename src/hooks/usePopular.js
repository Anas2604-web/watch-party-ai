import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/movieSlice";

const TMDB_PROXY_URL = "https://us-central1-watchparty-3d876.cloudfunctions.net/tmdbProxy";

const usePopular = () => {
  const dispatch = useDispatch();

  const popular = useSelector((state) => state.movies.popularMovies);

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
     !popular &&  getPopularMovies();
  }, []);
};

export default usePopular;
