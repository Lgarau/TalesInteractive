import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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