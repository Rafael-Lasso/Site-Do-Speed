import Button from "../../button";

const WacthSection = () => {
  return (
    <>
      <div className="container-blogs-posts  w-full h-auto">
        <div className="container-notices flex flex-wrap  justify-center items-center">
          <div className="posts flex flex-wrap justify-center max-w-7xl">
            <h2 className="flex justify-center mt-5 text-4xl w-full sm:text-5xl">
              Assista um Pouquinho
            </h2>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mt-2 mb-10">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mt-2 mb-10">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mt-2 mb-10">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mt-2 mb-10">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mt-2 mb-10">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mt-2 mb-10">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button />
        </div>
      </div>

      <div className="content-add flex justify-center">
        <div className="loading mt-16">
          <div className="Add w-50vw h-80"></div>
        </div>
      </div>
    </>
  );
};

export default WacthSection;
