const TopicsNavigation = () => {
  return (
    <>
      <section className="section-topics relative h-auto bg-zinc-900">
        <div className="container-select-topic flex flex-col justify-center items-center">
          <div className="content-title my-5">
            <h1 className="text-white text-2xl">Veja Um Tópico</h1>
            <h2 className="text-white text-5xl">Que Te Atraia</h2>
          </div>
          <div className="content-topics flex flex-wrap justify-center items-center">
            <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 cursor-pointer flex justify-center items-center text-center hover:bg-speedOrange hover:text-zinc-100 transition-all">
              <h3 className="text-3xl">Blog sobre seus temas favoritos</h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 cursor-pointer flex justify-center items-center text-center hover:bg-speedOrange hover:text-zinc-100 transition-all">
              <h3 className="text-3xl">Novidades quentinhas direto do forno</h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 cursor-pointer flex justify-center items-center text-center hover:bg-speedOrange hover:text-zinc-100 transition-all">
              <h3 className="text-3xl">Pesquisas e Databooks Oficiais</h3>
            </div>
            <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 cursor-pointer flex justify-center items-center text-center hover:bg-speedOrange hover:text-zinc-100 transition-all">
              <h3 className="text-3xl">Mundo dos <br />Mangás</h3>
            </div>
          </div>
        </div>
        <div className="bg-image"></div>
      </section>
    </>
  );
};

export default TopicsNavigation;
