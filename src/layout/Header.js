import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/header.module.css'
const Header = ({ scrollToSection, scrollToPanel }) => {
/*   const [activeSection, setActiveSection] = useState('Home');
  const [navBg, setNavBg] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 200 ? setNavBg(true) : setNavBg(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])
  const handleNavClick = (section) => {
    setActiveSection(section);
    const targetElement = document.getElementById(section.toLowerCase());
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 180, // 80px لتعويض ارتفاع الـ header
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = ['home', 'services', 'skills', 'resume', 'projects'];

      const active = sections.find(section => {
        const el = document.getElementById(section);
        return el && scrollPosition >= el.offsetTop &&
          scrollPosition < el.offsetTop + el.offsetHeight;
      });

      if (active) {
        setActiveSection(active.charAt(0).toUpperCase() + active.slice(1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); */
  return (
    <>
    {/*   <header className={`${styles.header} ${navBg ?styles.bg : ""}`}>
        <div>
          <img alt='' src={logo} className={`${styles.logo}`} />
        </div>
       
        <ul className={`${styles.header__list}`}>
          {['Home', 'Services', 'Skills', 'Resume', 'Projects'].map((item) => (
            <li
              key={item}
              className={`${styles.header__item}`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      
      </header> */}
      <header className="site-header">
        <nav className="anchor-nav">
          <button onClick={() => scrollToSection('intro')} className="anchor-btn">Home</button>
          <button onClick={() => scrollToPanel(0)} className="anchor-btn">Panel 1</button>
          <button onClick={() => scrollToPanel(1)} className="anchor-btn">Panel 5</button>
          <button onClick={() => scrollToSection('map')} className="anchor-btn">Map</button>
        </nav>
      </header>
    </>
  )
}

export default Header
