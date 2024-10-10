import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Apropos from "./components/AproposAndCV";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectGallery from './components/ProjectGallery';
import Skills from "./components/Skills";
//

function App() {
  return (
    <div className="App bg-sky-12">
      <Header />
      <main>
        <section id="apropos">
          <Apropos />
        </section>
        <section id="projets">
          <ProjectGallery />
        </section>
        <section id="skills">
          <Skills />
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
