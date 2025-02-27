import { Link } from "react-router-dom";
import imgPH from "../../assets/Castello_Aragonese_di_Sassari.png";

export default function HeroComponent() {
  return (
    <div className="h-280 bg-none relative flex items-center justify-center text-center text-white rounded-3xl z-[10]">
      <img src={imgPH} alt="Game-Frame" id="hero-img" className="h-full w-full mx-20 bg-none object-cover rounded-3xl" />

      <h1 className="absolute mb-90 w-100 px-6 py-3 text-4xl text-black ">Super Agnesia Bross</h1>
      <p className="absolute mb-60 w-100 px-6 py-3 text-black">Sassari, 1349. <br /> Una giovane donna...</p>

      
    <Link
      to="/progetti"
      className="absolute mt-190 left-1/2 -translate-x-1/2 w-70 px-10 py-3 text-[#f5f5dc] font-bold rounded-full shadow-lg hover:bg-opacity-80 bg-gradient-to-r from-black to-[#3d1f11] from-[10%] to-[90%]"
    >
      Scopri di più
    </Link>
    </div>
  );
}

