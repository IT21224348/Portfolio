import './App.css';
import Contact from './components/Contact/Contact';
import Design from './components/Design';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import RoadMap from './components/RoadMap/RoadMap';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import NavBar from './components/navbar/NavBar';
import Certificate from './components/Certificate/Certificate'


export default function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Design />
      <Home />   
      <RoadMap />
      <Skills />
      <Projects />
      <Services />
      <Certificate/>
      <Contact />
      <Footer />
      
    
    </div>
  );
}


