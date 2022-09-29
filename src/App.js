import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Techstack from './components/Techstack/Techstack';
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from './components/Projects/Project';

AOS.init();
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      
      
      <Techstack />
      <Contact />
    </div>
  );
}

export default App;
