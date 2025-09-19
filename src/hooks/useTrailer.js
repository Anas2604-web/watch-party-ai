import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const TMDB_PROXY_URL = "https://tmdbproxy-l5awbdon4q-uc.a.run.app";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
       const res = await fetch(
  `${TMDB_PROXY_URL}?path=movie/${movieId}/videos&query=language=en-US`
);

      const json = await res.json();

      if (!json.results || json.results.length === 0) {
        dispatch(addMovieTrailer(null));
        return;
      }

      console.log("Fetched trailers:", json.results);

      const trailer = json.results.find((v) => v.name === "Official Trailer") || json.results[0];
      dispatch(addMovieTrailer(trailer));
    } catch (err) {
      console.error("Error fetching trailer:", err);
      dispatch(addMovieTrailer(null));
    }
  };

  useEffect(() => {
    if (!movieId) return;
    getMovieVideo();
  }, [movieId]);
};

export default useTrailer;
