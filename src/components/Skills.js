import React from "react";


const Skills = () => {
  const skills = {
    frontend: [
      { name: "React", logo: "images/react.svg" },
      { name: "Tailwind", logo: "images/tailwindcss.svg" },
      { name: "Javascript", logo: "images/javascript.svg" },
    ],
    backend: [
      { name: "Php", logo: "images/php.svg" },
      { name: "Sql", logo: "images/SQL.svg" },
    ],
    transversal: [
      { name: "Autonome, rigoureux, résilient" },
      { name: "Attentif aux détails"},
      { name: "capacité éprouvée à travailler en groupe et en collaboration"},
      { name: "Agile dans l'apprentissage de nouvelles compétences et technologies"},
      { name: "Excellentes compétences en communication avec les membres de l’équipe et les clients"},
    ],
  };

  

  const SkillBox = ({ title, skills, isTransversal= false}) => (
    <div className="border p-4 rounded-lg bg-green-300 h-full">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {isTransversal ? ( 
        <ul className="list-none pl-5">
          {skills.map((skill) => (
            <li key={skill.name} className="mb-2">{skill.name}</li>
          ))}
        </ul>
      ):(

      
      <div className="flex flex-wrap justify-center items-center gap-4 ">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col justify-center items-center ">
            <img
              src={skill.logo}
              alt={`Logo ${skill.name}`}
              className="w-12 h-12 object-contain"
            />
            
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
        
         </div>
        )}
      </div>
    
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Compétences techniques</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SkillBox title="Front-end" skills={skills.frontend} />
        <SkillBox title="Back-end" skills={skills.backend} />
        <SkillBox title="Compétences transversales" skills={skills.transversal} isTransversal={true} />
      
      </div>
 
  </div>


      
  
  );
};

export default Skills;
