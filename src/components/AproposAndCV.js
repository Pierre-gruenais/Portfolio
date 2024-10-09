import React from "react";
import { Download } from "lucide-react";

// Fonction pour gérer le téléchargement du CV
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "cheminducvpdf"; // Remplace par le chemin réel de ton CV PDF
  link.download = "pierre-gruenais-cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function Apropos() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 mb-40">
      {/* Section "À propos de moi" */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">À propos de moi</h2>
        <p>
          Jeune développeur en devenir, je me suis reconverti après une longue
          et belle carrière en restauration. L'envie de relever de nouveaux
          défis m'a amené à faire une reconversion professionnelle dans un
          milieu qui m'attirait depuis très longtemps.
        </p>
      </div>

      {/* Image de profil au centre */}
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <img
          src={`${process.env.PUBLIC_URL}/maTete.jpg`}
          alt="ma grosse tête"
          className="w-64 h-64 rounded-full"
        />
      </div>

      {/* Section "Mon CV" à droite */}
      <div className="w-full md:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Mon CV</h2>
        <div className="flex items-center space-x-4 border p-4 rounded-lg">
          {" "}
          {/* Cadre pour le CV */}
          <img
            src="/path/to/cv-thumbnail.png" // Remplace par le chemin réel de ton image de CV
            alt="Aperçu du CV"
            className="w-24 h-32 object-cover border"
          />
          <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
          >
            <Download className="mr-2" />
            <span>Télécharger mon CV</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Apropos;
