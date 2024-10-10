import React,{useRef} from "react";
import { Download } from "lucide-react";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Fonction pour gérer le téléchargement du CV
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "documents/CV_Portfolio-Pierre _Gruenais.pdf";
  link.download = "pierre-cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const Link = ({ heading, imgSrc, subheading, href, className }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    // @ts-ignore
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onClick={handleDownload} // Utiliser handleDownload ici
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-sky-7 transition-colors duration-500 group-hover:text-sky-8 md:text-4xl"
        >
          {heading.split("").map((word, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block mr-1"
              key={i}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-white transition-colors duration-500 group-hover:text-sky-12">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-16 w-20 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-sky-8" />
      </motion.div>
    </motion.a>
  );
};

function Apropos() {
  return (
    <div className="bg-sky-12 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto"></div>
    <section className="border border-solid border-sky-7 rounded-lg bg-sky-12 text-white flex flex-col md:flex-row items-center justify-between p-8 mb-0">
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

      {/* Section "Mon CV" à droite 
      <div className="w-full md:w-1/3">
       <h2 className="text-2xl font-bold mb-4  text-sky-7 ">Mon CV</h2>*/}
        <Link
            heading="Mon CV"
            subheading="Cliquez pour télécharger"
            imgSrc="images/CV-thumbnail.png" // Remplace par un aperçu de ton CV
            href="#"
            className="bg-sky-7 p-4 rounded-lg transform -translate-x-12"
           
          />
      {/*</section></div>*/}
    </section>
    </div>
     
     
  );
}

export default Apropos;
