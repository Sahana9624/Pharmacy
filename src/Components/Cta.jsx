import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Cta.module.css";
import ctaImg from "../assets/images/cta.jpg";
import arrowUpRightIcon from "../assets/icons/arrow-up-right.svg";

export default function Cta({ onEnquireClick }) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaCard}>
        <div className={styles.ctaGrid}>
          <div className={styles.ctaImageCol}>
            <div className={styles.ctaImageFrame}>
              <img
                src={ctaImg}
                alt="Pharmacy Students Admission Guidance"
                className={styles.ctaImg}
              />
            </div>
          </div>

          <div className={styles.ctaTextCol}>
            <span className={styles.ctaBadge}>Apply Now</span>
            <h2 className={styles.ctaTitle}>
              Need Guidance for UG and PG Pharmacy Courses?
            </h2>
            <p className={styles.ctaSubtitle}>
              Get complete information about admissions, curriculum, facilities, and practical training opportunities.
            </p>
            {onEnquireClick ? (
              <button onClick={onEnquireClick} className={styles.ctaBtn}>
                <span className={styles.btnIcon} aria-hidden="true">
                  <span className={styles.arrowIcon} />
                </span>
                <span className={styles.btnText}>Enquire Now</span>
              </button>
            ) : (
              <Link to="/contact" className={styles.ctaBtn}>
                <span className={styles.btnIcon} aria-hidden="true">
                  <span className={styles.arrowIcon} />
                </span>
                <span className={styles.btnText}>Enquire Now</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
