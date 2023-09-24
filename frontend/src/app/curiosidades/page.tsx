import Image from "next/image";
import Button from "../components/button";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import ThumbImage from "../assets/imgs/20221026_002435.jpg";

const Posts = [
  { id: 1, title: "Protagonistas de Animes que o Ben 10 Derrota ?!?", image:  ThumbImage },
  { id: 2, title: "Goku Base vs Naruto Rikudou e Luffy quem Ganha ?!?", image:  ThumbImage },
  { id: 3, title: "5 Personagems que o Saitama derrota e 5 que ele Perde!", image:  ThumbImage },
  { id: 4, title: "5 Personagems que o Goku derrota e 5 que ele Perde!", image:  ThumbImage },
  { id: 5, title: "Naruto em One Piece de Quem Ganha e de Quem ele Perde", image:  ThumbImage },
  { id: 6, title: "Velocidade em Demon Slayer, ( Nivel da Luz ??? )", image:  ThumbImage },
];

export default function Curiosidades() {
  return (
    <>
      <>
        <Navbar />
        <div className="container-blogs-posts  w-full h-auto mt-16">
          <div className="container-notices flex flex-wrap  justify-center items-center ">
            <div className="posts flex flex-wrap justify-center max-w-7xl">
              <h2 className="flex justify-center mt-5 mb-7 text-4xl w-full sm:text-5xl">
                Pra Matar a Curiosidade 
              </h2>

              {Posts.map((post) => (
                <div className="notice-card flex flex-col justify-center items-center font-bold">
                  <div className="m-2">
                    <Image src={post.image} width={344} height={206} alt="image content" className="cursor-pointer" />
                  </div>
                  <div className="title mt-2 mb-10">
                    <h3 className="max-w-xs text-lg text-center cursor-pointer">
                      {post.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <Button />
          </div>
        </div>

        <div className="content-add flex justify-center mb-16">
          <div className="loading mt-16">
            <div className="Add w-50vw h-80"></div>
          </div>
        </div>

        <Footer />
      </>{" "}
    </>
  );
}
