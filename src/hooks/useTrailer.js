import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const TMDB_PROXY_URL = "https://us-central1-watchparty-3d876.cloudfunctions.net/tmdbProxy";

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
