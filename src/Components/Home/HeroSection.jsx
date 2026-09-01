import React from "react";
import styles from "../../Styles/Home/HeroSection.module.css";
import studentImg from "../../assets/images/hero-students.jpg";
import herobg from "../../assets/images/home-hero.jpg";
import heroBadgeIcon from "../../assets/icons/hero-badge.svg";
import scrollTextIcon from "../../assets/icons/scroll-text-1.svg";
import arrowUpRightIcon from "../../assets/icons/arrow-up-right.svg";

import { Link } from "react-router-dom";

export default function HeroSection({ setAdmissionsModalOpen }) {
  return (
    <section className={styles.heroSection}>
      <img src={herobg} alt="Mother Terasa College Building" className={styles.heroBg} />
      <div className={styles.heroOverlay} />

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* LEFT CONTENT */}
          <div className={styles.heroText}>
            <h1>Mother Terasa College Of Pharmacy</h1>
            <p>
              Industry-focused courses designed to equip students with clinical expertise, practical knowledge, and career-ready healthcare skills.
            </p>
            <div className={styles.ctaGroup}>
              {/* DESKTOP CTA BUTTON */}
              <Link
                to="/academics"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.desktopCtaBtn}`}
              >
                <span className={styles.btnIcon} aria-hidden="true">
                  <span className={styles.arrowIcon} />
                </span>
                <span className={styles.btnText}>Explore Programs</span>
              </Link>

              {/* MOBILE CTA BUTTONS (MATCHING REFERRAL DESIGN) */}
              <div className={styles.mobileCtaGroup}>
                <Link to="/academics" className={styles.mobileEnquireBtn}>
                  <span className={styles.mobileEnquireIcon} aria-hidden="true">
                    <span className={styles.arrowIcon} />
                  </span>
                  <span>Explore Programs</span>
                </Link>

                <button
                  type="button"
                  className={styles.mobileApplyBtn}
                  onClick={() => setAdmissionsModalOpen?.(true)}
                >
                  Admissions
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PICTURE CONTAINER CARD WITH ROTATING BADGE */}
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageCard}>
              <img src={studentImg} alt="Mother Terasa Pharmacy Students" className={styles.heroImg} />

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
