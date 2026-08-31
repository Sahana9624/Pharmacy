import React, { useState, useEffect } from "react";
import styles from "../../Styles/Facilities/HeroSection.module.css";

import herobg from "../../assets/images/facility-hero.jpg";
import heroBadgeIcon from "../../assets/icons/hero-badge.svg";
import scrollTextIcon from "../../assets/icons/scroll-text-1.svg";
import labImg1 from "../../assets/images/lab-1.jpg";
import arrowUpRightIcon from "../../assets/icons/arrow-up-right.svg";

const tagList = [
  "Healthcare Leadership",
  "Academic Excellence",
  "Practical Learning",
  "Clinical Excellence",
];

export default function HeroSection() {
  const [tagIndex, setTagIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setTagIndex((prev) => (prev + 1) % tagList.length);
        setIsExiting(false);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.heroSection}>
      <img src={herobg} alt="Mother Terasa College Building" className={styles.heroBg} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* LEFT CONTENT */}
          <div className={styles.heroText}>
            <span className={styles.heroTag}>
              <span className={styles.heroTagTextWrapper}>
                <span
                  key={tagIndex}
                  className={`${styles.heroTagText} ${isExiting ? styles.heroTagTextExiting : styles.heroTagTextEntering}`}
                >
                  {tagList[tagIndex]}
                </span>
              </span>
            </span>
            <h1>Modern Facilities for Future Healthcare Professionals</h1>
            <p>
              Industry-focused courses designed to equip students with clinical expertise, practical knowledge, and career-ready healthcare skills.
            </p>
            <div className={styles.ctaGroup}>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => {
                  const el = document.getElementById("facilities-accordion");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className={styles.btnIcon} aria-hidden="true">
                  <span className={styles.arrowIcon} />
                </span>
                <span className={styles.btnText}>Explore Facilities</span>
              </button>
            </div>
          </div>

          {/* RIGHT PICTURE CONTAINER CARD WITH ROTATING BADGE */}
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageCard}>
              <img
                src={labImg1}
                alt="Mother Terasa Pharmacy Students Facilities Lab"
                className={styles.heroImg}
              />

              {/* ROTATING BADGE */}
              <div className={styles.heroBadge}>
                <div className={styles.heroBadgeText}>
                  <img src={scrollTextIcon} alt="8+ Years of Experience in Pharmacy" />
                </div>
                <div className={styles.heroBadgeCenter}>
                  <img src={heroBadgeIcon} alt="Pharmacy Badge Icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
