const GetEmail = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-vh60 sm:h-96">
        <h2 className="max-w-md m-10 text-center text-3xl max-w  sm:text-5xl">
          Se inscreva e receba novidades exclusivas do Speed Otaku Hub!
        </h2>
        <form
          className="flex flex-wrap items-center justify-center"
          action=""
          method="post"
        >
          <input
            className="w-60 h-14 m-1 text-center outline-indigo-500"
            placeholder="Digite seu Email Aqui 👇"
            type="email"
          />
          <button
            className="w-52 h-14 m-1 text-white bg-zinc-700 hover:bg-speedOrange transition-all"
            type="submit"
          >
            Quero Ficar Por Dentro
          </button>
        </form>
      </section>
    </>
  );
};

export default GetEmail;
