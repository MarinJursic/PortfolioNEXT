/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

// Images

import github from "../public/images/github.webp";
import linkedin from "../public/images/linkedin.webp";
import mail from "../public/images/mail.webp";
import computerTyping from "../public/images/ComputerTyping.svg";
import background from "../public/background/free-mountain-vector-24.webp";

import Head from "next/head";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

// Components

import Wheel from "../components/Wheel";
import Example from "../components/Example";

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

  const variants = {
    show: {
      right: 0,
    },
    hide: {
      right: -100,
    },
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Marin Jursic</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <section className={styles.landing}>
        <div className={styles.background}>
          <Image
            src={background}
            alt="background"
            priority
            width={1920}
            height={1080}
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
                  <Image src={linkedin} alt="linkedin" width={40} height={40} />
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
          src="./images/avatarSharpened.webp"
          alt="person"
          className={styles.avatar}
        />
      </section>
      <section className={styles.projects} id="projects">
        <Example />
        <div className={styles.line}></div>
      </section>
      <section className={styles.contact} id="contact">
        <h1>Contact Me</h1>
        <div className={styles.content}>
          <div className={styles.left}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="747.251"
              height="608.753"
              viewBox="0 0 747.251 608.753"
            >
              <g transform="translate(0)">
                <path
                  d="M515.7,705.883a22.9,22.9,0,0,1-21.775,5.5c-9.73-2.762-16.333-11.54-22.193-19.783l-17.342-24.376L469,669.9c10.51,1.927,21.28,3.95,30.433,9.464s16.484,15.359,15.9,26.028"
                  transform="translate(12.524 -132.218)"
                  fill="#e6e6e6"
                />
                <path
                  d="M481.272,737.281c-2.563-8.739-5.141-17.6-9.666-25.563-4.019-7.073-9.51-13.279-16.755-17.138a37.419,37.419,0,0,0-12.321-4.008c-1.124-.159-1.307,1.59-.188,1.749a35.575,35.575,0,0,1,19.788,9.731c5.985,5.856,9.91,13.4,12.813,21.174,1.757,4.7,3.175,9.511,4.586,14.323a.907.907,0,0,0,1,.736.885.885,0,0,0,.736-1Z"
                  transform="translate(60.535 -130.778)"
                  fill="#f2f2f2"
                />
                <path
                  d="M753.376,403.072a11.72,11.72,0,0,0-14.445,10.692l-40.095,11.271L715.2,439.2l35.567-12.876a11.783,11.783,0,0,0,2.613-23.256Z"
                  transform="translate(-493.783 -148.54)"
                  fill="#ffb7b7"
                />
                <path
                  d="M540.114,563.914H551.8l5.56-45.078h-17.25Z"
                  transform="translate(-383.553 32.018)"
                  fill="#ffb7b7"
                />
                <path
                  d="M771.763,736.159h37.684v-.477a14.668,14.668,0,0,0-14.667-14.667H771.762Z"
                  transform="translate(-618.182 -128.899)"
                  fill="#2f2e41"
                />
                <path
                  d="M604.615,563.914H616.3l5.56-45.078H604.614Z"
                  transform="translate(-516.537 32.018)"
                  fill="#ffb7b7"
                />
                <path
                  d="M836.264,736.159h37.684v-.477a14.668,14.668,0,0,0-14.667-14.667H836.264Z"
                  transform="translate(-751.166 -128.899)"
                  fill="#2f2e41"
                />
                <path
                  d="M621.335,317.958,638.551,437.2l-4.289,125.637L608.41,564.9l-8.084-112.672L579.748,389.4l-12.1,89.557-.5,83.882L540.458,564.9l-9.31-176.35L538,311.854Z"
                  transform="translate(-455.226 19.244)"
                  fill="#2f2e41"
                />
                <ellipse
                  cx="27.234"
                  cy="27.234"
                  rx="27.234"
                  ry="27.234"
                  transform="translate(89.083 123.08)"
                  fill="#ffb7b7"
                />
                <path
                  d="M855.411,344.8l30.067,151.47s-50.62,14.529-72.8,1.116-12.239-54.817-12.239-54.817l4.061-70.453,7.505-17.816,6.368-14.707Z"
                  transform="translate(-722.308 -152.437)"
                  fill="#cbcbcb"
                />
                <path
                  d="M782.237,452.184,771.851,341.727l8.306,6.064,29.042,9.432,1.988,77.766L831.5,537.253s-14.521,28.335-32.517-18.542Z"
                  transform="translate(-640.333 -152.305)"
                  fill="#2f2e41"
                />
                <path
                  d="M483.9,204.638l13.976-11.631,31.413,68.238,35.053-7.678,1.656,20.7-50.788,20.1L480.6,246.186Z"
                  transform="translate(-329.013 11.91)"
                  fill="#2f2e41"
                />
                <path
                  d="M654.846,264.9l-3.915-89.9L636.527,186.16,610.8,193.331l3.772,71.571-5.429,111.055,26.972,8.543,7.571-70.076Z"
                  transform="translate(-554.33 10.799)"
                  fill="#2f2e41"
                />
                <path
                  d="M907.106,493.542a11.72,11.72,0,0,0-15.6-8.931l-26.433-32.186-6.4,20.675,26.083,27.394a11.784,11.784,0,0,0,22.346-6.953Z"
                  transform="translate(-808.322 -145.474)"
                  fill="#ffb7b7"
                />
                <path
                  d="M689.516,202.245l-17.224-9.979-43.34,85.587,42.255,58.676,24.1-19.27-29.265-38.163L692.715,238.1Z"
                  transform="translate(-615.822 11.865)"
                  fill="#2f2e41"
                />
                <path
                  d="M821.4,285.264l-1.32-2.657,6.643-3.3s7.329-11.925,20.59-8.574,19.228,5.357,19.228,5.357l6.627,3.334-3.326,3.309,5.966,2.006-3.986,1.98,4.638,2.666-2.5,13.666s-4.147-10.365-12.119-6.4-22.554-2.048-22.554-2.048l-12.669,24.518s-2.614-8.595-7.273-6.3C819.349,312.814,807.444,293.856,821.4,285.264Z"
                  transform="translate(-730.697 -156.723)"
                  fill="#2f2e41"
                />
                <path
                  d="M255.41,322.019h.174l99.877,42.648,136.652,58.351a4.408,4.408,0,0,0,3.376.017l140.985-58.491L738.8,322.089l.156-.07h.174a6.1,6.1,0,0,1,6.09,6.09V592.591a6.1,6.1,0,0,1-6.09,6.09H255.41a6.1,6.1,0,0,1-6.09-6.09V328.109A6.1,6.1,0,0,1,255.41,322.019Z"
                  transform="translate(0.722 -153.521)"
                  fill="#fff"
                />
                <path
                  d="M253.878,333.553a.867.867,0,0,0,.5-.156L494.983,165.831a4.363,4.363,0,0,1,4.984.008L738.841,333.4a.87.87,0,0,0,1-1.425L500.966,164.415a6.109,6.109,0,0,0-6.977-.011L253.38,331.969a.87.87,0,0,0,.5,1.584Z"
                  transform="translate(1.82 -163.315)"
                  fill="#3f3d56"
                />
                <path
                  d="M476.7,175.758,248.745,6.817,19.063,187.778,237,316.974,355.321,290Z"
                  transform="translate(250.315 0.42)"
                  fill="#e6e6e6"
                />
                <path
                  d="M285.121,538.034H397.735a5.261,5.261,0,1,0,.016-10.522H285.121a5.261,5.261,0,0,0-.016,10.522Z"
                  transform="translate(310.526 -140.84)"
                  fill="#00c2ff"
                />
                <path
                  d="M285.122,516.728h40.4a5.261,5.261,0,0,0,.016-10.523H285.121a5.261,5.261,0,1,0-.016,10.522h.016Z"
                  transform="translate(382.737 -142.155)"
                  fill="#00c2ff"
                />
                <path
                  d="M488.913,432.267a6.579,6.579,0,0,0,2.5-.489l140.584-58.333V190.853a6.1,6.1,0,0,0-6.09-6.09H356.2a6.1,6.1,0,0,0-6.09,6.09V373.572l.264.113,135.965,58.064a6.625,6.625,0,0,0,2.572.518Z"
                  transform="translate(6.941 -161.992)"
                  fill="#00c2ff"
                />
                <path
                  d="M254.181,322.019h.174l99.877,42.648,136.652,58.351a4.407,4.407,0,0,0,3.376.017l140.985-58.49,102.33-42.456.156-.07h.174a6.1,6.1,0,0,1,6.09,6.09V592.591a6.1,6.1,0,0,1-6.09,6.09H254.181a6.1,6.1,0,0,1-6.09-6.09V328.109a6.1,6.1,0,0,1,6.09-6.09Zm-4.35,270.572a4.352,4.352,0,0,0,4.35,4.35H737.905a4.352,4.352,0,0,0,4.35-4.35V328.109a4.36,4.36,0,0,0-4.185-4.35L635.245,366.424,494.93,424.645a6.2,6.2,0,0,1-4.733-.026L354.233,366.555l-100.226-42.8a4.364,4.364,0,0,0-4.176,4.35Z"
                  transform="translate(3.256 -153.521)"
                  fill="#3f3d56"
                />
                <path
                  d="M374.526,249.858h95.7a6.96,6.96,0,1,0,0-13.92h-95.7a6.96,6.96,0,1,0,0,13.92Z"
                  transform="translate(143.214 -158.833)"
                  fill="#fff"
                />
                <path
                  d="M374.527,222h46.111a6.96,6.96,0,1,0,0-13.92h-46.11a6.96,6.96,0,1,0,0,13.92Z"
                  transform="translate(192.804 -160.553)"
                  fill="#fff"
                />
                <path
                  d="M413.016,315.413H559.177a6.96,6.96,0,0,0,0-13.92H413.016a6.96,6.96,0,0,0,0,13.92Z"
                  transform="translate(13.402 -154.788)"
                  fill="#fff"
                />
                <path
                  d="M413.015,345.733H559.177a6.96,6.96,0,1,0,0-13.92H413.015a6.96,6.96,0,0,0,0,13.92Z"
                  transform="translate(13.402 -152.917)"
                  fill="#fff"
                />
                <path
                  d="M687.971,736.438H967.2a1.062,1.062,0,0,0,0-2.123H687.971a1.062,1.062,0,0,0,0,2.123Z"
                  transform="translate(-686.909 -128.078)"
                  fill="#cbcbcb"
                />
                <path
                  d="M394.971,736.438H497.957a1.062,1.062,0,1,0,0-2.123H394.971a1.062,1.062,0,1,0,0,2.123Z"
                  transform="translate(93.417 -128.078)"
                  fill="#cbcbcb"
                />
                <path
                  d="M445.454,709.5a22.905,22.905,0,0,1-19.316-11.457c-4.951-8.819-3.443-19.7-1.786-29.677l4.893-29.512,8.473,12.206c6.094,8.778,12.3,17.807,14.9,28.171s.857,22.514-7.077,29.67"
                  transform="translate(108.052 -133.969)"
                  fill="#e6e6e6"
                />
                <path
                  d="M432.66,739.88c4.345-8,8.764-16.1,11.173-24.941,2.138-7.849,2.621-16.122.205-23.967a37.42,37.42,0,0,0-5.91-11.531c-.685-.9-2.048.206-1.367,1.107A35.574,35.574,0,0,1,443.93,701.4c.114,8.372-2.426,16.493-5.847,24.048-2.067,4.57-4.455,8.982-6.848,13.39a.907.907,0,0,0,.193,1.23.885.885,0,0,0,1.23-.193Z"
                  transform="translate(107.322 -131.485)"
                  fill="#f2f2f2"
                />
              </g>
            </svg>
          </div>
          <div className={styles.right}>
            <form>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label>First Name</label>
                  <input type="text" placeholder="First name..." required />
                </div>
                <div className={styles.col}>
                  <label>Last Name</label>
                  <input type="text" placeholder="Last name... " required />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label>Email address</label>
                  <input type="email" placeholder="Email address... " />
                </div>
                <div className={styles.col}>
                  <label>Organization</label>
                  <input type="text" placeholder="Organization... " />
                </div>
              </div>
              <textarea placeholder="Type a message..."></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
