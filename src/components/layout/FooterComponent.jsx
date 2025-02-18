import talInt from "../../assets/bianco.svg";
import { Link } from "react-router-dom";

export default function FooterComponent() {
    return (
        <footer className="flex p-10 place-content-around item-center bg-black text-white text-start">
            <img className=" max max-w-50" src={talInt} alt="" />



            <div className="px-5 border-s border-e-white flex flex-col justify-around items-center">
                <div>
                    <p>Tutti i diritti riservati</p>
                    <p>P.IVA___________</p>
                </div>
                <div>
                    <p>Copiright©2025</p>
                    <p>Tales interactive srls</p>
                </div>
            </div>

            <div className="my-auto">
                <h1 className="inline-block my-auto text-white pb-3">LINK UTILI</h1>
                <div className="flex flex-col items-start">
                    <Link>Home</Link>
                    <Link>progetti</Link>
                    <Link>Il Team</Link>
                    <Link>Contatti</Link>
                </div>
            </div>
            <div className="my-auto">
                <h1 className="inline-block my-auto text-white pb-3">LINK UTILI</h1>
                <div className="flex flex-col items-start">
                    <p>Sassari - ITALIA</p>
                    <p>Via Attillio Defenu, 07100</p>
                    <p>info@talesinteractive.it</p>
                    <p>Facebook-Instagram-Twitter</p>
                </div>
            </div>
        </footer>
    );
}