import React from "react";


const Header = () => {
  return (
    <header className="bg-sky-12 text-white p-4 flex flex-wrap justify-between items-center sticky border-b border-sky-7 shadow-2-xl top-0 z-50">
      {/*<h1 className="text-xl sm:text-2xl font-bold ml-4 sm:ml-8 md:ml-10">Portfolio</h1>*/}
      <a href ="#home">
      <img src="/images/LogoInitiale.png" alt="Logo" className="h-14 w-auto ml-5 sm:ml-8 md:ml-10 rounded-full" />
      </a>
      <nav className="flex space-x-2 sm:space-x-4 text-sm sm:text-base mr-4 sm:mr-8 md:mr-10">
        <a href="#apropos" className="hover:text-sky-9 transition-colors">À propos</a>
        <a href="#projets" className="hover:text-sky-9 transition-colors">Projets</a>
        <a href="#contact" className="hover:text-sky-9 transition-colors">Contact</a>
      </nav>
    </header>
  );
};

export default Header;