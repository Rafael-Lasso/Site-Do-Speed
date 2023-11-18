import Footer from "../../../../components/footer";
import Navbar from "../../../../components/navbar";
import { PostsData } from "../../../../../../constants/api/posts";
import Image from "next/image";

export default function PostById({ params }: { params: { slug: string } }) {
  return (
    <>
      <Navbar />
      <div className="content-privacy flex flex-col my-10 w-1/2 h-auto justify-center items-center m-auto">
        <Image
          src={PostsData[0].image}
          width={900}
          className="rounded-xl my-8"
          alt="thumb-post"
        />
        <h1 className="title text-center w-2/3 text-4xl mb-7 ">
          {PostsData[0].title}
        </h1>
        <p className="mb-12">{PostsData[0].content}</p>
        <h2 className="title text-center w-2/3 text-3xl mb-7">Comentários</h2>
        <div className="container-comentary flex flex-col justify-center">
          <input type="text" className="outline-indigo-500 rounded-md p-3" />
          <div className="content-buttons flex my-3">
            <button className="w-28 h-11 text-white bg-green-600 mx-1 rounded-md">Comentar</button>
            <button className="w-28 h-11 text-white bg-red-600 mx-1 rounded-md">Cancelar</button>
          </div>
          <div className="comentary w-5/6 my-7 bg-stone-400 rounded-md p-3">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              voluptatibus maiores aliquam. Quos, exercitationem placeat quia
              delectus odit
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
