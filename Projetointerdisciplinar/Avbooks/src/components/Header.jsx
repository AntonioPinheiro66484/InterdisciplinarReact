import React from 'react'
import styles from './Header.module.css'
import AvBookslogo from "../assets/images/Imagens/logo.png"
const Header = () => {
  return (
     <header className={styles.header}>
         <img className={styles.logo} src={AvBookslogo}/>
      </header>
  )
}

export default Header