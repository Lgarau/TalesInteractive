import { Link } from "react-router-dom";
import axios from "axios";


export default function HeroComponent() {


  return (
    <div className="h-150 bg-none relative flex items-center justify-center text-center relative text-white">

      {/* Video */}
      <iframe className="h-full w-full bg-none object-cover" src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"></iframe>

      <Link
        to="/progetti"
        className="absolute bottom-10 mt-50 px-6 py-3 bg-[#a0522d] text-[#f5f5dc] rounded-lg shadow-lg hover:bg-opacity-80 z-1000">
        Scopri di più
      </Link>

    </div>
  );
}