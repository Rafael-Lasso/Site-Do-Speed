"use client";

import Image from "next/image";
import { NextPage } from "next";

import Button from "../../../components/button";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { PostsData } from "../../../../../constants/api/posts";
import Link from "next/link";

const Noticias: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="container-blogs-posts  w-full h-auto mt-16">
        <div className="container-notices flex flex-wrap  justify-center items-center">
          <div className="posts flex flex-wrap justify-center max-w-7xl">
            <h2 className="flex justify-center mt-5 mb-7 text-4xl w-full sm:text-5xl">
              Novidades de Ultima Hora
            </h2>
            {PostsData.map((post) => (
              <Link href={"noticias/" + post.id}>
                <div
                  className="notice-card flex flex-col justify-center items-center font-bold"
                  key={post.id}
                >
                  <div className="card m-2">
                    <Image
                      id={post.id}
                      width={344}
                      height={206}
                      loading="lazy"
                      src={post.image}
                      alt="thumb image post"
                      className="opacity-0 shadow-sm transition-all cursor-pointer rounded-md"
                      onLoadingComplete={(image: HTMLImageElement) => {
                        image.classList.remove("opacity-0"),
                          image.classList.add("-translate-y-2"),
                          console.log("Loaded Image");
                      }}
                    />
                  </div>
                  <div className=" title mt-2 mb-10">
                    <h3 className="max-w-xs text-lg text-center cursor-pointer">
                      {post.title || <Skeleton count={2} />}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Button />
        </div>
      </div>

      <div className="content-add flex justify-center mb-16">
        <div className="mt-16 loading">
          <div className="Add w-50vw h-80"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Noticias;