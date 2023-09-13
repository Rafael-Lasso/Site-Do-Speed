const GetEmail = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-96">
        <h2 className="max-w-md m-10 text-center text-5xl max-w">
          Se inscreva e receba novidades exclusivas do (Nome do Site)!
        </h2>
        <form
          className="flex flex-wrap items-center justify-center"
          action=""
          method="post"
        >
          <input
            className="w-60 h-14 m-1 text-center"
            type="text"
            placeholder="Digite seu Email Aqui 👇"
          />
          <button
            className="w-52 h-14 m-1 text-white bg-zinc-700"
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
