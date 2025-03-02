import { NavLink } from "react-router-dom";
import Logo from "../../assets/marrone-logo-smaller-padding.png";
import { useState, useEffect } from "react";

export default function HeaderComponent() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"; // Blocca lo scrolling quando il menu è aperto
        } else {
            document.body.style.overflow = "auto"; // Riattiva lo scrolling
        }
    }, [isMenuOpen]);

    return (
        <header className="relative z-[100]">
            {/* Navbar desktop */}
            <nav className="hidden md:flex text-3xl justify-between items-center max-w-screen-2xl mx-auto p-5 px-10 space-x-10 text-[#a0522d] font-bold flex gap-7">
                <NavLink to="/TalesInteractive/home" className={({ isActive }) => `my-nav text-[#a0522d] ${isActive ? "text-white font-bold" : ""}`}>Home</NavLink>
                <NavLink to="/TalesInteractive/progetti" className={({ isActive }) => `my-nav text-[#a0522d] ${isActive ? "text-white font-bold" : ""}`}>Progetti</NavLink>

                {/* Logo centrale */}
                <NavLink to="/TalesInteractive/home">
                    <img src={Logo} alt="TalesInteractiveLogo" id="logo" className="pl-10 max-h-50 object-contain" />
                </NavLink>

                <NavLink to="/TalesInteractive/team" className={({ isActive }) => `my-nav text-[#a0522d] ${isActive ? "text-white font-bold" : ""}`}>Team</NavLink>
                <NavLink to="/TalesInteractive/contatti" className={({ isActive }) => `my-nav text-[#a0522d] ${isActive ? "text-white font-bold" : ""}`}>Contattaci</NavLink>
            </nav>

            {/* Hamburger menu */}
            <div className="flex md:hidden items-center justify-between p-5">
                {/* Logo al centro */}
                <NavLink to="/TalesInteractive">
                    <img src={Logo} alt="TalesInteractiveLogo" className="w-20" />
                </NavLink>

                {/* Bottone menu */}
                <button onClick={toggleMenu} className="text-[#a0522d] focus:outline-none">
                    {isMenuOpen ? (
                        // Icona X per chiudere
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        // Icona hamburger per aprire
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-13 h-13">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-r from-black to-[#3d1f11] from-[10%] to-[90%] backdrop-blur-md text-white flex flex-col items-center justify-center space-y-20 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-500 ease-in-out z-[9999]`}>
                {/* Icona di chiusura */}
                <button className="absolute top-6 right-6 text-white cursor-pointer" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-13 h-13">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                {/* Logo sopra il menu */}
                <img src={Logo} alt="TalesInteractiveLogo" className="w-40 mt-2" />

                {/* Link del menu */}
                <div className="flex flex-col items-center gap-10">
                    <NavLink to="/TalesInteractive/home" className={({ isActive }) => `my-nav text-[#a0522d] text-4xl font-bold ${isActive ? "text-white font-bold" : ""}`} onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/TalesInteractive/progetti" className={({ isActive }) => `my-nav text-[#a0522d] text-4xl font-bold ${isActive ? "text-white font-bold" : ""}`} onClick={toggleMenu}>Progetti</NavLink>
                    <NavLink to="/TalesInteractive/team" className={({ isActive }) => `my-nav text-[#a0522d] text-4xl font-bold ${isActive ? "text-white font-bold" : ""}`} onClick={toggleMenu}>Team</NavLink>
                    <NavLink to="/TalesInteractive/contatti" className={({ isActive }) => `my-nav text-[#a0522d] text-4xl font-bold ${isActive ? "text-white font-bold" : ""}`} onClick={toggleMenu}>Contattaci</NavLink>
                </div>
            </div>
        </header>

    );
}