"use client";

// From React / Next
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import "../app/styles/globals.css";

// Components
import Navbar from "./components/navbar";
import Button from "./components/button";
import Footer from "./components/footer";

// Sections
import Topic from "./components/sections/topics";
import SocialMedias from "./components/sections/social-medias";

// Libs
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// From Project
import { PostsData } from "../../constants/api/posts";
import BannerMetodoFanart from "./assets/imgs/metodo_fanart_capa.png";

// HomePage
const Home: NextPage = () => {
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
      <div className="container-blogs-posts  w-full h-auto">
        <div className="container-notices flex flex-wrap  justify-center items-center">
          <div className="posts flex flex-wrap justify-center max-w-7xl">
            <h2 className="flex justify-center mt-5 text-4xl w-full sm:text-5xl">
              Recentes
            </h2>
            {PostsData.map((post) => (
              <Link href={"curiosidades/" + post.id}>
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
      <div className="container-blogs-posts  w-full h-auto">
        <div className="container-notices flex flex-wrap  justify-center items-center">
          <div className="posts flex flex-wrap justify-center max-w-7xl">
            <h2 className="flex justify-center mt-5 text-4xl w-full sm:text-5xl">
              Assista um Pouquinho
            </h2>
            {PostsData.map((post) => (
              <Link href={"curiosidades/" + post.id}>
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
      <div className="content-add flex justify-center">
        {(
          <Link href={"http://bit.ly/3s7yNTh"}>
            <Image
              className="mt-16 rounded-lg shadow-2xl"
              src={BannerMetodoFanart}
              width={1050}
              height={320}
              alt="add"
            />
          </Link>
        ) || (
          <div className="loading mt-16">
            <div className="Add w-50vw h-80"></div>
          </div>
        )}
      </div>
      <SocialMedias />
      <section className="section-topics relative h-auto bg-zinc-900">
        <div className="container-select-topic flex flex-col justify-center items-center">
          <div className="content-title my-5">
            <h1 className="text-white text-2xl">Veja Um Tópico</h1>
            <h2 className="text-white text-5xl">Que Te Atraia</h2>
          </div>
          <div className="content-topics flex flex-wrap justify-center items-center">
            <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 cursor-pointer flex justify-center items-center text-center hover:bg-speedOrange hover:text-zinc-100 transition-all">
              <h3 className="text-3xl">Blog sobre seus temas favoritos</h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 cursor-pointer flex justify-center items-center text-center hover:bg-speedOrange hover:text-zinc-100 transition-all">
              <h3 className="text-3xl">Novidades quentinhas direto do forno</h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 cursor-pointer flex justify-center items-center text-center hover:bg-speedOrange hover:text-zinc-100 transition-all">
              <h3 className="text-3xl">Pesquisas e Databooks Oficiais</h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 cursor-pointer flex justify-center items-center text-center hover:bg-speedOrange hover:text-zinc-100 transition-all">
              <h3 className="text-3xl">
                Mundo dos <br />
                Mangás
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-image"></div>
      </section>
      <section className="flex flex-col items-center justify-center h-vh60 sm:h-96">
        <h2 className="max-w-md m-10 text-center text-3xl max-w  sm:text-5xl">
          Se inscreva e receba novidades exclusivas do Speed Otaku Hub!
        </h2>
        <form
          className="flex flex-wrap items-center justify-center"
          action=""
          method="post"
        >
          <input
            className="w-60 h-14 m-1 text-center outline-indigo-500"
            placeholder="Digite seu Email Aqui 👇"
            type="email"
          />
          <button
            className="w-52 h-14 m-1 text-white bg-zinc-700 hover:bg-speedOrange transition-all"
            type="submit"
          >
            Quero Ficar Por Dentro
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Home;