import React from 'react';
import styles from './Contact.module.css';
import {getImageUrl} from '../../utlis';

export const Contact = () => {
  return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}> 
            <h2>Contact</h2>
                <p>Feel free to reach</p>
            </div>
            <ul className={styles.links}> 
                <li className={styles.link}><img src={getImageUrl('contact/emailIcon.png')} alt="emailIcon" />
                <a href="mailto:dipaghosh0902@gmail.com">Mail Here</a>
                </li>

                <li className={styles.link}><img src={getImageUrl('contact/githubIcon.png')} alt="Github Icon" />
                <a href="https://github.com/dipa-ghosh11">GitHub</a>
                </li>

                <li className={styles.link}><img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedInIcon" />
                <a href="https://www.linkedin.com/in/dipa-ghosh-122041266">LinkedIn</a>
                </li>
            </ul>
        </footer>
  )
}
