export default function TeamPage() {
  return (
    <div className="py-10 px-10 bg-black-100">



      {/* About Us Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl pt-20 font-bold text-center text-[#a0522d] mb-12">Chi Siamo</h2>
        <p className="text-lg text-white-700">
          Siamo un team di professionisti appassionati, uniti dalla volontà di innovare e creare esperienze
          coinvolgenti. Con anni di esperienza e una forte determinazione, siamo impegnati a realizzare progetti che
          abbiano un impatto positivo.
        </p>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-30">

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <i class="text-[#a0522d] fa-solid fa-user-large rounded-full mx-auto mb-4 "></i>
          <h3 className="text-xl font-semibold text-[#a0522d] mb-2">Daniele</h3>
          <p className="text-gray-700">Ceo e Founder.</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <i class="text-[#a0522d] fa-solid fa-user-large rounded-full mx-auto mb-4 "></i>
          <h3 className="text-xl font-semibold text-[#a0522d] mb-2">Joe</h3>
          <p className="text-gray-700">Art Director.</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <i class="text-[#a0522d] fa-solid fa-user-large rounded-full mx-auto mb-4 "></i>
          <h3 className="text-xl font-semibold text-[#a0522d] mb-2">Gloria</h3>
          <p className="text-gray-700">3D Designer.</p>
        </div>
      </div>

      {/* projects */}
      <div className="my-30 px-10 bg-black-100">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#a0522d]">I Nostri Progetti</h2>
        <p className="text-center">tante belle cose</p>
      </div>

      {/* mission and values */}
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

      {/* Values Section */}
      <div className="max-w-4xl my-30 mx-auto text-center mt-12">
        <h3 className="text-3xl font-semibold text-[#a0522d] mb-6">I Nostri Valori</h3>
        <ul className="list-disc text-lg text-white-700 space-y-4">
          <ul>Innovazione continua</ul>
          <ul>Collaborazione e crescita del team</ul>
          <ul>Impatto positivo nella comunità</ul>
        </ul>
      </div>
    </div>
  );
}