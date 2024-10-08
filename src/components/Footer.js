import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className=" bg-blue-100 text-blue-400 p-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/pierre-gruenais/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Pierre-gruenais"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800"
          >
            <FaGithub size={24} />
          </a>

          <a  href="mailto:votre@email.com" className="hover:text-gray-800">  
          <img src="images/mail-3.svg" alt="Contact icon" className="h-6 w-6 mr-2 "/>
            
         </a>
        </div>
        <p> © 2024 Gruenais</p>
      </div>
    </footer>
  );
};

export default Footer;
