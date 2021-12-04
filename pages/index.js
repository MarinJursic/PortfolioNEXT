import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import github from "../public/images/github.png";
import linkedin from "../public/images/linkedin.png";
import mail from "../public/images/mail.png";
import computerTyping from "../public/images/ComputerTyping.svg";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marin Jursic</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.landing}>
        <div className={styles.header}>
          <nav className={styles.navbar}>
            <h2>
              <a href="#">Marin</a>
            </h2>
            <ul className={styles.buttons}>
              <li>
                <a href="#" aria-label="home">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" aria-label="about">
                  About
                </a>
              </li>
              <li>
                <a href="#skill" aria-label="skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" aria-label="projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" aria-label="contact">
                  Contact
                </a>
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
                  <Image src={github} alt="github" width={40} height={40} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marin-jur%C5%A1i%C4%87-b08bbb212/"
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
                  <Image src={mail} alt="email" width={40} height={40} />
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
          />
        </section>
        <a href="#about" aria-label="about">
          <div className={styles.scrollDown}></div>
        </a>
      </section>
      <section className={styles.about} id="about">
        <div className={styles.split}>
          <div>
            <Image
              src={computerTyping}
              alt="About me image"
              width={1550}
              height={1550}
            />
          </div>
          <div>
            <h1>About Me</h1>
            <p>
              I'm a dedicated, hard-working and highly motivated full stack web
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
    </div>
  );
}
