/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.scss';
import computerTyping from '../public/images/ComputerTyping.svg';

function About() {
    return (
        <section className={styles.about} id="about">
        <div className={styles.split}>
          <div className={styles.left}>
            <Image
              src={computerTyping}
              alt="About me image"
              width={1550}
              height={1550}
            />
          </div>
          <div className={styles.right}>
            <h1>About Me</h1>
            <p>
              I'm a dedicated, hard-working and highly motivated full-stack web
              developer from Zadar, Croatia. I enjoy working on new projects and
              have freelance experience building and designing front end, back
              end and full-stack web applications.
            </p>
            <div className={styles.btn}>
              <a href="Resume.pdf" target="_blank" rel="noreferrer">
                See Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About
