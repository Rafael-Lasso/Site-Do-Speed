const Footer = () => {
  return (
    <>
      <footer className="flex justify-around items-center h-auto">
        <nav className="flex flex-wrap justify-center items-start w-full bg-zinc-950 border-t-4 border-orange-500 text-zinc-100">
          <ul className="m-8">
            <h1>Curiosidades</h1>
            <li className="hover:text-speedOrange">Listas</li>
            <li className="hover:text-speedOrange">Guias</li>
            <li className="hover:text-speedOrange">Entrevistas</li>
            <li className="hover:text-speedOrange">Lançamentos</li>
          </ul>
          <ul className="m-8">
            <h1>Notícias</h1>
            <li className="hover:text-speedOrange">Avisos</li>
            <li className="hover:text-speedOrange">Criticas</li>
            <li className="hover:text-speedOrange">Novidades</li>
            <li className="hover:text-speedOrange">Lançamentos</li>
          </ul>
          <ul className="m-8">
            <h1>Mangás</h1>
            <li className="hover:text-speedOrange transition-all">Naruto</li>
            <li className="hover:text-speedOrange transition-all">Boruto</li>
            <li className="hover:text-speedOrange transition-all">Dragon Ball</li>
            <li className="hover:text-speedOrange transition-all">One Punch</li>
            <li className="hover:text-speedOrange transition-all">Demon Slayer</li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
