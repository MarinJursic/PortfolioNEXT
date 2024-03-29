/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useState, useEffect } from "react";

const Landing = dynamic(() => import("../components/Landing"));
const SideMenu = dynamic(() => import("../components/SideMenu"));
const About = dynamic(() => import("../components/About"));
const Technologies = dynamic(() => import("../components/Technologies"));
const Projects = dynamic(() => import("../components/Projects"));
const Contact = dynamic(() => import("../components/Contact"));

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
    <>
      <Head>
        <title>Marin Jursic | Personal Portfolio</title>
        <meta name="description" content="Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideMenu
        scrollPosition={scrollPosition}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Landing />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}
