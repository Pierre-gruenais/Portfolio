import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Apropos from "./components/AproposAndCV";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectGallery from './components/ProjectGallery';
import Skills from "./components/Skills";
//bg-sky-12

function App() {
  return (
    <div className="App relative min-h-screen ">
      <div
      className="fixed inset-0 bg-cover bg-center z-0"
    style = {{
      backgroundImage:"url('images/pexels-luis-gomes.jpg')",
      filter:'brightness(0.7)'
    }}></div>
    <div className="relative z-10">
      <Header />
      <main>
        <section id="apropos" className="my-5">
        
          <Apropos />
          
        </section>
        <section id="projets" className="my-5">
          <ProjectGallery />
        </section>
        <section id="skills "className="my-10">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
    </div>
  );
}

export default App;
