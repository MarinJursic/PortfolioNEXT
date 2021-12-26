import React from 'react'
import dynamic from 'next/dynamic';
import styles from '../styles/projects.module.css';

const Example = dynamic(() => import("../components/Example"));

function Projects() {
    return (
        <section className={styles.projects} id="projects">
        <Example />
        <div className={styles.line}></div>
      </section>
    )
}

export default Projects
