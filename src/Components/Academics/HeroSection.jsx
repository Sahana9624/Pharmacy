import React from "react";
import styles from "../../Styles/Academics/HeroSection.module.css";

import herobg from "../../assets/images/home-hero.jpg";
import labStudentImg from "../../assets/images/admission-modal.jpg";
import studentAvatar from "../../assets/images/about-img.jpg";
import scrollTextIcon from "../../assets/icons/scroll-text-2.svg";
import arrowUpRightIcon from "../../assets/icons/arrow-up-right.svg";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <img
        src={herobg}
        alt="Mother Terasa College Building"
        className={styles.heroBg}
      />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* LEFT CONTENT */}
          <div className={styles.heroText}>
            <h1>Explore Our Pharmacy Programs</h1>
            <p>
              Industry-focused courses designed to equip students with clinical
              expertise, practical knowledge, and career-ready healthcare
              skills.
            </p>
            <div className={styles.ctaGroup}>
              <a
                href="#courses-section"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("courses-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                <span className={styles.btnIcon} aria-hidden="true">
                  <span className={styles.arrowIcon} />
                </span>
                <span className={styles.btnText}>Explore Programs</span>
              </a>
            </div>
          </div>

          {/* RIGHT PICTURE CONTAINER CARD WITH ROTATING BADGE */}
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageCard}>
              <img
                src={labStudentImg}
                alt="Pharmacy Lab Student"
                className={styles.heroImg}
              />

              {/* ROTATING BADGE */}
              <div className={styles.heroBadge}>
                <div className={styles.heroBadgeText}>
                  <img src={scrollTextIcon} alt="Leading Pharmaceutical Education" />
                </div>
                <div className={styles.heroBadgeCenter}>
                  <img
                    src={studentAvatar}
                    alt="Leading Pharmaceutical Education"
                    className={styles.badgeAvatar}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
