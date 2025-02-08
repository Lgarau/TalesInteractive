import { Link } from "react-router-dom";
import axios from "axios";
import imgPH from "../../assets/Castello_Aragonese_di_Sassari.png";


export default function HeroComponent() {


  return (
    <div className="h-150 bg-none relative  flex items-center justify-center text-center relative text-white">


      <img src={imgPH} alt="Game-Frame" className="h-full z-900 w-full bg-none object-contain" />
      <div id="links" className="absolute mt-50 translate z-1000" >
        <Link
          to="/progetti"
          className="bottom-10 absolute ml-50 w-40 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-lg shadow-lg hover:bg-opacity-80 z-1000">
          Vedi Trailer
        </Link>
        <Link
          to="/progetti"
          className="bottom-10 absolute mr-50 w-40 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-lg shadow-lg hover:bg-opacity-80 z-1000">
          Scopri di più
        </Link>
      </div>
    </div>

  );
}

