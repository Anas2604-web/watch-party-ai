import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";
import { useSelector } from "react-redux";

const TMDB_PROXY_URL = "https://us-central1-watchparty-3d876.cloudfunctions.net/tmdbProxy";

const useNowPlaying = () => {
 
   const nowPlaying = useSelector((state) => state.movies.nowPlayingMovies);

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
    !nowPlaying && getPlayingMovies();
  }, []);
};

export default useNowPlaying;
