/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/Home.module.scss";
import background from "../public/background/free-mountain-vector-24.webp";
import dynamic from "next/dynamic";
import github from "../public/images/Github.svg";
import linkedin from "../public/images/linkedin.svg";
import mail from "../public/images/mail.svg";
import Head from "next/head";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { useState, useEffect } from "react";

const SideMenu = dynamic(() => import('../components/SideMenu'));
const About = dynamic(() => import('../components/About'));
const Technologies = dynamic(() => import('../components/Technologies'));
const Projects = dynamic(() => import('../components/Projects'));
const Contact = dynamic(() => import('../components/Contact'));


export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Marin Jursic</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideMenu scrollPosition={scrollPosition} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
      <section className={styles.landing}>
        <div className={styles.background}>
          <Image
            src={background}
            alt="background"
            width={1920}
            height={1080}
            priority={true}
          />
        </div>
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
                    priority={true}
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
                    priority={true}
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:marin.jursic@gmail.com"
                  title="Email"
                  aria-label="email"
                >
                  <Image
                    src={mail}
                    alt="email"
                    width={40}
                    height={40}
                    priority={true}
                  />
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
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </div>
  );
}
