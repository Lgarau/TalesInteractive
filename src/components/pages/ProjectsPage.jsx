import HeroComponent from "../common/HeroComponent";
import agnesiaInfo from "../../data/agnesia-info";
import { useRef } from "react";
import agnese from "../../assets/agnese-e-matteo-bw-concept-art.jpg"
import vicario from "../../assets/vicario-bw-concept-art1.jpg"
export default function ProjectsPage() {
  const scrollRef = useRef(null);
  function ProjectInfoComponent({ icon, content }) {


    return (

      <div className="w-100 text-center" >
        <i className={icon}></i>
        <div className="flex-1 p-6 rounded-lg max-w-150 ">
          <p className="text-lg text-white-700">
            {content}
          </p>
        </div>
      </div>


    );
  }

  return (
    <>

      <HeroComponent place="projects" scrollRef={scrollRef} />
      <section>

        <div id="agnesia-info-wrapper" className=" flex flex-wrap justify-center gap-20 text-center my-20 column-3">
          <div>
            <img className="project-concept-art rounded-xl" src={agnese} alt="agnesia-concept-art" />
            <h3>
              MATTEO E AGNESE
            </h3>
          </div>
          <div id="agnesia-description">

            <p ref={scrollRef} className="text-xl text-left">
              Sassari, 1349. Il flagello piú terribile della storia continua a imperversare, alimentando diffidenza e paura fra la popolazione sassarese.
              <br /><br /><br />
              Mentre la Corona d’Aragona stringe la sua presa sulla città, i sostenitori dei Doria e gli indipendentisti complottano per riappropriarsi del potere perduto.
              <br />
              Per salvare il fratello ammalato, Agnese sarà costretta ad affrontare le sue piú grandi paure, svelando verità terribili sul suo stesso passato.
              <br /><br /><br />
              Una storia che intreccia amore, odio e compassione, dove ogni scelta potrebbe determinare il tuo destino e quello di un’intera città ormai stremata e sull’orlo del baratro.
            </p>
          </div>
          <div>
            <img className="project-concept-art rounded-xl" src={vicario} alt="vicario-concept-art" />
            <h3>
              IL VEGUER GUERAU DE TORRENTS
            </h3>
          </div>

        </div>
        <div className=" flex flex-wrap justify-center rounded-md gap-20 text-center my-20 column-3 pt-20">
          {
            agnesiaInfo.map((info) => {
              return <ProjectInfoComponent icon={info.icon} content={info.content} />
            })
          }
        </div>

        <div className="flex color-#daa520 flex-col gap-10 text-center text-[#a0522d] text-5xl pt-20">
          <h1>Altre novitá in arrivo...</h1>
          <h1>SEGUI I NOSTRI SOCIAL PER RIMANE AGGIORNATO</h1>

          <div className="flex mx-auto gap-10" >
            <a href=""><i class="project-social fa-brands fa-square-facebook"></i></a>
            <a href=""><i class="project-social fa-brands fa-square-instagram"></i></a>
            <a href=""><i class="project-social fa-brands fa-linkedin"></i></a>
          </div>
        </div>

      </section>

    </>
  );
}