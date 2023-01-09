import React from 'react'
import styles from './PreFooter.module.css'
import AvBookslogo from "../assets/images/Imagens/logo.png"

const PreFooter = ()=>{
    return(
        <div className={styles.subfooter}>
            <img className={styles.logo} src={AvBookslogo}/>
            <div className={styles.nomelogo}>A.V Books</div>

        </div>
    )
}

export default PreFooter