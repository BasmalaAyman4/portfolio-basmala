import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/header.module.css'
const Header = ({ scrollToSection, scrollToPanel }) => {

  return (
    <>

      <header className="site-header">
        <nav className="anchor-nav">
          <button onClick={() => scrollToSection('intro')} className="anchor-btn">Home</button>
          <button onClick={() => scrollToPanel(0)} className="anchor-btn">Services</button>
          <button onClick={() => scrollToPanel(1)} className="anchor-btn">Skills</button>
          <button onClick={() => scrollToSection('experince')} className="anchor-btn">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="anchor-btn">Projects</button>

        </nav>
      </header>
    </>
  )
}

export default Header
