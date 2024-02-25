import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gashaw Fentaye</h1>
        <p className={styles.description}>
          I am a passionate and dedicated full stack developer with
          expertise in building robust web applications using various
          technologies. With experience in Django, MERN Stack, and Laravel.
        </p>
        <a href="mailto:gashawfenaye0@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
