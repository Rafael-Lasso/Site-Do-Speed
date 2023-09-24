import Link from "next/link";
import Navbar from "./components/navbar";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="content-err-404-message flex justify-center items-center h-vh85">
        <div className="err-404-message flex-col text-center w-">
          <h1 className="text-5xl mb-3">Ué, cadê a página?...</h1>
          <h2 className="text-2xl">juro para você que ela estava aqui! </h2>
          <h3 className="text-2xl">
            Ah, sei lá... eu não sei, a página sumiu... talvez o meu cachorro
            comeu a página! Acho que a página tinha gosto de Nozes da <br></br>
            Macadâmia com uma pitadinha de tags HTML. Hummm, delicioso!
          </h3>
          <h4>
            Ops... Que tal voltar para o <Link href="/">Início ?</Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
