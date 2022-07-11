/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import styles from "../styles/technologies.module.css";

const Wheel = dynamic(() => import("../components/Wheel"));

const allImages = [
  "./images/HTML.webp",
  "./images/CSS.webp",
  "./images/JavaScript.webp",
  "./images/React.svg",
  "./images/Redux.webp",
  "./images/NEXT.webp",
  "./images/TypeScript.svg",
  "./images/NodeJS.webp",
  "./images/Express.webp",
  "./images/Firebase.webp",
  "./images/Sass.webp",
  "./images/SocketIO.webp",
  "./images/MongoDB.webp",
  "./images/TailwindCSS.webp",
  "./images/Bootstrap.webp",
  "./images/GraphQL.webp",
];

function Technologies() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return (
    <section className={styles.technologies} id="skills">
      <h1>My Skills</h1>
      {windowSize.width > 800 && <Wheel width={windowSize.width} />}
      <div className={styles.grid}>
        {allImages.map((image, id) => (
          <div key={id} className={styles.circle}>
            <img src={image} alt={image} />
          </div>
        ))}
      </div>
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
  );
}

export default Technologies;
