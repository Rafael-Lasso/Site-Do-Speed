import React from "react";
import Navbar from "./components/navbar";
import GetEmail from "./components/sections/getemail";
import TopicsNavigation from "./components/sections/topics-navigation";
import SocialMedias from "./components/sections/social-medias";
import WacthSection from "./components/sections/watch";
import BlogSection from "./components/sections/blog";
import Topic from "./components/sections/topics";
import Footer from "./components/footer";

import "../app/styles/globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center bg-zinc-800 h-auto sm:h-vh60 ">
        <div className="container-notice-post flex flex-wrap justify-center items-center h-full relative">
          <div className="large-notice-post  cursor-pointer flex justify-start items-end  m-1 bg-zinc-400 sm:smw-44:w-80">
            <h2 className="ml-4 text-zinc-50 drop-shadow-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h2>
          </div>
          <div className="sub-posts flex-col">
            <div className="notice-post cursor-pointer m-1 bg-zinc-400 w-80 flex justify-start items-end large-notice-post">
              <h2 className="ml-4 text-zinc-50 drop-shadow-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h2>
            </div>
            <div className="notice-post cursor-pointer m-1 bg-zinc-400 w-80 flex justify-start items-end large-notice-post">
              <h2 className="ml-4 text-zinc-50 drop-shadow-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Topic />

      <h1 className="titule-posts flex justify-center items-center text-4xl	text-center sm:text-6xl">
        Novidades Diretas Do Forno
      </h1>

      <BlogSection />
      <WacthSection />
      <SocialMedias />
      <TopicsNavigation />
      <GetEmail />
      <Footer />
    </>
  );
}
