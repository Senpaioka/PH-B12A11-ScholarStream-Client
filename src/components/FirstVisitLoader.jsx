const FirstVisitLoader = () => {
  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4 text-center">
        
        {/* Animated Brand Text */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white animate-pulse">
          ScholarStream
        </h1>

        {/* Loading Indicator */}
        <div className="flex items-center gap-2 text-gray-300">
          <span className="loading loading-dots loading-md"></span>
          <span className="text-sm tracking-wider">
            Preparing your experience
          </span>
        </div>

        {/* Subtext */}
        <p className="text-xs text-gray-400 mt-1">
          Please wait while we load the best opportunities for you
        </p>
      </div>
    </div>
  );
};

export default FirstVisitLoader;
