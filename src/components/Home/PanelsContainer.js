import React from 'react'
import Services from './Services'
import Skills from './Skills'
import '../../App.css'
const PanelsContainer = ({ panelsRef, scrollToPanel, scrollToSection }) => {
  return (
      <div ref={panelsRef} className="panels-container">
          <Services scrollToPanel={scrollToPanel} />
          <Skills scrollToPanel={scrollToPanel} />

      
   </div>
  )
}

export default PanelsContainer
