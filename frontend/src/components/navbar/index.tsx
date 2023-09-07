"use client";

// FROM NEXT JS
import Link from "next/link";
import Image from "next/image";

// FROM REACT JS
import React, { useState } from "react";

// FROM PROJECT
import LogoSite from "./logoSite.png";
import "./style.css";

function Navbar() {
  const [navmenu, setNavmenu] = useState();

  const setMenuNavlist = () => {
    setNavmenu(navmenu);
    console.log(1);
  };

  return (
    <>
      <nav className="max-md:justify-around place-items-center justify-evenly h-32 border-t-4 items-center flex bg-zinc-900 border-orange-500 text-zinc-100">
        <div className="md:hidden" onClick={setMenuNavlist}>
          <div className="m-1.5 w-10 h-1 rounded bg-slate-100"></div>
          <div className="m-1.5 w-5 h-1 rounded bg-slate-100"></div>
          <div className="m-1.5 w-8 h-1 rounded bg-slate-100"></div>
        </div>
        <Link href="/">
          <Image
            className="p-1 cursor-pointer"
            src={LogoSite}
            width={250}
            height={250}
            alt="Logo Speed Otaku Central"
          />
        </Link>
        <ul className="flex gap-2 text-zinc-100 md:flex-col justify-around items-center absolute bottom-0 left-0 w-1/3 h-screen bg-zinc-900">
          <li className="cursor-pointer p-1 mt-3 mb-3 relative">
            <Link href="/">Início</Link>
          </li>
          <li className="cursor-pointer p-1 mt-3 mb-3 relative">
            <Link href="/Curiosidades">Curiosidades</Link>
          </li>
          <li className="cursor-pointer p-1 mt-3 mb-3 relative">
            <Link href="/Notícias">Notícias</Link>
          </li>
          <li className="cursor-pointer p-1 mt-3 mb-3 relative">
            <Link href="/Mangás">Mangás</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
