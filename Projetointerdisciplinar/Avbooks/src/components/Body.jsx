import React from 'react'
import styles from './Body.module.css'
import AvBookslogo from '../assets/images/logo.png'

const Body = ()=>{
    return(
        <div className={styles.body}>
            <img src={AvBookslogo}/>
            <img src={AvBookslogo}/>
            <img src={AvBookslogo}/>
            <img src={AvBookslogo}/>
            <img src={AvBookslogo}/>
            <img src={AvBookslogo}/>
            <div>
                <img src={AvBookslogo}/>
            </div>
        </div>
    )

}
export default Body