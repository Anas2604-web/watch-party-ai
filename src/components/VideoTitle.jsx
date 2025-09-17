const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-12 md:px-20 z-20 text-white">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
        {title}
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6 drop-shadow-lg">
        {overview}
      </p>
      <div className="flex">
  <button
    className="appearance-none bg-white text-black font-semibold px-6 py-2 rounded-md mr-3 hover:bg-gray-200 transition focus:outline-none flex items-center"
  >
    <span className="mr-2">^_^</span> Play
  </button>
  <button
    className="appearance-none bg-gray-800 bg-opacity-80 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-700 transition focus:outline-none flex items-center"
  >
    <span className="mr-2"></span> More Info
  </button>
</div>

    </div>
  );
};

export default VideoTitle;
