
import MembersComponent from "../common/MembersComponent";
import daniele from "../../assets/member-img/daniele.jpg"
export default function TeamPage() {
  return (
    <section>

      {/* About Us Section */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <div className=" flex">
          <div className="w-90  justify-center">
            <img className="mx-auto max-w-90 p-5 octagon" src={daniele} alt="" />

            <div className="justify-center">
              <h3 className="block my-4 text-4xl font-semibold text-[#a0522d] mb-2">Daniele Scano</h3>
              <p className="text-3xl my-3 text-white">Fondatore</p>
              <a href=""><i class="member-social fa-brands fa-square-facebook"></i></a>
              <a href=""><i class="member-social fa-brands fa-square-instagram"></i></a>
              <a href=""><i class="member-social fa-brands fa-linkedin"></i></a>
            </div>
          </div>


          <p className="text-lg text-left flex w-150 items-center text-white-700 ml-10">
            Siamo un team di professionisti appassionati, uniti dalla volontà di innovare e creare esperienze
            coinvolgenti. Con anni di esperienza e una forte determinazione, siamo impegnati a realizzare progetti che
            abbiano un impatto positivo.
            <br />
            <br />
            Tales Interactive nasce
            dall’idea di Daniele Scano con
            l’intenzione di bla bla bla
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-4xl pt-20 font-bold text-center text-[#a0522d] mb-12">Il Nostro Team</h2>

      <MembersComponent />

    </section >
  );
}