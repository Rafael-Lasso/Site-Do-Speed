const TopicsNavigation = () => {
  return (
    <>
      <section className="section-topics relative h-auto bg-zinc-900">
        <div className="container-select-topic flex flex-wrap justify-center items-center ">
          <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 hover:bg-speedOrange transition-all"></div>
          <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 hover:bg-speedOrange transition-all"></div>
          <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 hover:bg-speedOrange transition-all"></div>
          <div className="select-topic m-2 w-60 h-60 bg-zinc-400 z-10 hover:bg-speedOrange transition-all"></div>
        </div>
        <div className="bg-image"></div>
      </section>
    </>
  );
};

export default TopicsNavigation;
