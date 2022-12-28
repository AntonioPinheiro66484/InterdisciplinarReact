import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {

  return (
    <header className={styles.navbar}>
          <ul className={styles.items}>
            <ul>Best Sellers</ul>
            <ul>E-Books</ul>
            <ul>Lançamentos</ul>
            <ul>Romances</ul>
            <ul>Infantins</ul>
            <ul>Mangás</ul>
            <ul>HQ's</ul>
          </ul>
    </header>
  )
}

export default NavBar