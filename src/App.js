import './App.css';
import PesonalInfo from './components/Home/PesonalInfo';
import Services from './components/Home/Services';
import Skills from './components/Home/Skills';
import Header from './layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Header/>
     <PesonalInfo/>
     <Services/>
     <Skills/>
    </>
  );
}

export default App;
