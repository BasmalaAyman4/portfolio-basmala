import React from 'react'
import logo from '../assets/logo.png'
import styles from '../styles/header.module.css'
const Header = () => {
  return (
    <>
      <header className={`${styles.header}`}>
        <nav>
           <img alt='' src={logo} className={`${styles.logo}`} />
        </nav>
      </header>
    </>
  )
}

export default Header
