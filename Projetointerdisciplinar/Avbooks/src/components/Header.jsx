import React from 'react'
import styles from './Header.module.css'
import AvBookslogo from "../assets/images/logo.png"
const Header = () => {
  return (
     <header className={styles.header}>
         <img src={AvBookslogo}/>
     </header>
  )
}

export default Header