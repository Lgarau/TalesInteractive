import talInt from "../../assets/bianco.svg";
import { Link } from "react-router-dom";
import ArrowHead from "../../assets/freccia-bianca-testa.png"
import ArrowTail from "../../assets/freccia-bianca-coda.png"

export default function FooterComponent() {
    return (



        <footer className="p-10 " >
            <div id="arrows" className="flex content-center gap-2 justify-between ">
                <div id="l-arrow" className=" flex w-full content-center">
                    <img id="l-arrow-tail" src={ArrowTail} alt="" />
                    <div id="l-arrow-body" className="bg-white my-auto"></div>
                    <img id="l-arrow-head" src={ArrowHead} alt="" />
                </div>
                <div id="r-arrow" className=" flex w-full content-center">
                    <img id="r-arrow-head" src={ArrowHead} alt="" />
                    <div id="r-arrow-body" className="bg-white my-auto"></div>
                    <img id="r-arrow-tail" src={ArrowTail} alt="" />
                </div>
            </div>
            <div id="footer-content-wrapper" className="flex py-10 flex-wrap justify-between place item-center text-white text-start">

                <div id="footer-copyright-wrapper" className="footer-block flex place-content-center  text-white text-start">

                    <img id="footer-block-1" className="max-w-50 mx-5" src={talInt} alt="" />

                    <div id="footer-block-2" className="footer-block px-5 border-s border-e-white flex flex-col justify-between">
                        <div>
                            <p>Tutti i diritti riservati</p>
                            <p>P.IVA___________</p>
                        </div>
                        <div>
                            <p>Copiright © 2025</p>
                            <p>Tales interactive srls</p>
                        </div>
                    </div>

                </div>

                <div id="footer-info-wrapper" className="flex place-content-center item-center  text-white text-start">

                    <div id="footer-block-3" className="footer-block flex flex-col justify-center mx-5">
                        <h1 className="text-white pb-3">LINK UTILI</h1>
                        <div className="flex flex-col items-start">
                            <Link to="/">Home</Link>
                            <Link to="/progetti">Progetti</Link>
                            <Link to="/team">Il Team</Link>
                            <Link to="/contatti">Contatti</Link>
                        </div>
                    </div>

                    <div id="footer-block-4" className=" footer-block flex flex-col justify-center px-5 border-s border-e-white">
                        <h1 className="inline-block text-white pb-3">CONTATTI</h1>
                        <div className="flex flex-col items-start">
                            <p>Sassari - ITALIA</p>
                            <p>Via Attillio Defenu, 07100</p>
                            <p>info@talesinteractive.it</p>
                            <div>
                                <a href=""><i className="member-social-footer fa-brands fa-facebook-f"></i></a>
                                <a href=""><i className="member-social-footer fa-brands fa-instagram"></i></a>
                                <a href=""><i className="member-social-footer fa-brands fa-x-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </footer >

    );
}