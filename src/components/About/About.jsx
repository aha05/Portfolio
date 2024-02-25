import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Strong knowledge of HTML, CSS, JavaScript, and related frontend frameworks/libraries (Bootstrap, React.js)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Proficient in Django, MERN Stack, and Laravel
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Database</h3>
              <p>
                Experience with database management systems including MySQL, MongoDB
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Others</h3>
              <p>
                Familiarity with version control systems like Git and Github
              </p>
              <p>
                Excellent problem-solving and debugging skills
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
