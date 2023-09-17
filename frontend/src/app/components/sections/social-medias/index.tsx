const SocialMedias = () => {
  return (
    <>
      <div className="container-blogs-posts w-full h-auto my-24">
        <div className="container-notices flex flex-wrap  justify-center items-center">
          <div className="posts flex flex-wrap justify-center max-w-7xl"></div>
          <nav className="flex flex-col items-center justify-center">
            <h2 className="max-w-md m-10 text-center text-4xl sm:text-6xl">
              Ei! Estamos Aqui Tambem
            </h2>
            <div className="content-filter-topic flex flex-wrap justify-center">
              <div className="filter-topic bg-gray-400 w-20 h-20 mx-2 rounded-full cursor-pointer hover:bg-speedOrange transition-all"></div>
              <div className="filter-topic bg-gray-400 w-20 h-20 mx-2 rounded-full cursor-pointer hover:bg-speedOrange transition-all"></div>
              <div className="filter-topic bg-gray-400 w-20 h-20 mx-2 rounded-full cursor-pointer hover:bg-speedOrange transition-all"></div>
              <div className="filter-topic bg-gray-400 w-20 h-20 mx-2 rounded-full cursor-pointer hover:bg-speedOrange transition-all"></div>
              <div className="filter-topic bg-gray-400 w-20 h-20 mx-2 rounded-full cursor-pointer hover:bg-speedOrange transition-all"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SocialMedias;
