import React from "react";
import styles from "../styles/landing.module.css";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import github from "../public/images/Github.svg";
import linkedin from "../public/images/linkedin.svg";
import mail from "../public/images/email.svg";

function Landing() {
  return (
    <section className={styles.landing}>
      <div className={styles.header}>
        <nav className={styles.navbar}>
          <h2>
            <Link href="/">Marin</Link>
          </h2>
          <ul className={styles.buttons}>
            <li>
              <Link href="/" aria-label="home">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" aria-label="about">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" aria-label="skills">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#projects" aria-label="projects">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" aria-label="contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul className={styles.socials}>
            <li>
              <a
                href="https://github.com/MarinJursic"
                target="_blank"
                rel="noreferrer"
                title="Github"
                aria-label="github"
              >
                <Image
                  src={github}
                  alt="github"
                  width={40}
                  height={40}
                  className="github"
                  priority
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/marin-jursic"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                aria-label="linkedin"
              >
                <Image
                  src={linkedin}
                  alt="linkedin"
                  width={40}
                  height={40}
                  priority
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:marin.jursic@gmail.com"
                title="Email"
                aria-label="email"
              >
                <Image src={mail} alt="email" width={40} height={40} priority />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className={styles.home}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi, I'm Marin Jursic")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Let's work together")
              .pauseFor(2000)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
          className={styles.typewriter}
        />
      </section>
      <Link href="#about" aria-label="about" passHref>
        <div className={styles.scrollDown}></div>
      </Link>
    </section>
  );
}

export default Landing;
