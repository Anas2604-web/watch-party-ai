import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    const mainMovie = movies ? movies[0] : null;

    const {title, overview, id} = mainMovie || {};

    return (
        <div>
            <VideoTitle title = {title} overview = {overview} />
            {id && <VideoBackGround movieId={id} />}  
        </div>
    )

}

export default MainContainer