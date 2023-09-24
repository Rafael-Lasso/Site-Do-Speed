"use client";

import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function newPost() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="create-new-post h-auto flex justify-center md:h-auto">
          <main className="flex flex-col justify-center items-center bg-zinc-200 w-1/2 h-screen shadow-lg">
            <input
              type="file"
              placeholder="envie uma Imagem ( Opicional - Recomendado )"
              className="flex  flex-col my-5 bg-neutral-300 w-2/3 h-96 rounded-lg shadow-md "
            />
            <input
              type="text"
              className="outline-none w-2/3 h-96 mb-5 rounded-lg shadow-md"
            />
            <div className="container-opitions">
              <button
                className="bg-zinc-800 m-2 text-zinc-200 w-40 h-12 rounded font-normal hover:bg-green-600 transition-all hover:w-44"
                type="submit"
              >
                Publicar
              </button>
              <button className="bg-zinc-800 m-2 text-zinc-200 w-40 h-12 rounded font-normal hover:bg-red-600 transition-all hover:w-44">
                Deletar
              </button>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default newPost;
