// From Next
import Link from "next/link";
import { NextPage } from "next";

// From Project
import Navbar from "./components/navbar";

const PageNotFound: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="content-err-404-message flex justify-center items-center h-vh85">
        <div className="err-404-message flex-col text-center w-">
          <h1 className="text-4xl mb-3">Ué, cadê a página?... juro para você que ela estava aqui!</h1>
          <h3 className="text-2xl">
            Ah, sei lá... eu não sei, a página sumiu... talvez o meu cachorro
            comeu a página! Acho que<br></br> a página tinha gosto de Nozes da 
            Macadâmia com uma pitadinha de tags HTML. Hummm, delicioso!
          </h3>
          <h4 className="text-2xl mt-4">
            Ops... Que tal voltar para o <Link href="/">Início ?</Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
