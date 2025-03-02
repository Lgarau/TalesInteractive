
import MembersComponent from "../common/MembersComponent";
import daniele from "../../assets/member-img/daniele.jpg"
export default function TeamPage() {
  return (
    <section>

      {/* founder */}
      <div className="max-w-270 mx-auto text-center py-20">
        <div className=" flex flex-wrap gap-20 justify-center">
          <div className="w-100  justify-center">
            <img className="mx-auto max-w-100 p-5 octagon" src={daniele} alt="" />

            <div className="justify-center">
              <h3 className="block my-4 text-5xl font-semibold text-[#a0522d] mb-2">Daniele Scano</h3>
              <p className="text-4xl my-3 text-white">Fondatore</p>
              <div className="mt-7">
                <a href=""><i className="member-social fa-brands fa-square-facebook"></i></a>
                <a href=""><i className="member-social fa-brands fa-square-instagram"></i></a>
                <a href=""><i className="member-social fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>


          <p className="text-2xl text-left content-center max-w-150 text-white-700">
            Facciamo videogiochi che raccontano storie profonde, esplorano la complessità dell’animo umano e danno vita a mondi immersivi e stilisticamente unici. Crediamo nel potere della narrazione interattiva e nella capacità dei videogiochi di emozionare, far riflettere e lasciare un segno nelle vite di ognuno di noi.
            <br /><br /><br />
            Tales Interactive nasce dall’idea di Daniele Scano di creare un polo di riferimento per lo sviluppo videoludico in Sardegna. Un luogo dove storia, tecnologia e creatività possano incontrarsi,  portando la nostra storia nel mondo attraverso il medium che piú amiamo!
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-4xl pt-20 font-bold text-center text-[#a0522d] mb-8">Il Nostro Team</h2>

      <MembersComponent />

    </section >
  );
}