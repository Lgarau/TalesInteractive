export default function Team() {
    return (
      <div className="py-20 px-10 bg-gray-100">
        
        <h2 className="text-4xl font-bold text-center text-[#a0522d] mb-12">Chi Siamo</h2>
  
        {/* About Us Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700">
            Siamo un team di professionisti appassionati, uniti dalla volontà di innovare e creare esperienze
            coinvolgenti. Con anni di esperienza e una forte determinazione, siamo impegnati a realizzare progetti che
            abbiano un impatto positivo.
          </p>
        </div>
  
        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="/path/to/team-member1.jpg"
              alt="Membro del Team"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#a0522d] mb-2">Daniele</h3>
            <p className="text-gray-700">Ceo e Founder.</p>
          </div>
  
         
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="/path/to/team-member2.jpg"
              alt="Membro del Team"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#a0522d] mb-2">Joe</h3>
            <p className="text-gray-700">Art Director.</p>
          </div>
  
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <img
              src="/path/to/team-member3.jpg"
              alt="Membro del Team"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#a0522d] mb-2">Gloria</h3>
            <p className="text-gray-700">3D Designer.</p>
          </div>
        </div>
  
        {/* Values Section */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <h3 className="text-3xl font-semibold text-[#a0522d] mb-6">I Nostri Valori</h3>
          <ul className="list-disc text-lg text-gray-700 space-y-4">
            <ul>Innovazione continua</ul>
            <ul>Collaborazione e crescita del team</ul>
            <ul>Impatto positivo nella comunità</ul>
          </ul>
        </div>
      </div>
    );
  }