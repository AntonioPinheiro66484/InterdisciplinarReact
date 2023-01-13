import React from 'react'
import styles from './Body.module.css'
import Produtos from './Produtos'

const Body = ()=>{
    return(<div className={styles.body}>
        <div className={styles.categorias}>
            <div className={styles.titulo}>Novidades</div>
                <Produtos/>
        </div >
        <div className={styles.categorias}>
            <div className={styles.titulo}>Populares</div>
                <Produtos/>
        </div>
        <div className={styles.categorias}>
            <div className={styles.titulo}>Clássicos</div>
                <Produtos/>
        </div>
        <div className={styles.categorias}>
            <div className={styles.titulo}>Ofertas</div>
                <Produtos/>
        </div>
        
        </div>
    )

}
export default Body

