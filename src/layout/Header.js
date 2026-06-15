/* import React, { useEffect, useState } from 'react'
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
 */
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import styles from '../styles/header.module.css';


const Header = ({ scrollToSection, scrollToPanel }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = (action) => {
    action();
    setIsOpen(false); // close menu after clicking
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <img src={logo} alt="Logo" className={styles.logo} />

          <div className={styles.hamburger} onClick={handleToggle}>
            {isOpen ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                <path d="M16 8L8 16M8 8L16 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
           </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
<path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
<path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
<path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
</svg>
            
            }
          </div>

          <nav className={`${styles.nav} ${isOpen ? styles.nav__open : ''}`}>
            <button onClick={() => handleLinkClick(() => scrollToSection('intro'))} className={styles.btn}>Home</button>
            <button onClick={() => handleLinkClick(() => scrollToPanel(0))} className={styles.btn}>Services</button>
            <button onClick={() => handleLinkClick(() => scrollToPanel(1))} className={styles.btn}>Skills</button>
            <button onClick={() => handleLinkClick(() => scrollToSection('experince'))} className={styles.btn}>Experience</button>
            <button onClick={() => handleLinkClick(() => scrollToSection('projects'))} className={styles.btn}>Projects</button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
