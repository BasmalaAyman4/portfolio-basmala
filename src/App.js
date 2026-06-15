import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PesonalInfo from './components/Home/PesonalInfo';
import Header from './layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AnimatedCursor from "react-animated-cursor";
import { gsap } from 'gsap';
import Loader from './Loader';
import PanelsContainer from './components/Home/PanelsContainer';
import Experience from './components/Home/Experience';
import Projects from './components/Projects';
import ProjectDetailPage from './components/ProjectDetail/ProjectDetail'; // 👈 add this

function App() {
  const [loading, setLoading] = useState(true);
  const containeref = useRef(null);

  useEffect(() => {
    if (!loading) {
      gsap.from(containeref.current, { y: 100, opacity: 0 });
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
      const panelsStart = containerTop;
      const panelsEnd = containerTop + containerHeight;

      if (scrollTop >= panelsStart && scrollTop < panelsEnd) {
        setIsInPanelsSection(true);
        const progress = (scrollTop - panelsStart) / (containerHeight - windowHeight);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        setPanelProgress(clampedProgress);
        const totalPanels = 2;
        const currentPanelIndex = Math.floor(clampedProgress * totalPanels);
        setCurrentPanel(Math.min(currentPanelIndex, totalPanels - 1));
        const maxTranslate = panelsWidth - viewportWidth;
        const translateX = -clampedProgress * maxTranslate;
        panelsRef.current.style.transform = `translateX(${translateX}px)`;
      } else {
        setIsInPanelsSection(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPanel = (panelIndex) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const totalPanels = 2;
    const progress = panelIndex / (totalPanels - 1);
    const targetScroll = containerTop + (progress * (containerHeight - windowHeight));
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <>
      <Routes>
        {/* ── Home page ── */}
        <Route
          path="/"
          element={
            <>
              {loading && <Loader onComplete={() => setLoading(false)} />}
              {!loading && (
                <div className='site' ref={containeref}>
                  <div className="feather"></div>
                  <Header scrollToSection={scrollToSection} scrollToPanel={scrollToPanel} />
                  <PesonalInfo scrollToSection={scrollToSection} />
                  <div ref={containerRef} className="panels-scroll-container">
                    <div className="panels-sticky-wrapper">
                      <PanelsContainer
                        panelsRef={panelsRef}
                        scrollToPanel={scrollToPanel}
                        scrollToSection={scrollToSection}
                      />
                    </div>
                  </div>
                  <div className='visabile'>
                    <Experience scrollToSection={scrollToSection} />
                    <Projects scrollToSection={scrollToSection} />
                  </div>
                </div>
              )}
            </>
          }
        />

        {/* ── Project detail page ── */}
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>

      {/* Cursor always visible */}
      <div className='mo'>
        <AnimatedCursor
          color="#333"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{ mixBlendMode: 'exclusion' }}
        />
      </div>
    </>
  );
}

export default App;