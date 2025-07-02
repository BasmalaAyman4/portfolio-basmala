import './App.css';
import PesonalInfo from './components/Home/PesonalInfo';

import Header from './layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from 'react';

import AnimatedCursor from "react-animated-cursor"
import { gsap } from 'gsap';
import Loader from './Loader';
import PanelsContainer from './components/Home/PanelsContainer';
import Experience from './components/Home/Experience';
import Projects from './components/Projects'
function App() {

  const [loading, setLoading] = useState(true);
  const containeref = useRef(null);
  useEffect(() => {
    if (!loading) {
      gsap.from(containeref.current, {
        y: 100,
        opacity: 0,
      });
    }
  }, [loading]);

  const containerRef = useRef(null);
  const panelsRef = useRef(null);
  const [isInPanelsSection, setIsInPanelsSection] = useState(false);
  const [panelProgress, setPanelProgress] = useState(0);
  const [currentPanel, setCurrentPanel] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !panelsRef.current) return;

      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const panelsWidth = panelsRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      // Calculate if we're in the panels section
      const panelsStart = containerTop;
      const panelsEnd = containerTop + containerHeight;

      if (scrollTop >= panelsStart && scrollTop < panelsEnd) {
        setIsInPanelsSection(true);

        // Calculate progress through panels section
        const progress = (scrollTop - panelsStart) / (containerHeight - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setPanelProgress(clampedProgress);

        // Calculate current panel - CHANGED: Now for 2 panels
        const totalPanels = 2;
        const currentPanelIndex = Math.floor(clampedProgress * totalPanels);
        setCurrentPanel(Math.min(currentPanelIndex, totalPanels - 1));

        // Apply horizontal transform
        const maxTranslate = panelsWidth - viewportWidth;
        const translateX = -clampedProgress * maxTranslate;
        panelsRef.current.style.transform = `translateX(${translateX}px)`;
      } else {
        setIsInPanelsSection(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPanel = (panelIndex) => {
    if (!containerRef.current) return;

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const totalPanels = 2; // CHANGED: Now 2 panels

    // Calculate progress to center on the specific panel
    const progress = panelIndex / (totalPanels - 1); // Use totalPanels - 1 for proper distribution
    const targetScroll = containerTop + (progress * (containerHeight - windowHeight));

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };
  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
        {
          !loading &&
        
        <div className='site' ref={containeref}>
            <div className="feather"></div>
            <Header scrollToSection={scrollToSection} scrollToPanel={scrollToPanel} />
        
              <PesonalInfo />

              <div
                ref={containerRef}
                className="panels-scroll-container"
                style={{ height: '150vh' }} // 5x viewport height for 5 panels
              >
                <div className="panels-sticky-wrapper">
                  <PanelsContainer
                    panelsRef={panelsRef}
                    scrollToPanel={scrollToPanel}
                    scrollToSection={scrollToSection}
                  />
                </div>
              </div>
<Experience/>
              <Projects/>
       </div>
        }
      <div className='mo'>
        <AnimatedCursor
          color="#333"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
        />
      </div>
    </>
  );
}

export default App;
