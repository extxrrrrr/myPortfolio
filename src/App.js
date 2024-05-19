import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Project from './components/projects/Project';
import Skills from './components/skills/Skills';


function App() {
  return (
    <div className='scrollSelect'>
     <Navbar />
     <Home />
     <About />
     <Skills />
     <Project />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
