import React from "react";
import styles from "../../Styles/About/HeroSection.module.css";

import aboutHeroImg from "../../assets/images/about-img.jpg";
import herobg from "../../assets/images/home-hero.jpg";
import heroBadgeIcon from "../../assets/icons/hero-badge.svg";
import scrollTextIcon from "../../assets/icons/scroll-text-1.svg";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <img src={herobg} alt="Mother Terasa College Building" className={styles.heroBg} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* LEFT CONTENT */}
          <div className={styles.heroText}>
            <h1>About Mother Terasa College of Pharmacy</h1>
            <p>
              we are committed to delivering quality education, practical training, and research-driven learning that prepares students for successful careers in healthcare and pharmaceutical sciences.
            </p>
          </div>

          {/* RIGHT PICTURE CONTAINER CARD WITH ROTATING BADGE */}
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageCard}>
              <img
                src={aboutHeroImg}
                alt="Mother Terasa Pharmacy Student"
                className={`${styles.heroImg} ${styles.aboutHeroImg}`}
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
