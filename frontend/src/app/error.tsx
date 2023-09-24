"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl">Opps...</h1>
      <h2 className="text-4xl text-center">
        parece que o nosso servidor foi acertado por uma kunai em uma batalha
        ninja e <br /> não pode retornar a resposta desejada
      </h2>
      <h3 className="text-3xl">
        Que tal voltar para <Link href="/">o Inicio ?</Link>
      </h3>

      <button
        className="bg-zinc-800 text-zinc-200 mt-5 w-60 h-16 rounded font-normal hover:text-speedOrange transition-all hover:font-semibold hover:w-72"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Vou tentar mais uma vez <br /> ( Sou teimoso )
      </button>
    </div>
  );
}
