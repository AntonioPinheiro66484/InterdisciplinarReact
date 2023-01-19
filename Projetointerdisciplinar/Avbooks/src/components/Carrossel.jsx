import React from "react";
import styles from "./Carrossel.module.css"
import Slider from "react-slick";
import Livro1 from '../assets/images/Livros/A Arte da Guerra.png'
import Livro2 from '../assets/images/Livros/Cemitério Maldito.png'
import Livro3 from '../assets/images/Livros/FNAF - Olhos Prateados.png'
import Livro4 from '../assets/images/Livros/Gravity Falls - O diário perdido.png'
import Livro5 from '../assets/images/Livros/It- A coisa.png'
import Livro6 from '../assets/images/Livros/Jogos Vorazes.png'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carrossel = ()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(
      <div>
        <Slider {...settings}>
          <div>
            <h3>A arte da Guerra</h3>
            <img className={styles.livro} src={Livro1}></img>
          </div>
          <div>
            <h3>Comitério Maldito</h3>
            <img className={styles.livro} src={Livro2}></img>

          </div>
          <div>
            <h3>FNAF - Olhos Prateados</h3>
            <img className={styles.livro} src={Livro3}></img>

          </div>
          <div>
            <h3> Gravity Falls </h3>
            <img className={styles.livro} src={Livro4}></img>

          </div>
          <div>
            <h3>Jogos Vorazes</h3>
            <img className={styles.livro} src={Livro5}></img>

          </div>
          <div>
            <h3> Manual do Império</h3>
            <img className={styles.livro} src={Livro6}></img>

          </div>
          <div>
            <h3>Mitologia Nordica</h3>
          </div>
          <div>
            <h3>O caminho Jedi</h3>
          </div>
          <div>
            <h3>O homem de giz</h3>
          </div>
        </Slider>
      </div>
    );
  }

export default Carrossel