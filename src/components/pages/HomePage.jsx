import Hero from "../common/HeroComponent";
import ProjectsPage from "./ProjectsPage";
import TeamPage from "./TeamPage"
import HeroComponent from "../common/HeroComponent";
import Logo from "../../assets/bianco-logo.png";

export default function HomePage() {
  return (
    <div className="min-h-screen  text-white">

      <HeroComponent />

      <div className="py-10 px-10 bg-black-100 text-center items-center">

        <div className="flex-1  flex justify-center text-center pt-30  column-3" >

          {/* Vision Section */}
          <div>
            <i className="fa-solid fa-eye"></i>
            <div className="flex-1 p-6 rounded-lg max-w-150 ">
              <h2 className="text-4xl font-bold text-center mb-6">Visione</h2>
              <p className="text-lg text-white-700">
                Diventare l'hub di riferimento videoludico della Sardegna...
                e non solo
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="">
            <i className="fa-solid fa-people-group"></i>
            <div className="mflex-1 p-6 rounded-lg max-w-150">
              <h2 className="text-4xl font-bold text-center mb-6">Il Team</h2>
              <p className="text-lg text-white-700">
                Un gruppo di creativi, narratori e sviluppatori che danno vita a esperienze videoludiche uniche.
              </p>
            </div>
          </div>





          {/* Mission Section */}
          <div>
            <i className="fa-solid fa-flag"></i>
            <div className="flex-1 p-6 rounded-lg max-w-150">
              <h2 className="text-4xl font-bold text-center mb-6">Missione</h2>
              <p className="text-lg text-white-700">
                Scrivere opere dalla forte componente  narrativa e artistica
              </p>
            </div>
          </div>







        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 my-30 px-20">
          <div className="relative p-8 rounded-lg shadow-md text-center">
            <img src="https://placehold.co/600x400" class="text-[#a0522d] fa-solid fa-user-large rounded-sm mx-auto mb-4 " alt="" />
            {/* <h3 className="absolute top-40 left-30 text-xl font-semibold text-[#a0522d] mb-2">CONCEPT ART</h3> */}
            <h2 className="text-4xl font-bold text-center mb-6">CONCEPT ATR</h2>
            <p className="text-lg text-white-700">
              La nostra visione è quella di offrire esperienze uniche che spingano i limiti della
              tecnologia e della narrazione. Vogliamo che i nostri progetti
              cambino il modo in cui il mondo interagisce con i giochi.
            </p>
          </div>

          <div className="relative p-8 rounded-lg shadow-md text-center">
            <img src="https://placehold.co/600x400" class="text-[#a0522d] fa-solid fa-user-large rounded-sm mx-auto mb-4 " alt="" />
            {/* <h3 className="absolute top-40 left-35 text-xl font-semibold text-[#a0522d] mb-2">IMMAGINI</h3> */}
            <h2 className="text-4xl font-bold text-center mb-6">IMMAGINI</h2>
            <p className="text-lg text-white-700">
              Siamo un team di professionisti appassionati, uniti dalla volontà di innovare e creare esperienze
              coinvolgenti. Con anni di esperienza e una forte determinazione, siamo impegnati a realizzare progetti che
              abbiano un impatto positivo.
            </p>
          </div>

          <div className="relative p-8 rounded-lg shadow-md text-center">
            <img src="https://placehold.co/600x400" class="text-[#a0522d] fa-solid fa-user-large rounded-sm mx-auto mb-4 " alt="" />
            {/* <h3 className="absolute top-40 left-38 text-xl font-semibold text-[#a0522d] mb-2">NOTIZIE</h3> */}
            <h2 className="text-4xl font-bold text-center mb-6">NOTIZIE</h2>
            <p className="text-lg text-white-700">
              La nostra missione è creare esperienze interattive che uniscano la
              creatività con l'innovazione tecnologica. Siamo impegnati a portare
              storie coinvolgenti e giochi che ispirano e intrattengono.
            </p>
          </div>

        </div>
      </div>
    </div >
  );
}