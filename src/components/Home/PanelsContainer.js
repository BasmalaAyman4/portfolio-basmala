import React from 'react'
import Panel1 from './Panel1'
import Panel2 from './Panel2'
import Services from './Services'
import Skills from './Skills'
import Experience from './Experience'
import '../../App.css'
const PanelsContainer = ({ panelsRef, scrollToPanel, scrollToSection }) => {
  return (
      <div ref={panelsRef} className="panels-container">
          <Services scrollToPanel={scrollToPanel} />
          <Skills scrollToPanel={scrollToPanel} />
      <Experience scrollToPanel={scrollToPanel} />
   {/*        <Panel3 scrollToPanel={scrollToPanel} />
          <Panel4 scrollToPanel={scrollToPanel} />
          <Panel5 scrollToPanel={scrollToPanel} scrollToSection={scrollToSection} /> */}
      </div>
  )
}

export default PanelsContainer
