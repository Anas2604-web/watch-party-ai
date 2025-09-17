import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";


const Browse = () => {

  useNowPlaying();
   

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(https://picsum.photos/1600/900?random=99)` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute bottom-20 left-10">
          <h1 className="text-5xl font-bold mb-4">Featured Movie</h1>
          <p className="max-w-xl text-lg mb-6">
            Watch together with friends in a Watch Party and enjoy cinema like never before.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-300 transition">
              ▶ Play
            </button>
            <button className="px-6 py-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition">
              🎉 Start Watch Party
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Browse;
