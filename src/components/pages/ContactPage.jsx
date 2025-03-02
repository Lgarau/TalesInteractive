import { useState } from "react";
import { useRef } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const thermsAndConditionRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati inviati:", formData);
    alert("Messaggio inviato con successo!");
    setFormData({ name: "", email: "", message: "" });


    const subject = `Contatto da ${formData.name}`;
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.message}`;
    const mailtoLink = `mailto:support@talesinteractive.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Apre il client di posta con i dati precompilati
    window.location.href = mailtoLink;
  };

  const toggleTerms = () => {
    thermsAndConditionRef.current.classList.toggle("hidden");
  }

  return (
    <section className="max-w-4xl mx-auto px-10 py-20">
      <h2 className="text-4xl pt-20 font-bold text-center text-[#a0522d] mb-12">Contattaci</h2>
      <p className="text-2xl text-white-900 text-center mb-20">
        Hai bisogno di scriverci? Compila il form!
      </p>

      <form onSubmit={handleSubmit} className="bg-transparent shadow-lg rounded-xl p-12 space-y-12 w-auto mx-auto">
        <div className="grid grid-cols-1 gap-12">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            className="border p-4 rounded-md w-full focus:ring-2 focus:outline-none w-auto mx-auto"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-4 rounded-md w-full focus:ring-2 focus:outline-none"
            required
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Messaggio"
          className="border p-4 rounded-md w-full h-48 resize-none focus:ring-2 focus:outline-none"
          required
        />
        <div id="therms-and-conditions" ref={thermsAndConditionRef} className="hidden padding bg-black border rounded-4xl text-white p-10">
          {/* intro */}
          <h1>Informativa sulla Privacy</h1><br />
          <p><strong>Ultimo aggiornamento: </strong>02/03/2025</p><br />
          <p>TALES INTERACTIVE S.R.L.S., con sede in Via Attilio Deffenu 12, 07100, Sassari, si impegna a
            proteggere la privacy degli utenti che visitano il nostro sito web <a className="text-blue-600 dark:text-blue-500 hover:underline" href="">www.talesinteractive.it</a>. La presente
            informativa descrive come raccogliamo, utilizziamo e proteggiamo i dati personali forniti dagli utenti
            tramite il nostro <strong>form di contatto.</strong></p><br /><br />
          <ol>
            {/* punto 1 */}
            <li>
              <h1 className="text-xl"><strong>Tipologia di dati raccolti</strong></h1>
              <p>Attraverso il form di contatto presente sul sito, raccogliamo i seguenti dati personali forniti
                volontariamente dagli utenti:</p>
              <ul>
                <li>Nome</li>
                <li>Cognome</li>
                <li>Indirizzo e-mail</li>
              </ul>
            </li><br /><br />
            {/* punto 2 */}
            <li>
              <h1 className="text-xl"><strong>Finalità del trattamento</strong></h1>
              <p>I dati raccolti vengono utilizzati esclusivamente per rispondere ai messaggi inviati dagli utenti tramite
                il form di contatto. <strong>Non utilizziamo i dati per finalità di marketing, newsletter o profilazione.</strong></p>
            </li><br /><br />
            {/* punto 3 */}
            <li>
              <h1 className="text-xl"><strong>Base giuridica del trattamento</strong></h1>
              <p>Il trattamento dei dati avviene sulla base dell’interesse legittimo di TALES INTERACTIVE S.R.L.S. di
                rispondere alle richieste degli utenti. Compilando il form e inviando il messaggio, l’utente fornisce
                volontariamente i propri dati per essere ricontattato.
              </p>
            </li><br /><br />
            {/* punto 4 */}
            <li>
              <h1 className="text-xl"><strong> Modalità di conservazione e sicurezza dei dat</strong></h1>
              <p>I dati trasmessi attraverso il form di contatto <strong>non vengono archiviati su server o database</strong>, ma
                restano esclusivamente nella casella di posta elettronica <strong>info@talesinteractive.it</strong>. Non utilizziamo
                servizi di terze parti per la gestione dei dati raccolti.</p>
            </li><br /><br />
            {/* punto 5 */}
            <li>
              <h1 className="text-xl"><strong>Condivisione dei dati con terze part</strong></h1>
              <p>I dati raccolti non verranno condivisi con terze parti, salvo richieste specifiche delle autorità
                competenti nei casi previsti dalla legge.</p>
            </li><br /><br />
            {/* punto 6 */}
            <li>
              <h1 className="text-xl"><strong>Diritti dell’utente
              </strong></h1>
              <p>Dal momento che i dati non vengono archiviati o conservati su un server, non è prevista la possibilità
                per l’utente di richiedere la modifica o la cancellazione dei propri dati dopo l’invio del messaggio.
                Tuttavia, per qualsiasi richiesta o chiarimento in merito alla privacy, l’utente può contattarci
                all’indirizzo <strong>info@talesinteractive.it</strong>.
              </p>
            </li><br /><br />
            {/* punto 7 */}
            <li>
              <h1 className="text-xl"><strong>Cookie e strumenti di tracciamento</strong></h1>
              <p>Il nostro sito <strong>non utilizza cookie di profilazione, pubblicitari o strumenti di tracciamento</strong> (come
                Google Analytics o Facebook Pixel).</p>
            </li><br /><br />
            {/* punto 8 */}
            <li>
              <h1 className="text-xl"><strong>Modifiche alla presente informativa</strong></h1>
              <p>TALES INTERACTIVE S.R.L.S. si riserva il diritto di modificare la presente informativa sulla privacy in
                qualsiasi momento. Le eventuali modifiche saranno pubblicate su questa pagina con la data di
                aggiornamento.</p>
            </li>
          </ol><br /><br />
          <h1 className="text-xl"><strong>Contatti</strong></h1>
          <p>Per qualsiasi domanda relativa alla presente informativa sulla privacy, puoi contattarci all’indirizzo email: <strong>info@talesinteractive.it</strong></p>
        </div>
        <div className="flex items-center">
          <input required id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <button onClick={toggleTerms} href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</button>.</label>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#a0522d] to-[#3d1f11] from-[10%] to-[90%] text-white px-8 py-8 rounded-md w-full hover:bg-[#8b4513] transition"
        >
          Invia Messaggio
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-30 text-center gap-20">

        <div>
          <p className="text-3xl font-bold text-[#a0522d]">Hai bisogno di supporto tecnico?</p>
          <p className="text-2xl text-white">support@talesinteractive.it</p>
        </div>

        <div>
          <p className="text-3xl font-bold text-[#a0522d]">Vuoi lavorare con noi? Manda il tuo CV a</p>
          <p className="text-2xl text-white">careers@talesinteractive.it</p>
        </div>
      </div>


      {/* Social */}
      <div className="mt-40 text-center space-y-12">
        <h3 className=" text-2xl font-bold text-white mb-16">Seguici sui social per rimanere aggiornato!</h3>
        <a href="#" className="text-[#a0522d] hover:text-[#8b4513] transition">
          <i className="fab fa-facebook"></i>
        </a>

        <a href="#" className="text-[#a0522d] hover:text-[#8b4513] transition">
          <i className="fab fa-instagram"></i>
        </a>
      </div>


      <div className="mt-40 text-center space-y-12">
        <h3 className="text-3xl font-bold text-[#a0522d] mb-16">Informazioni</h3>
        <p className="text-white">📍 Via Sassari, 123 - Sassari, Italia</p>
        <p className="text-white">📧 support@talesinteractive.it</p>
        <p className="text-white">📞 +39 0123 456 789</p>
      </div>
    </section>


  );
}