import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Apropos from "./components/Apropos";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectGallery from './components/ProjectGallery';
import SkillsAndCV from "./components/SkillsAndCV";
//

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="apropos">
          <Apropos />
        </section>
        <section id="projets">
          <ProjectGallery />
        </section>
        <section id="skills">
          <SkillsAndCV />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
