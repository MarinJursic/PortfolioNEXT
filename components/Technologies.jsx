/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import React from 'react'
import styles from '../styles/Technologies.module.scss';

const Wheel = dynamic(() => import("../components/Wheel"));

function Technologies() {
    return (
        <section className={styles.technologies} id="skills">
        <h1>My Skills</h1>
        <Wheel />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2272"
          height="402"
          viewBox="0 0 2272 402"
        >
          <path
            id="Polygon_3"
            data-name="Polygon 3"
            d="M1136,0,2272,402H0Z"
            fill="#006dfb"
          />
        </svg>
        <img
          src="./images/AvatarSharpened.webp"
          alt="person"
          className={styles.avatar}
        />
      </section>
    )
}

export default Technologies
