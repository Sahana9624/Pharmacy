import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Cta.module.css";
import ctaImg from "../assets/images/cta.jpg";
import arrowUpRightIcon from "../assets/icons/arrow-up-right.svg";

export default function Cta({ onEnquireClick }) {
  return (
    <section className={styles.ctaSection} data-fade-container>
      <div className={styles.ctaCard}>
        <div className={styles.ctaGrid}>
          <div className={styles.ctaImageCol} data-fade-item data-fade-delay="0.10">
            <div className={styles.ctaImageFrame}>
              <img
                src={ctaImg}
                alt="Pharmacy Students Admission Guidance"
                className={styles.ctaImg}
              />
            </div>
          </div>

          <div className={styles.ctaTextCol}>
            <span className={styles.ctaBadge} data-fade-item data-fade-delay="0.15">Apply Now</span>
            <h2 className={styles.ctaTitle} data-fade-item data-fade-delay="0.20">
              Need Guidance for UG and PG Pharmacy Courses?
            </h2>
            <p className={styles.ctaSubtitle} data-fade-item data-fade-delay="0.25">
              Get complete information about admissions, curriculum, facilities, and practical training opportunities.
            </p>
            {onEnquireClick ? (
              <button onClick={onEnquireClick} className={styles.ctaBtn} data-fade-item data-fade-delay="0.30">
                <span className={styles.btnIcon} aria-hidden="true">
                  <span className={styles.arrowIcon} />
                </span>
                <span className={styles.btnText}>Enquire Now</span>
              </button>
            ) : (
              <Link to="/contact" className={styles.ctaBtn} data-fade-item data-fade-delay="0.30">
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
