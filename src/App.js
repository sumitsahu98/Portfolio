import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Certificate from "./components/Certificate";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Projects />
      <Skills />
      <Certificate/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
