import React from 'react';
import Botao from './Botao';
import styles from './Produtos.module.css'
import Livro1 from '../assets/images/Livros/Gravity Falls - O diário perdido.png'
import Livro2 from '../assets/images/Livros/A Arte da Guerra.png'
import Livro3 from '../assets/images/Livros/It- A coisa.png'

const Produtos =()=>{
    return(
            <div className={styles.caixa}>
                    <div className={styles.produto}>
                                <div className={styles.imagem}>
                                    <img src={Livro1} alt="Gravity Falls - O diário perdido"/>
                                </div>
                                <div className={styles.descricao}>
                                    <h3 className={styles.nomeLivro}>Gravity Falls <br/></h3>
                                    <h3 className={styles.precoLivro}>R$ 60,00</h3>
                                    <Botao/>
                                </div>
                        </div>

                        <div className={styles.produto}>
                                <div className={styles.imagem}>
                                    <img src={Livro2} alt="A Arte da Guerra"/>
                                </div>
                                <div className={styles.descricao}>
                                    <h3 className={styles.nomeLivro}>A Arte da Guerra</h3>
                                    <h3 className={styles.precoLivro}>R$ 60,00</h3>
                                    <Botao/>
                                </div>
                        </div>
                        
                        <div className={styles.produto}>
                                <div className={styles.imagem}>
                                    <img src={Livro3} alt="It- A coisa"/>
                                </div>
                                <div className={styles.descricao}>
                                    <h3 className={styles.nomeLivro}>It - A coisa</h3>
                                    <h3 className={styles.precoLivro}>R$ 60,00</h3>
                                    <Botao/>
                                </div>
                        </div>
                    </div>
            
    )

}

export default Produtos