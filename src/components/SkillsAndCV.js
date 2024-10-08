import React from "react";


const SkillsAndCV = () => {
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
  };

  

  const SkillBox = ({ title, skills }) => (
    <div className="border p-4 rounded-lg bg-green-300">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.logo}
              alt={`Logo ${skill.name}`}
              className="w-12 h-12 object-contain"
            />
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Compétences techniques</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <SkillBox title="Front-end" skills={skills.frontend} />
        <SkillBox title="Back-end" skills={skills.backend} />
      </div>

      
    </div>
  );
};

export default SkillsAndCV;
