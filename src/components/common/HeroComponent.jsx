import { Link } from "react-router-dom";
import imgPH from "../../assets/castello-nobell.jpg";
import { useRef } from "react";

export default function HeroComponent({ place, scrollRef }) {

  let link
  if (place === "home") {
    link =
      <Link
        to="/TalesInteractive/progetti"
        className="hero-button absolute mt-80 mr-0 w-40 px-6 py-3 bg-gradient-to-r from-black to-[#a0522d] text-[#f5f5dc] rounded-full shadow-lg hover:bg-opacity-80 z-1000">
        Scopri di più
      </Link>
  } else if (place === "projects") {
    const element = document.getElementById("scroll-trigger")
    link =
      <button
        onClick={() => {
          scrollRef.current?.scrollIntoView({ behavior: "smooth" })
        }}
        className="hero-button absolute mt-80 mr-0 w-40 px-6 py-3  text-[#f5f5dc] bg-gradient-to-r from-black to-[#a0522d] text-[#f5f5dc] rounded-full shadow-lg hover:bg-opacity-80 z-1000">
        Scopri di più
      </button>
  }

  return (
    <div className=" bg-none relative flex items-center justify-center text-center text-white rounded-3xl z-[10]">
      <img src={imgPH} alt="Game-Frame" id="hero-img" className=" h-150 w-full mx-20 bg-none object-cover rounded-3xl" />

      <h1 id="game-title" className="absolute mb-130 px-6 py-3 text-4xl text-black "><strong>A G N E S I A</strong></h1>
      <p id="game-description" className="absolute text-2xl mb-95  px-6 py-3 text-black"><strong>Sassari, 1349. La paura separa i vivi,<br /> l’odio decide chi sopravvive...</strong></p>

      <Link
        to="/progetti"
        className="absolute hidden mt-50 ml-50 w-40 px-6 py-3 bg-gradient-to-r from-[#a0522d] to-black text-[#f5f5dc] text-[#f5f5dc] rounded-full shadow-lg hover:bg-opacity-80 z-1000">
        Vedi Trailer
      </Link>
      {link}
    </div>
  );
}

