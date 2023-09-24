"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <h1 className="text-6xl">Opps...</h1>
          <h2 className="text-4xl">
            parece que o nosso servidor foi acertado por uma kunai em uma
            batalha ninja e não pode retornar a resposta desejada
          </h2>
          <h3 className="text-4xl">
            Que tal voltar para <Link href="/">o Inicio ?</Link>
          </h3>

          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
