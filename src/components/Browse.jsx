import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  useNowPlaying();
   

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  );
};

export default Browse;
