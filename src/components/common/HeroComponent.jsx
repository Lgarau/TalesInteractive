import { Link } from "react-router-dom";
import axios from "axios";
import imgPH from "../../assets/Castello_Aragonese_di_Sassari.png";


export default function HeroComponent() {


  return (
    <div className="h-130 bg-none relative flex items-center justify-center text-center relative text-white rounded-3xl">


      <img src={imgPH} alt="Game-Frame" id="hero-img" className="h-full w-full mx-20 z-900 bg-none object-cover rounded-3xl" />


      <h1 className="absolute mb-90 w-100 px-6 py-3 z-1000 text-4xl text-black ">  Super Agnesia Bross</h1>
      <p className="absolute mb-60 w-100 px-6 py-3 z-1000 text-black">Sassari, 1349. <br /> Una giovane donna... </p>
      <Link
        to="/progetti"
        className="absolute mt-90 ml-50 w-40 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-full shadow-lg hover:bg-opacity-80 z-1000">
        Vedi Trailer
      </Link>
      <Link
        to="/progetti"
        className="absolute mt-90 mr-50 w-40 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-full shadow-lg hover:bg-opacity-80 z-1000">
        Scopri di più
      </Link>
    </div>

  );
}

