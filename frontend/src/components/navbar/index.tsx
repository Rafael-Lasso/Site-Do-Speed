import Link from "next/link";
import Image from "next/image";

import LogoSite from "./LogoSite.png";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <Image
          className="LogoSiteImage"
          src={LogoSite}
          width={250}
          height={250}
          alt="Logo Speed Otaku Central"
        />
        <ul>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/Curiosidades">Curiosidades</Link>
          </li>
          <li>
            <Link href="/Noticias">Noticias</Link>
          </li>
          <li>
            <Link href="/Mangás">Mangás</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
