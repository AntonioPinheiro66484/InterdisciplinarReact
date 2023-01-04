import React from 'react';
import Botao from './Botao';
import styles from './Produtos.module.css'
import Livro1 from '../assets/images/Livros/O caminho Jedi.png'

const Produtos =()=>{
    return(
        <div className={styles.caixa}>
            <div className={styles.produto}>
                        <div className={styles.imagem}>
                            <img src={Livro1} alt="Livro O caminho Jedi"/>
                        </div>
                        <div className={styles.descricao}>
                            <h3>O caminho Jedi</h3>
                            <h3>R$ 60,00</h3>
                            <Botao/>
                        </div>
                </div>
            </div>
    )

}

export default Produtos