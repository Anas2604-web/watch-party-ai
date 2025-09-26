import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrending } from "../utils/movieSlice";

const TMDB_PROXY_URL = "https://us-central1-watchparty-3d876.cloudfunctions.net/tmdbProxy";

const useTrending = () => {
  const dispatch = useDispatch();

  const trending = useSelector((state) => state.movies.trendingMovies);

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
    !trending && getTrendingMovies();
  }, []);
};

export default useTrending;
