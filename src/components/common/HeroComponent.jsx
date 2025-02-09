import { Link } from "react-router-dom";
import axios from "axios";
import imgPH from "../../assets/Castello_Aragonese_di_Sassari.png";


export default function HeroComponent() {


  return (
    <div className="h-150 bg-none relative flex items-center justify-center text-center relative text-white">


      <img src={imgPH} alt="Game-Frame" className="h-full z-900 w-full bg-none object-contain" />


      <h1 className="absolute mb-130 w-100 px-6 py-3 z-1000 text-4xl text-black ">Super Agnesia Bross</h1>
      <p className="absolute mb-105 w-100 px-6 py-3 z-1000 text-black">Sassari, 1349. Una giovane donna... </p>
      <Link
        to="/progetti"
        className="absolute mt-120 ml-50 w-40 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-lg shadow-lg hover:bg-opacity-80 z-1000">
        Vedi Trailer
      </Link>
      <Link
        to="/progetti"
        className="absolute mt-120 mr-50 w-40 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-lg shadow-lg hover:bg-opacity-80 z-1000">
        Scopri di più
      </Link>
    </div>

  );
}

