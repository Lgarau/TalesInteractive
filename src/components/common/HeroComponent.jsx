import { Link } from "react-router-dom";

export default function HeroComponent() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center bg-black py-32 text-white">

      {/* Video background */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          className="w-full h-full object-cover bg-gray-950"
        >
          <source className="" src="https://www.youtube.com/watch?v=MLpWrANjFbI" type="video/mp4" />

        </video>
      </div>

      <h1 className="mb-40 text-5xl font-bold text[#f5f5dc] z-100">Video qui</h1>
      <div className="z-1000">
        <Link
          to="/progetti"
          className="mt-50 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-lg shadow-lg hover:bg-opacity-80 ">
          Scopri di più
        </Link>
      </div>
    </div>
  );
}