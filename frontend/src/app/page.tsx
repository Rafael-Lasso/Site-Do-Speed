import React from "react";
import Navbar from "./components/navbar";
import GetEmail from "./components/sections/getemail";
import TopicsNavigation from "./components/sections/topics-navigation";
import SocialMedias from "./components/sections/social-medias";
import WacthSection from "./components/sections/watch";
import BlogSection from "./components/sections/blog";
import Topic from "./components/sections/topics";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="contentNotices justify-center items-center">
        <div className="container-notices flex flex-wrap justify-center items-center">
          <div className="large-notice-post m-1 bg-zinc-400 w-60 h-96 sm:notice-post"></div>
          <div className="sub-posts flex flex-col">
            <div className="notice-post m-1 bg-zinc-400 w-80"></div>
            <div className="notice-post m-1 bg-zinc-400 w-80"></div>
          </div>
        </div>
      </div>
      <Topic />

      <h1 className="titule-posts flex justify-center items-center text-7xl	text-center">
        Novidades Diretas Do Forno
      </h1>

      <BlogSection />
      <WacthSection />
      <SocialMedias />
      <TopicsNavigation />
      <GetEmail />
      <Footer/>
    </>
  );
}
