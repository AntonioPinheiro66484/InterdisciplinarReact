import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <header className={styles.navBar}>
          <ul className={styles.paiItems}>
            <ul className={styles.item}>Best Sellers</ul>
            <ul className={styles.item}>E-Books</ul>
            <ul className={styles.item}>Lançamentos</ul>
            <ul className={styles.item}>Romances</ul>
            <ul className={styles.item}>Infantins</ul>
            <ul className={styles.item}>Mangás</ul>
            <ul className={styles.item}>HQ's</ul>
          </ul>
    </header>
  )
}

export default NavBar