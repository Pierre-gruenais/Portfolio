import React from "react";
import ProjectCard from "./ProjectCard";

const ProjetsGallery = () => {
  const projects = [
    {
      title: "Opotager",
      description: (
        <>
          Projet de fin d'études développé en un mois par une équipe de 4
          personnes avec l'école O'Clock.
          <br />
          Cette plateforme communautaire facilite la mise en relation entre
          propriétaires de terrains et amateurs de jardinage pour encourager le
          jardinage collaboratif.
        </>
      ),

      techStack: "React,Typescript,Php",
      imageUrl: "images/apercu opotager.png",
      projectUrl: "https://reseau-social-potager.vercel.app/",
    },
    {
      title: "FrenchWordle",
      description: (
        <>
          "FrenchWordle est un jeu de mots interactif et responsive,adaptaté du
          populaire jeu Wordle du NYTimes. <br />
          Les joueurs doivent deviner un mot de cinq lettres en un maximum de
          six essais.",
        </>
      ),

      techStack: "Html,CSS,JavaScript,TailwindCss",
      imageUrl: "images/wordle.png",
      projectUrl: "https://french-wordle-one.vercel.app/",
    },
    {
      title: "GameGirl",
      description: (
        <>
          {" "}
          "GameGirl est un jeu en développement, inspiré des classiques Game &
          Watch <br />
          Avec un gameplay simple et addictif, il s'adresse aux enfants et
          continuera d'évoluer, avec de nouvelles fonctionnalités à venir.",
        </>
      ),
      techStack: "Html, CSS, Javascript",
      imageUrl: "images/apercu gamegirl.png",
      projectUrl: "https://game-girl-seven.vercel.app/",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap:6 p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
export default ProjetsGallery;


