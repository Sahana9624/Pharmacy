import React from "react";
import styles from "../../Styles/About/ExcellenceSection.module.css";
import missionImg from "../../assets/images/purpose-1.jpg";
import founderImg from "../../assets/images/purpose-2.jpg";

export default function ExcellenceSection() {
  return (
    <section className={styles.excellenceSection}>
      <div className={styles.excellenceHeader}>
        <h2 className={styles.excellenceTitle}>
          Over 8 Years of Excellence in Pharmaceutical Education
        </h2>
        <p className={styles.excellenceSubtitle}>
          Our commitment to academic excellence empowers students to excel in the ever-evolving healthcare and pharmaceutical industry.
        </p>
      </div>

      <div className={styles.purposeBlueCard}>
        <div className={styles.purposeGlassWrapper}>
          {/* TOP CLASSROOM BANNER IMAGE */}
          <div className={styles.purposeBannerWrapper}>
            <img
              src={missionImg}
              alt="Pharmacy Students Classroom"
              className={styles.purposeBannerImg}
            />
          </div>

          {/* OUR PURPOSE BLOCK */}
          <div className={styles.purposeTextBlock}>
            <span className={styles.purposeYellowEyebrow}>Our Purpose</span>
            <h2 className={styles.purposeMainTitle}>Mother Terasa College Of Pharmacy</h2>
            <p className={styles.purposeDesc}>
              Established in 2018 in the Campus of Mother Terasa Group of Institutions and presently offers the 4-year degree programme B. Pharm and 2-year Diploma, D.Pharm. The B. Pharm course is affiliated to The Tamilnadu Dr. MGR Medical University, Chennai and approved by Pharmacy Council of India, New Delhi and All India Council of Technical Education, New Delhi. The D. Pharm is approved by the Pharmacy Council of India, New Delhi and affiliated by the Directorate of Medical Education, Chennai.
            </p>
            <p className={styles.purposeDesc}>
              Mother Terasa Group of Educational Institutions is multifaceted institution known for its contribution in diversified educational channels such as Engineering, BNYS, Health Inspector, Arts &amp; Science, Law, Polytechnic, Nursing, Pharmacy, Catering, Teacher Education, DMLT, Physical Education and Higher Secondary Education and bestowed with 137 acres having state-of-the-art infrastructure facilities.
            </p>
          </div>

          {/* MISSION AND VISION GRID */}
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionVisionImageWrapper}>
              <img
                src={founderImg}
                alt="Pharmacy Laboratory Research"
                className={styles.missionVisionImg}
              />
            </div>

            <div className={styles.missionVisionContent}>
              <div className={styles.missionBlock}>
                <h3 className={styles.mvTitle}>Our Mission</h3>
                <p className={styles.mvDesc}>
                  Our mission is to empower students through high-quality education, advanced learning technologies, and practical skill development while fostering self-directed growth, entrepreneurship, and critical thinking. We strive to create greater opportunities for students by nurturing inquisitive minds and preparing graduates with the knowledge, confidence, and abilities needed to contribute meaningfully to healthcare and society.
                </p>
              </div>

              <div className={styles.visionBlock}>
                <h3 className={styles.mvTitle}>Our Vision</h3>
                <p className={styles.mvDesc}>
                  To evolve as a Center of Excellence by imparting quality education that nurtures knowledge, skills, and professional competence. We strive to develop highly capable healthcare professionals who demonstrate credibility, compassion, and clinical excellence. Our vision is to foster integrity, nobility, and ethical values in every student while encouraging lifelong learning and innovation. Through holistic education, we aim to prepare responsible individuals who contribute meaningfully to society and the advancement of healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
