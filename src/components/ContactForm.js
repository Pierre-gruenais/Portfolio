import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
 
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Envoie les données au service Formspree
    const response = await fetch('https://formspree.io/f/myzyygbn', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message envoyé avec succès !");
      setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
    } else {
      setStatus("Erreur lors de l'envoi du message. Veuillez réessayer.");
    }
  
}
  return (
    <div className="mb-12 text-black bg-sky-12 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
      <p className="text-white mb-4 sm:mb-0">
        Vous pouvez me contacter ici{" "}
        </p>
        <div className="flex flex-col sm:flex-row items-center"> 
          <img
          src="images/hand_point_right.png"
          alt="hand point"
          className="h-6 w-6 mx-2 mt-4 sm:mt-0 transform sm:rotate-0 rotate-90 transition-transform duration-300"
        />
        <a
          href="mailto:contact@pierregruenais.com 	"
          className="ml-2 text-sky-7 hover:underline"
        >
          email
        </a>
      </div>
     
        </div>
      <p className="mt-4 mb-4 text-white"> ou me laisser un message ci-dessous</p>

    {/* Affichage du message de confirmation ou d'erreur */}
    {status && <p className={`text-center my-4 ${status.includes("succès") ? "text-green-500" : "text-red-500"}`}>{status}</p>}

    
      <div className="">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="relative m-4">
            <label
              htmlFor="name"
              className="absolute -top-2 left-3 border border-sky-10 rounded bg-white px-1 text-sm text-gray-500"
            >
              Nom
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border-none focus:ring-0 outline-none"
              required
            />
          </div>
          <div className=" relative  m-4">
            <label
              htmlFor="name"
              className="absolute -top-2 left-3 border border-sky-10 bg-white rounded px-1 text-sm text-gray-500"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-none focus:ring-0 outline-none"
              required
            />
          </div>
          <div className="relative m-4">
            <label
              htmlFor="name"
              className="absolute -top-2 left-3 border border-sky-10 bg-white rounded px-1 text-sm text-gray-500"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
              required
            ></textarea>
          </div>

          {/* Ajoutez des champs similaires pour email et message */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-black bg-blue-500 rounded-md hover:bg-sky-9 focus:outline-none focus:bg-blue-600"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
