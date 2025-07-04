import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/header.module.css'
const Header = ({ scrollToSection, scrollToPanel }) => {

  return (
    <>

      <header className={styles.header}>
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('intro')} className={styles.btn}>Home</button>
          <button onClick={() => scrollToPanel(0)} className={styles.btn}>Services</button>
          <button onClick={() => scrollToPanel(1)} className={styles.btn}>Skills</button>
          <button onClick={() => scrollToSection('experince')} className={styles.btn}>Experience</button>
          <button onClick={() => scrollToSection('projects')} className={styles.btn}>Projects</button>

        </nav>
      </header>
    </>
  )
}

export default Header
