const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full min-h-screen flex flex-col justify-center items-start 
                    px-4 sm:px-8 md:px-12 lg:px-20 z-20 text-white max-w-3xl">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg heavy-outline ">
        {title}
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-lg md:max-w-2xl mb-16 sm:mb-6 drop-shadow-lg ">
        {overview}
      </p>
      <div className="flex flex-wrap gap-3 mb-6 sm:mb-0">
        <button
          className="appearance-none bg-white text-black font-semibold px-4 sm:px-6 sm:py-2 rounded-md 
                     hover:bg-gray-200 transition focus:outline-none flex items-center text-xs sm:text-sm"
        >
          <span className="mr-2">^_^</span> Play
        </button>
        <button
          className="appearance-none bg-gray-800 bg-opacity-80 text-white font-semibold px-4 sm:px-6 py-1.5 
                     sm:py-2 rounded-md hover:bg-gray-700 transition focus:outline-none flex items-center text-xs sm:text-sm"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
