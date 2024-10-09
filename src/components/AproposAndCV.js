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
    <section className="bg-sky-12 text-white flex flex-col md:flex-row items-center justify-between p-8 mb-40">
      {/* Section "À propos de moi" */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <h2 className="text-2xl text-sky-7 font-bold mb-4">À propos de moi</h2>
        <p>
          Après une carrière longue et enrichissante dans la restauration, j'ai
          décidé de relever de nouveaux défis en me tournant vers le
          développement web. <br />
          Cette discipline m’ayant toujours attiré elle me permettra d'exploiter
          les compétences et l'expérience professionnelles que j'ai acquises au
          fil des ans tout en déployant de nouvelles méthodologies de travail.
          <br />
          <br />
          Récemment certifié en développement web, je suis désormais prêt à
          atteindre de nouveaux objectifs professionnels. Mon ambition est de
          créer des solutions innovantes qui améliorent l'expérience
          utilisateur, tout en continuant à évoluer dans ce domaine passionnant.
          Je vous invite à découvrir mes projets et mon parcours sur ce
          portfolio en ligne.
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
        <h2 className="text-2xl font-bold mb-4  text-sky-7 ">Mon CV</h2>
        <div className="flex items-center space-x-4 border border-sky-7 p-4 rounded-lg">
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
