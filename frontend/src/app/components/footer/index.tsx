import Link from "next/link";

const Footer = ():JSX.Element  => {
  return (
    <>
      <footer className="flex flex-col justify-around items-center">
        <nav className="flex flex-wrap justify-center items-start w-full bg-zinc-900 border-t-4 border-orange-500 text-zinc-100 h-auto sm:h-72">
          <ul className="m-8">
            <h1>Curiosidades</h1>
            <li className="hover:text-speedOrange transition-all">Listas</li>
            <li className="hover:text-speedOrange transition-all">Guias</li>
            <li className="hover:text-speedOrange transition-all">
              Entrevistas
            </li>
            <li className="hover:text-speedOrange transition-all">
              Lançamentos
            </li>
          </ul>
          <ul className="m-8">
            <h1>Notícias</h1>
            <li className="hover:text-speedOrange transition-all">Avisos</li>
            <li className="hover:text-speedOrange transition-all">Criticas</li>
            <li className="hover:text-speedOrange transition-all">Novidades</li>
            <li className="hover:text-speedOrange transition-all">
              Lançamentos
            </li>
          </ul>
          <ul className="m-8">
            <h1>Mangás</h1>
            <li className="hover:text-speedOrange transition-all">Naruto</li>
            <li className="hover:text-speedOrange transition-all">Boruto</li>
            <li className="hover:text-speedOrange transition-all">
              Dragon Ball
            </li>
            <li className="hover:text-speedOrange transition-all">One Punch</li>
            <li className="hover:text-speedOrange transition-all">
              Demon Slayer
            </li>
          </ul>
        </nav>
        <nav className=" w-full bg-zinc-950 border-t-2 border-orange-500 text-zinc-400">
          <ul className="flex flex-wrap justify-center sm:justify-end">
            <li className="m-2 hover:text-speedOrange transition-all">
              <Link href={"privacidade"}> Política de Privacidade</Link>
            </li>
            <li className="m-2 hover:text-speedOrange transition-all">
            <Link href={"sobre"}>Sobre Nós</Link>
            </li>
            <li className="m-2 hover:text-speedOrange transition-all">
            <Link href={"quem-somos"}>Quem Somos</Link>
            </li>
            <li className="m-2 hover:text-speedOrange transition-all">
            <Link href={"fale-conosco"}>Fale Conosco</Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
