"use client";

// FROM NEXT JS
import Link from "next/link";
import Image from "next/image";

// FROM REACT JS
import React, { useState } from "react";

// FROM PROJECT
import LogoSite from "./logoSite.png";
import "../../styles/navbar.css";

function Navbar(): JSX.Element {
  const [menu, setMenu] = useState("menu");

  const setMenuNavlist = () => {
    setMenu("setMenu");

    if (document.getElementById("menu")) {
      return setMenu("setMenu");
    } else {
      return setMenu("menu");
    }
  };

  return (
    <>
      
        <nav className="navbar max-md:justify-center relative place-items-center justify-evenly h-vh15 border-t-4 items-center flex bg-zinc-900 border-orange-500 text-zinc-100 z-20">
          <div className="navmenu z-20 md:hidden" onClick={setMenuNavlist}>
            <div className="m-1.5 w-10 h-1 rounded bg-slate-100"></div>
            <div className="m-1.5 w-5 h-1 rounded bg-slate-100"></div>
            <div className="m-1.5 w-8 h-1 rounded bg-slate-100"></div>
          </div>
          <Link href="/">
            <Image
              className="p-1 cursor-pointer z-20"
              src={LogoSite}
              width={250}
              height={250}
              alt="Logo Speed Otaku Central"
            />
          </Link>
          <ul id={menu} className={menu}>
            <li className="cursor-pointer p-1 mt-3 mb-3 relative max-md:hidden">
              <Link href="/">Início</Link>
            </li>
            <li className="cursor-pointer p-1 mt-3 mb-3 relative max-md:hidden">
              <Link href="/curiosidades">Curiosidades</Link>
            </li>
            <li className="cursor-pointer p-1 mt-3 mb-3 relative max-md:hidden">
              <Link href="/noticias">Notícias</Link>
            </li>
            <li className="cursor-pointer p-1 mt-3 mb-3 relative max-md:hidden">
              <Link href="/mangas">Mangás</Link>
            </li>
          </ul>
        </nav>
    </>
  );
}
export default Navbar;
