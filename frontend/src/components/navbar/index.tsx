import Image from "next/image";

import LogoSite from './LogoSite.png'
import './style.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="menu">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
        <Image
          className="LogoSiteImage"
          src={LogoSite}
          width={250}
          height={250}
          alt="Logo Speed Otaku Central"
        />
        <ul>
          <li>Início</li>
          <li>Curiosidades</li>
          <li>Noticias</li>
          <li>Mangás</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
