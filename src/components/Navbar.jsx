import { Link } from "react-router-dom";
import Logo from "../assets/Logow.png"; 

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-40 py-5 border-b border-gray-700">
      
      <div>
        <img src={Logo} alt="Tales Interactive Logo" className="h-40 text-white" />
      </div>
      <div className="space-x-8 text-[#a0522d] font-semibold">
        <Link to="/">Home</Link>
        <Link to="/team">Progetti</Link>
        <Link to="/progetti">Team</Link>
        <Link to="/contatti">Contattaci</Link>
      </div>
    </nav>
  );
}