import { NavLink } from "react-router-dom";
import Logo from "../../assets/bianco-logo.png";

export default function HeaderComponent() {

    return (
        <header>

            <nav className="flex justify-between items-center px-40 py-5 border-b border-gray-700 space-x-8 text-[#a0522d] font-semibold">

                <NavLink to="/">Home</NavLink>
                <NavLink to="/progetti">Progetti</NavLink>
                <NavLink to="/"> <img src={Logo} alt="TalesInteractiveLogo" id="logo" className="h-10 text-white" /> </NavLink>


                <NavLink to="/team">Team</NavLink>
                <NavLink to="/contatti">Contattaci</NavLink>

            </nav>

        </header>
    );
};

