import React from 'react'
import styles from './Footer.module.css'
import American from '../assets/icons/american.png'
import Diners from '../assets/icons/diners.png'
import Elo from '../assets/icons/elo.png'
import Hipercard from '../assets/icons/hipercard.png'
import Mastercard from '../assets/icons/mastercard.png'
import Paypal from '../assets/icons/paypal.png'
import Visto from '../assets/icons/visto.png'



const Footer = () => {
  return (
    
    <footer className={styles.footer}>
        <div className={styles.caixa}>
            <div className={styles.lista}>
                <ul className={styles.items}>
                  <li className={styles.titulo}>Sobre o A.V Books</li>
                  <li className={styles.item}>Quem somos ?</li>
                  <li className={styles.item}>Trabalhe conosco</li>
                  <li className={styles.item}>Acessibilidade</li>
                </ul>
            </div>
            <div className={styles.lista}>
                  <ul className={styles.items}>
                    <li className={styles.titulo}>Atendimento</li>
                    <li className={styles.item}>Política de Vendas, Trocas e Privacidade</li>
                    <li className={styles.item}>Termos e condições de compras</li>
                    <li className={styles.item}>Precisa de Ajuda ?</li>
                  </ul>
            </div>
            <div className={styles.lista}>
                  <ul className={styles.iconFormaPagamento}>
                    <li className={styles.titulo}>Formas de pagamento</li>
                    <img className={styles.iconFooter} src={American}></img>
                    <img className={styles.iconFooter} src={Diners}></img>
                    <img className={styles.iconFooter} src={Elo}></img>
                    <img className={styles.iconFooter} src={Hipercard}></img>
                    <img className={styles.iconFooter} src={Mastercard}></img>
                    <br/>
                    <img className={styles.iconFooter} src={Paypal}></img>
                    <img className={styles.iconFooter} src={Visto}></img>
                  </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer