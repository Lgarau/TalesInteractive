import HeroComponent from "../common/HeroComponent";
import agnesiaInfo from "../../data/agnesia-info";
import { useRef } from "react";
import agnese from "../../assets/agnese-e-matteo-bw-concept-art.jpg"
import vicario from "../../assets/vicario-bw-concept-art.jpg"
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
              Matteo e Agnese
            </h3>
          </div>
          <div>
            <h2 ref={scrollRef} className="text-xl">Sinossi <br /> <br /></h2>
            <p id="scroll-trigger" className="text-lg text-left">
              1349. Durante l’epidemia di peste più
              grave della storia, le autorità aragonesi cercano
              di mantenere l’ordine, ma la paura, la
              superstizione e le lotte di potere seminano il
              caos tra la popolazione.

              In questo scenario cupo, Agnese Tola, una
              giovane domestica, lotta contro il tempo per
              salvare il suo fratellino Matteo, colpito dal
              morbo. Isolata dalla società e senza risorse, è
              costretta a muoversi tra ambigui uomini di
              chiesa, mercanti senza scrupoli e funzionari
              aragonesi, mentre cerca disperatamente una
              cura.

              Agnese e Matteo Tola

              Ma il pericolo più grande non è solo la malattia:
              in una città consumata dalla paura e dalla
              violenza, ogni decisione potrebbe essere fatale.
            </p>
          </div>
          <div>
            <img className="project-concept-art rounded-xl" src={vicario} alt="vicario-concept-art" />
            <h3>
              Il veguer Guerau
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