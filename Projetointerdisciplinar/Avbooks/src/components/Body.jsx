import React from 'react'
import styles from './Body.module.css'
import Produtos from './Produtos'

const Body = ()=>{
    return(<div className={styles.body}>
            <div className={styles.titulo}>Livros</div>
                <Produtos/>
            </div>
    )

}
export default Body