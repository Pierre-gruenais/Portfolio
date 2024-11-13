import React, { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

// Fonction pour gérer le téléchargement du CV
const handleDownload = (e) => {
  e.preventDefault();

  //Detecte si l'appareil est un ios
  const isIOS = /ipad|iphone|ipod/.test(navigator.userAgent);

  if (isIOS) {
    //pour ios ouvrir le PDF dans un nouvel onglet
    window.open("/document/CV-portfolio.pdf", "_blank");
  } else {
    const link = document.createElement("a");
    link.href = "documents/CV-portfolio.pdf";
    link.download = "pierre-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
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
      onClick={(e) => handleDownload(e)}
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
      <div className="max-w-5xl mx-auto"></div>
      <section className="border border-solid border-sky-7 rounded-lg bg-sky-12 text-white flex flex-col md:flex-row items-center justify-between p-8 spac-y-8 md:space-y-0 md:space:space-x-8">
        {/* Section "À propos de moi" */}
        <div className="w-full md:w-5/12">
          <h2 className="text-2xl text-sky-7 font-bold mb-4">
            À propos de moi
          </h2>
          <p className="text-sm">
            Après une carrière longue et enrichissante dans la restauration,
            j'ai décidé de relever de nouveaux défis et de faire un virage à
            180° en me tournant vers le développement web. <br />
            Cette discipline m’ayant toujours interressé, elle me permettra
            d'exploiter les compétences et l'expérience professionnelles,
            créativité, précision, rigueur que j'ai acquises au fil des ans tout
            en découvrant de nouvelles méthodologies de travail.
            <br />
            <br />
            Récemment certifié en développement web, je suis désormais prêt à
            atteindre mes nouveaux objectifs professionnels et partager mes
            compétences et mon experience. <br />
            Je vise à développer des sites web performants et accessibles, en
            m'adaptant aux éxigences du domaine.
            <br />
            Je vous invite à découvrir mes projets et mon parcours sur ce
            portfolio en ligne.
          </p>
        </div>

        {/* Image de profil au centre */}
        <div className="w-full md:w-2/12 flex flex-col items-center ">
          <img
            src={`${process.env.PUBLIC_URL}images/photo-profil.jpg`}
            alt="ma grosse tête"
            className="w-40 h-40 rounded-full "
          />
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/pierre-gruenais/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-7"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Pierre-gruenais"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-7"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Section "Mon CV" à droite 
      
       <h2 className="text-2xl font-bold mb-4  text-sky-7 ">Mon CV</h2>*/}
        <div className="w-full md:w-1/3 flex  justify-center">
          <Link
            heading="Mon CV"
            subheading="Cliquez pour télécharger"
            imgSrc="images/CV-thumbnail.png" //  aperçu du CV
            href="#"
            className="bg-sky-7 p-4 rounded-lg transform -translate-x-12"
          />
        </div>
        {/*</section></div>*/}
      </section>
    </div>
  );
}

export default Apropos;
