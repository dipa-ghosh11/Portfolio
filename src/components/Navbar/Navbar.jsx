import React,{useState} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utlis';

export const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Port<span className={styles.span}>folio</span></a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuicon.png")} alt="menu-button"
            onClick={()=>setMenuOpen(!menuOpen)} />
            <ul className={`${styles.menuitems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  );
};
