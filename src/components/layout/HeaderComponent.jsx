import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logow.png";

export default function HeaderComponent() {

    return (
        <header>

            <div>
                <img src={Logo} alt="TalesInteractiveLogo" className="h-40 text-white" />
            </div>

            <nav className="flex justify-between items-center px-40 py-5 border-b border-gray-700">
                <div className="space-x-8 text-[#a0522d] font-semibold">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/team">Progetti</NavLink>
                    <NavLink to="/progetti">Team</NavLink>
                    <NavLink to="/contatti">Contattaci</NavLink>
                </div>
            </nav>

        </header>
    );
};

