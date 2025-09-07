const Try = () => {
  return (
    <>
      <section className="flex justify-between items-center min-h-screen px-12 bg-white">
        {/* Left Section */}
        <div className="max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Who is LinkedIn for?
          </h2>
          <p className="text-gray-600 mb-6">
            Anyone looking to navigate their professional life.
          </p>

          <div className="space-y-4">
            <button className="w-full flex justify-between items-center border border-gray-300 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100">
              Find a coworker or classmate
              <span>➔</span>
            </button>
            <button className="w-full flex justify-between items-center border border-gray-300 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-100">
              Find a new job
              <span>➔</span>
            </button>
          </div>
        </div>

        {/* Right Section (Image inside circle) */}
        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="people"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Try;
