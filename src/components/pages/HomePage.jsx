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
        <div className="flex justify-center column-2" >

          <div className="max-w-4xl text-center">
            <h2 className="text-4xl pt-30 font-bold text-center text-[#a0522d] mb-12">Chi Siamo</h2>
            <p className="text-lg text-white-700">
              Siamo un team di professionisti appassionati, uniti dalla volontà di innovare e creare esperienze
              coinvolgenti. Con anni di esperienza e una forte determinazione, siamo impegnati a realizzare progetti che
              abbiano un impatto positivo.
            </p>
          </div>
          <img src={Logo} alt="TalesInteractiveLogo" id="logo" className="max h-100 text-white" />
        </div >
        <div>
          <div className="my-30 flex flex-col my-30 md:flex-row gap-10">
            {/* Mission Section */}
            <div className="flex-1 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-[#a0522d] mb-4">Missione</h3>
              <p className="text-lg text-white-700">
                La nostra missione è creare esperienze interattive che uniscano la
                creatività con l'innovazione tecnologica. Siamo impegnati a portare
                storie coinvolgenti e giochi che ispirano e intrattengono.
              </p>
            </div>

            {/* Vision Section */}
            <div className="flex-1 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-[#a0522d] mb-4">Visione</h3>
              <p className="text-lg text-white-700">
                La nostra visione è quella di offrire esperienze uniche che spingano i limiti della
                tecnologia e della narrazione. Vogliamo che i nostri progetti
                cambino il modo in cui il mondo interagisce con i giochi.
              </p>
            </div>



          </div>
        </div>
      </div>
    </div >
  );
}