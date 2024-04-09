import "./App.css";
import { DarkMode } from "./Components/DarkMode";
import { NavBar } from "./Components/NavBar";
import { HeroSection } from "./Components/HeroSection";
import { Skills } from "./Components/Skills";
import { Banner } from "./Components/Banner";
import { MyProjects } from "./Components/MyProjects";
import { AboutMe } from "./Components/AboutMe";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="wrapper" id="Home">
      <DarkMode />
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/" element={<Banner />} />
        <Route path="/Projects" element={<MyProjects />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />

      <a href="#Home" className="goup">
        <i className="fa-solid fa-up-long"></i>
      </a>
    </div>
  );
}

export default App;
