import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Home/HandsOnSection.module.css";
import labImg1 from "../../assets/images/lab-1.jpg";
import labImg2 from "../../assets/images/lab-2.jpg";
import arrowUpRightIcon from "../../assets/icons/arrow-up-right.svg";

export default function HandsOnSection() {
  return (
    <section className={styles.handsonSection}>
      <div className={styles.handsonHeader}>
        <h2 className={styles.handsonTitle}>
          Hands-On Learning for Real Healthcare Environments
        </h2>
        <p className={styles.handsonSubtitle}>
          Gain real-world clinical exposure and hands-on training through advanced labs, simulations, and healthcare-based practical sessions.
        </p>
      </div>

      <div className={styles.handsonGrid}>
        {/* ROW 1: SEPARATE DEDICATED STYLES FOR FIRST ROW */}
        <div className={styles.rowOne}>
          <div className={styles.rowOneImageWrapper}>
            <img src={labImg1} alt="Learn Through Practical Experience" className={styles.rowOneImg} />
          </div>
          <div className={styles.rowOneContent}>
            <h3 className={styles.rowOneTitle}>Learn Through Practical Experience</h3>
            <p className={styles.rowOneDesc}>
              Engage in interactive training, practical sessions, and real-world applications that prepare you for a successful pharmacy career
            </p>
            <Link to="/facilities" className={styles.knowMoreLink}>
              <span className={styles["arrow-icon"]} aria-hidden="true" />
              <span>Know more</span>
            </Link>
          </div>
        </div>

        {/* ROW 2: SEPARATE DEDICATED STYLES FOR SECOND ROW */}
        <div className={styles.rowTwo}>
          <div className={styles.rowTwoContent}>
            <h3 className={styles.rowTwoTitle}>Scholarships for Students</h3>
            <p className={styles.rowTwoDesc}>
              Empowering talented students with opportunities to achieve their healthcare education goals through accessible scholarship programs.
            </p>
          </div>
          <div className={styles.rowTwoImageWrapper}>
            <img src={labImg2} alt="Scholarships for Students" className={styles.rowTwoImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
