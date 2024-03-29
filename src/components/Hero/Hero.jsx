import React from 'react'
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utlis";


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Dipa</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, numquam!</p>
            <a href="mailto:dipaghosh0902@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src= {getImageUrl("hero/heroImage.jpg")} alt="image of me"  className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
