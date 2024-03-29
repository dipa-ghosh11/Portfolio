import React from 'react';
import { getImageUrl } from '../../utlis';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl('about/aboutImage.png')} alt="about-image" className={styles.aboutIcon} />

            <ul className={styles.aboutItems}> 
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt="cursor-icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend developer</h3>
                        <p>I am a frontend developer</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt="server-icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend  developer</h3>
                        <p>I am a Backend developer</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/uiIcon.png')} alt="ui-icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX Designer</h3>
                        <p>I am a UI/UX designer</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
// 56:38