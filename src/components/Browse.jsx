import Header from "./Header";

const posters = [
  "https://picsum.photos/400/600?random=1",
  "https://picsum.photos/400/600?random=2",
  "https://picsum.photos/400/600?random=3",
  "https://picsum.photos/400/600?random=4",
  "https://picsum.photos/400/600?random=5",
  "https://picsum.photos/400/600?random=6",
  "https://picsum.photos/400/600?random=7",
];

const PosterRow = ({ title }) => (
  <div className="px-6 my-8">
    <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
    <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
      {posters.map((src, idx) => (
        <div
          key={idx}
          className="w-40 flex-shrink-0 transform hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
        >
          <img
            src={src}
            alt={`poster-${idx}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  </div>
);

const Browse = () => {
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

      {/* Poster Rows */}
      <PosterRow title="Trending Now" />
      <PosterRow title="Watch Party Picks" />
      <PosterRow title="Continue Watching" />
    </div>
  );
};

export default Browse;
