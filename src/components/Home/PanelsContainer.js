import React from 'react'
import Services from './Services'
import Skills from './Skills'
import '../../App.css'
import Experience from './Experience'
import Projects from '../Projects'
const PanelsContainer = ({ panelsRef, scrollToPanel, scrollToSection }) => {
  return (
    <>
      <div ref={panelsRef} className="panels-container">
          <Services scrollToPanel={scrollToPanel} />
          <Skills scrollToPanel={scrollToPanel} />

      
   </div>
   {/*    <Experience scrollToSection={scrollToSection} />
      <Projects scrollToSection={scrollToSection} /> */}
      <Experience scrollToSection={scrollToSection} />
      <Projects scrollToSection={scrollToSection} /> 
    </>
  )
}

export default PanelsContainer
