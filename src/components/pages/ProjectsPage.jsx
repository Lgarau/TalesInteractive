export default function ProjectsPage() {
  return (
    <div className="py-50 px-10 bg-black-100">
      <h2 className="text-4xl font-semibold text-center mb-12 text-[#a0522d]">I Nostri Progetti</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Mission Section */}
        <div className="flex-1 bg-black p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-[#a0522d] mb-4">Missione</h3>
          <p className="text-lg text-white-700">
            La nostra missione è creare esperienze interattive che uniscano la
            creatività con l'innovazione tecnologica. Siamo impegnati a portare
            storie coinvolgenti e giochi che ispirano e intrattengono.
          </p>
        </div>

        {/* Vision Section */}
        <div className="flex-1 bg-black p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-[#a0522d] mb-4">Visione</h3>
          <p className="text-lg text-white-700">
            La nostra visione è quella di offrire esperienze uniche che spingano i limiti della
            tecnologia e della narrazione. Vogliamo che i nostri progetti
            cambino il modo in cui il mondo interagisce con i giochi.
          </p>
        </div>
      </div>
    </div>
  );
}