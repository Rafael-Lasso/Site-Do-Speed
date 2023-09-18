"client-only";

import Image from "next/image";
import Button from "../../button";
import PostImage from "../../../assets/imgs/20221026_002435.jpg";

const BlogSection = () => {
  return (
    <>
      <div className="container-blogs-posts  w-full h-auto">
        <div className="container-notices flex flex-wrap  justify-center items-center">
          <div className="posts flex flex-wrap justify-center max-w-7xl">
            <h2 className="flex justify-center mt-5 text-4xl w-full sm:text-5xl">
              Recentes
            </h2>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mb-10 mt-2">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mb-10 mt-2">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mb-10 mt-2">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mb-10 mt-2">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mb-10 mt-2">
                <h3 className="max-w-xs text-lg text-center cursor-pointer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </h3>
              </div>
            </div>
            <div className="notice-card flex flex-col justify-center items-center font-bold">
              <div className="loading m-2">
                <div className="notice-post m-4 w-80 cursor-pointer"></div>
              </div>
              <div className="title loading mb-10 mt-2">
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
    </>
  );
};

export default BlogSection;
