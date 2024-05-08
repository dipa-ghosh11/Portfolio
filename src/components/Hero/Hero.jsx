import React from 'react'
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utlis";


export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Dipa</h1>
            <p className={styles.description}>I am a versatile Fontend web developer with a confident grasp of various technologies and frameworks.</p>
            <div className="btn">
            <a href="mailto:dipaghosh0902@gmail.com" className={styles.contactBtn}>Contact Me</a>
          <a href="https://drive.google.com/file/d/1AXQL3bJPCPjEkB4VDBTJMJeCprzjauNp/view?usp=sharing" className={styles.contactBtn1}>Download Cv</a>
           </div>

        </div>
        <img src= {getImageUrl("hero/heroImage.jpg")} alt="image of me"  className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
