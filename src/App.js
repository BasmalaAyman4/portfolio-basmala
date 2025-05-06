import './App.css';
import Experience from './components/Home/Experience';
import PesonalInfo from './components/Home/PesonalInfo';
import Services from './components/Home/Services';
import Skills from './components/Home/Skills';
import Projects from './components/Projects';
import Header from './layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'


function App() {
  return (
    <>
 {/*   
     
    
     
     
     <Projects/> */}
      <Header />
      <PesonalInfo />
      <Services />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
