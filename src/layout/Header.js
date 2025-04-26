import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/header.module.css'
const Header = () => {
  const [activeSection, setActiveSection] = useState('Home');

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
  }, []);
  return (
    <>
      <header className={`${styles.header}`}>
        <div>
          <img alt='' src={logo} className={`${styles.logo}`} />
        </div>
       
        <ul className={`${styles.header__list}`}>
          {['Home', 'Services', 'Skills', 'Resume', 'Projects'].map((item) => (
            <li
              key={item}
              className={`${styles.header__item} ${activeSection === item ? styles.active : ''
                }`}
              onClick={() => handleNavClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      
      </header>
    </>
  )
}

export default Header
