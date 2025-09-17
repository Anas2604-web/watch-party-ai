import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/movieSlice';
import { API_OPTIONS } from "../utils/constants";


const useNowPlaying = () => {
     const dispatch = useDispatch();

     const getPlayingMovies = async () => {
      const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlaying(json.results));
}

  useEffect(() => {
    getPlayingMovies();
  },[]);

}

export default useNowPlaying;