 import React, { useEffect, useRef, useState } from 'react';

const HorizontalScrollPanels = () => {
  /*   const containerRef = useRef(null);
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

                // Calculate current panel
                const totalPanels = 5;
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
        const totalPanels = 5;

        const progress = panelIndex / totalPanels;
        const targetScroll = containerTop + (progress * (containerHeight - windowHeight));

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }; */

    return (
     /*   <div className="site">
            <div className="feather"></div>

            <header className="site-header">
                <nav className="anchor-nav">
                    <button onClick={() => scrollToSection('intro')} className="anchor-btn">Home</button>
                    <button onClick={() => scrollToPanel(0)} className="anchor-btn">Panel 1</button>
                    <button onClick={() => scrollToPanel(2)} className="anchor-btn">Panel 3</button>
                    <button onClick={() => scrollToPanel(4)} className="anchor-btn">Panel 5</button>
                    <button onClick={() => scrollToSection('map')} className="anchor-btn">Map</button>
                </nav>
            </header>

            <main className="site-content">
                <section id="intro" className="full-screen intro-section">
                    <h1>A Cool Title</h1>
                    <div className="clouds clouds-layer-1"></div>
                    <div className="clouds clouds-layer-2"></div>
                </section>

                <div
                    ref={containerRef}
                    className="panels-scroll-container"
                    style={{ height: '500vh' }} // 5x viewport height for 5 panels
                >
                    <div className="panels-sticky-wrapper">
                        <div ref={panelsRef} className="panels-container">
                            {[
                                { id: 'panel-1', title: 'Panel 1', color: 'red' },
                                { id: 'panel-2', title: 'Panel 2', color: 'orange' },
                                { id: 'panel-3', title: 'Panel 3', color: 'purple' },
                                { id: 'panel-4', title: 'Panel 4', color: 'green' },
                                { id: 'panel-5', title: 'Panel 5', color: 'gray' }
                            ].map((panel, index) => (
                                <article key={panel.id} className={`panel ${panel.color}`}>
                                    <div className="panel-content">
                                        <div className="panel-left">
                                            <div className="image-placeholder"></div>
                                        </div>
                                        <div className="panel-right">
                                            <h2>{panel.title}</h2>
                                            <p className="step-description">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Including versions of Lorem Ipsum with modern design elements and smooth animations.
                                            </p>
                                            <div className="panels-navigation">
                                                {index > 0 && (
                                                    <button
                                                        onClick={() => scrollToPanel(index - 1)}
                                                        className="nav-panel prev"
                                                    >
                                                        ← Prev
                                                    </button>
                                                )}
                                                {index < 4 && (
                                                    <button
                                                        onClick={() => scrollToPanel(index + 1)}
                                                        className="nav-panel next"
                                                    >
                                                        Next →
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>

                <section id="map" className="full-screen map-section">
                    <h2>Map Section</h2>
                    <p>This section comes after the horizontal panels</p>
                </section>
            </main>

            <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-weight: 300;
          line-height: 1.6;
        }

        .site {
          position: relative;
        }

        .feather {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 30px;
          height: 30px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          z-index: 10000;
        }

        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .anchor-nav {
          display: flex;
          gap: 0;
        }

        .anchor-btn {
          padding: 1rem 2rem;
          background: none;
          border: none;
          color: white;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: 500;
        }

        .anchor-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .full-screen {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .intro-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          flex-direction: column;
        }

        .intro-section h1 {
          font-size: 4rem;
          margin-bottom: 2rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          animation: fadeInUp 1s ease-out;
        }

        .clouds {
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20"><circle cx="20" cy="10" r="8" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="10" r="6" fill="rgba(255,255,255,0.05)"/></svg>') repeat-x;
          animation: float 20s infinite linear;
        }

        .clouds-layer-1 {
          animation-duration: 25s;
        }

        .clouds-layer-2 {
          animation-duration: 35s;
          opacity: 0.5;
        }

        .panels-scroll-container {
          position: relative;
        }

        .panels-sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }

        .panels-container {
          display: flex;
          height: 100vh;
          width: 500%;
          transition: transform 0.1s ease-out;
        }

        .panel {
          width: 20%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          position: relative;
        }

        .panel.red {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
        }

        .panel.orange {
          background: linear-gradient(135deg, #ffa726 0%, #ff9800 100%);
        }

        .panel.purple {
          background: linear-gradient(135deg, #ab47bc 0%, #9c27b0 100%);
        }

        .panel.green {
          background: linear-gradient(135deg, #66bb6a 0%, #4caf50 100%);
        }

        .panel.gray {
          background: linear-gradient(135deg, #78909c 0%, #607d8b 100%);
        }

        .panel-content {
          display: flex;
          width: 90%;
          max-width: 1200px;
          height: 80%;
          gap: 4rem;
          align-items: center;
        }

        .panel-left,
        .panel-right {
          flex: 1;
          height: 100%;
        }

        .panel-left {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder {
          width: 100%;
          height: 60%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .panel-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
        }

        .panel-right h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .step-description {
          font-size: 1.2rem;
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .panels-navigation {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .nav-panel {
          padding: 0.8rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .nav-panel:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .map-section {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          flex-direction: column;
        }

        .map-section h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .map-section p {
          font-size: 1.2rem;
          opacity: 0.8;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          from {
            transform: translateX(-100px);
          }
          to {
            transform: translateX(100vw);
          }
        }

        @media (max-width: 768px) {
          .panel-content {
            flex-direction: column;
            gap: 2rem;
          }
          
          .panel-right h2 {
            font-size: 2rem;
          }
          
          .intro-section h1 {
            font-size: 2.5rem;
          }
          
          .anchor-btn {
            padding: 0.8rem 1rem;
            font-size: 12px;
          }
        }
      `}</style>
        </div>
        */
       <>
       <p>jhdjd</p>
       </>
    );
};

export default HorizontalScrollPanels; 