import React, { useState } from "react";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  techStack,
}) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const handleClick = (e) => {
    if (isActive) {
      e.preventDefault();
      window.open(projectUrl, "_blank", "noopener,noreferrer");
    } else {
      toggleActive();
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white text-center p-4">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm mb-2">{description}</p>
          <h4 className="font-semibold text-sm mb-2">Technologies utilisées</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.split(",").map((tech, index) => (
              <span
                key={index}
                className="bg-gray-400 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
          <span className="text-white hover:text-blue-500 mt-2 inline-block">
            {isActive ? "Cliquez pour voir plus" : "Touchez pour voir plus"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
