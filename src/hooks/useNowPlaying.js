import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const TMDB_PROXY_URL = "https://tmdbproxy-l5awbdon4q-uc.a.run.app";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const getPlayingMovies = async () => {
    try {
      const res = await fetch(
  `${TMDB_PROXY_URL}?path=movie/now_playing&query=language=en-US&page=1`
);

      const json = await res.json();
      dispatch(addNowPlaying(json.results || []));
    } catch (err) {
      console.error("Error fetching now playing movies:", err);
      dispatch(addNowPlaying([]));
    }
  };

  useEffect(() => {
    getPlayingMovies();
  }, []);
};

export default useNowPlaying;
