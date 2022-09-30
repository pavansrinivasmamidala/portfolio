import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Techstack from './components/Techstack/Techstack';
import Projects from './components/Projects/Projects';
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      
      <Projects />
      <Techstack />
      <Contact />
    </div>
  );
}

export default App;
