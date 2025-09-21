import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useTrending from "../hooks/useTrending";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";




const Browse = () => {

  const gptSearch = useSelector((store) => store.gpt.showgptSearch);

  useNowPlaying();
  usePopular();
  useTopRated();
  useTrending();
   

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
       {gptSearch ? <GptSearch /> : 
       <> 
       <MainContainer/>
       <SecondaryContainer/> 
       </>} 
    
    </div>
  );
};

export default Browse;
