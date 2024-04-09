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

function App() {
  return (
    <div class="wrapper" id="Home">
      <DarkMode />
      <NavBar />
      <HeroSection />
      <Skills />
      <Banner />
      <MyProjects />
      <AboutMe />
      <Contact />
      <Footer />

      <a href="#Home" className="goup">
        <i className="fa-solid fa-up-long"></i>
      </a>
    </div>
  );
}

export default App;
