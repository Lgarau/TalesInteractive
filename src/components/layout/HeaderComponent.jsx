import { NavLink } from "react-router-dom";
import Logo from "../../assets/bianco-logo.svg";


export default function HeaderComponent() {

    return (
        <header>

            <nav className="flex text-xl justify-between items-center max-w-300 mx-auto p-5 space-x-8 text-[#a0522d] font-semibold">

                <NavLink to="/" className="text-white my-nav">Home</NavLink>
                <NavLink to="/progetti" className="text-[#a0522d] my-nav">Progetti</NavLink>
                <NavLink to="/"> <img src={Logo} alt="TalesInteractiveLogo" id="logo" className="max-h-30 pl-10 object-contain" /> </NavLink>


                <NavLink className="text-[#a0522d] my-nav" to="/team">Team</NavLink>
                <NavLink className="text-white my-nav" to="/contatti">Contattaci</NavLink>

            </nav>

        </header>
    );
};

