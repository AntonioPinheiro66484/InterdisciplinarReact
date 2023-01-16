import React from 'react'
import styles from './PreFooter.module.css'
import AvBookslogo from "../assets/images/Imagens/logo.png"
import Facebook from '../assets/icons/facebook.png'
import Instagram from '../assets/icons/instagram.png'
import Twitter from '../assets/icons/twitter.png'
import Whatsapp from '../assets/icons/whatsapp.png'

const PreFooter = ()=>{
    return(
        <div className={styles.subfooter}>
            <img className={styles.logo} src={AvBookslogo}/>
            <div className={styles.nomelogo}>A.V. Books</div>
            <div className={styles.caixaIcons}>
                <img className={styles.icons} src={Facebook} alt="Logo para ir para nossa rede social no Facebook" />
                <img className={styles.icons} src={Instagram} alt="Logo para ir para nossa rede social no Instagram" />
                <img className={styles.icons} src={Twitter} alt="Logo para ir para nossa rede social no Twitter" />
                <img className={styles.icons} src={Whatsapp} alt="Logo para ir para nossa rede social no Whatsapp" />
            </div>
        </div>
    )
}

export default PreFooter