import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";


const useTrailer = (movieId) => {
     

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + 
              movieId + "/videos?language=en-US", 
               API_OPTIONS);
         const json = await data.json();
         if (!json.results) {
          console.warn("No results for movieId:", movieId, json);
          return;
        }
         const filterData = json.results.filter((video) => video.type === "Trailer");
         const trailer = filterData.length ?  filterData[13] : json.results[0];
         console.log(trailer);
         dispatch(addMovieTrailer(trailer));

    }
     useEffect(() => {
        if (!movieId) return;  
        getMovieVideo();
     },[movieId]);
}

export default useTrailer;