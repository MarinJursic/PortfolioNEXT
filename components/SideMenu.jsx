/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import styles from '../styles/SideMenu.module.scss';

function SideMenu({ scrollPosition, menuOpened, setMenuOpened }) {

  const variants = {
    show: {
      right: 0,
    },
    hide: {
      right: -100,
    },
  };

    return (
        <motion.div
        initial={false}
        variants={variants}
        animate={scrollPosition > 750 ? "show" : "hide"}
        className={styles.sideMenu}
        transition={{ duration: 0.25 }}
      >
        <div className={styles.hamburgerMenu}>
          <motion.div
            initial={true}
            variants={variants}
            animate={menuOpened ? "hide" : "show"}
            className={styles.hamburger}
            transition={
              menuOpened ? { duration: 0.25 } : { delay: 0.25, duration: 0.25 }
            }
            onClick={() => {
              console.log("Open");
              setMenuOpened(true);
            }}
          >
            <img src="./images/Hamburger.webp" alt="hamburger" />
          </motion.div>
          <motion.div
            initial={true}
            variants={variants}
            animate={menuOpened ? "show" : "hide"}
            className={styles.menu}
            transition={
              menuOpened ? { delay: 0.25, duration: 0.25 } : { duration: 0.25 }
            }
          >
            <div
              className={styles.closeMenu}
              onClick={() => {
                setMenuOpened(false);
              }}
            >
              <img src="./images/Close.webp" alt="close" />
            </div>
            <ul>
              <Link href="/" passHref>
                <li className={styles.circle}>
                  <img src="./images/Home.webp" alt="home" />
                </li>
              </Link>
              <Link href="#about" passHref>
                <li className={styles.circle}>
                  <img src="./images/About.webp" alt="about" />
                </li>
              </Link>
              <Link href="#skills" passHref>
                <li className={styles.circle}>
                  <img src="./images/Skills.webp" alt="skills" />
                </li>
              </Link>
              <Link href="#projects" passHref>
                <li className={styles.circle}>
                  <img src="./images/Projects.webp" alt="projects" />
                </li>
              </Link>
              <Link href="#contact" passHref>
                <li className={styles.circle}>
                  <img src="./images/Contact.webp" alt="contact" />
                </li>
              </Link>
            </ul>
          </motion.div>
        </div>
        <Link href="/" passHref>
          <div className={styles.backToTop}>
            <img src="./images/UpArrow.webp" alt="up" />
          </div>
        </Link>
      </motion.div>
    )
}

export default SideMenu
