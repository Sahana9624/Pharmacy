import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Committee.module.css";
import herobg from "../assets/images/home-hero.jpg";
import Cta from "./Cta";
import studentImg from "../assets/images/hero-students.jpg";
import AdmissionsModal from "./AdmissionsModal";
import nextIcon from "../assets/icons/next.svg";

const committeeMembers = [
  { sNo: 1, name: "Dr. T. Shri Vijaya Kirubha", designation: "Principal", nominatedAs: "Chairman" },
  { sNo: 2, name: "Dr. Punitha", designation: "Professor", nominatedAs: "Co-ordinator" },
  { sNo: 3, name: "Mr. P. Selvaganesh", designation: "Associate Professor", nominatedAs: "Member" },
  { sNo: 4, name: "Mrs. A. Gayathri", designation: "Associate Professor", nominatedAs: "Member" },
  { sNo: 5, name: "Ms. A. Kiruthika", designation: "Lecturer", nominatedAs: "Chairman" },
  { sNo: 6, name: "Mrs. K. Sudha", designation: "Computer Assistant", nominatedAs: "Chairman" },
  { sNo: 7, name: "Ms. Vasunthra", designation: "B.Pharm IV year", nominatedAs: "Student Representative" },
  { sNo: 8, name: "Ms. Harini", designation: "B.Pharm IV year", nominatedAs: "Student Member" },
  { sNo: 9, name: "Ms. Pratheesha", designation: "B.Pharm III year", nominatedAs: "Student Member" },
  { sNo: 10, name: "Ms. Abinaya", designation: "B.Pharm II year", nominatedAs: "Student Member" },
  { sNo: 11, name: "Mr. Nakeeran", designation: "Advocate", nominatedAs: "External Member" },
];

const objectivesList = [
  "To fulfill the directive of the Supreme Court, as per UGC directives in respect of implementing a policy against sexual harassment in the institution.",
  "To evolve a mechanism for the prevention and redressal of sexual harassment cases and other acts of gender based violence in the institution",
  "To provide an environment free of gender-based discrimination.",
  "To promote a social and psychological environment that will raise awareness about sexual harassment in its various forms.",
];

export default function Committee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.committeePage}>
      {/* 1. HERO HEADER WITH FLOATING WHITE CARD */}
      <section className={styles.heroSection}>
        <img src={herobg} alt="Mother Terasa College Building" className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroCardContainer}>
          <div className={styles.heroCard}>
            <h1 className={styles.heroTitle}>POSH COMMITTEE</h1>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
              <span className={styles.breadcrumbCurrent}>COMMITTEE</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. MAIN COMMITTEE CONTENT */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          
          {/* INTRODUCTORY TITLE & PARAGRAPH */}
          <div className={styles.introBlock}>
            <h2 className={styles.sectionTitle}>
              PREVENTION OF SEXUAL HARASSMENT (POSH) COMMITTEE
            </h2>
            <p className={styles.introParagraph}>
              The POSH(Prevention Of Sexual Harassment)- Internal committee is established in our college compliance with the Sexual Harassment of Women (Prevention, Prohibition and Redressal) Act, 2013. Under the chairpersonship of the Principal and comprising senior faculty members, this committee is dedicated to creating a safe and secure environment free from sexual harassment for all students, faculty, and staff. The committee ensures prompt investigation of complaints, maintains strict confidentiality, and takes appropriate preventive and corrective measures while promoting awareness about rights and responsibilities regarding workplace harassment.
            </p>
          </div>

          {/* 4 SEPARATE VERTICAL COLUMN CARDS */}
          <div className={styles.tableWrapper}>
            <div className={styles.columnsGrid}>
              {/* COLUMN 1: S.NO */}
              <div className={`${styles.columnCard} ${styles.colCardSno}`}>
                <div className={`${styles.columnHeader} ${styles.columnHeaderCenter}`}>S.NO</div>
                {committeeMembers.map((row) => (
                  <div key={row.sNo} className={`${styles.columnCell} ${styles.columnCellCenter}`}>
                    {row.sNo}
                  </div>
                ))}
              </div>

              {/* COLUMN 2: NAME */}
              <div className={`${styles.columnCard} ${styles.colCardName}`}>
                <div className={styles.columnHeader}>NAME</div>
                {committeeMembers.map((row) => (
                  <div key={row.sNo} className={styles.columnCell}>
                    {row.name}
                  </div>
                ))}
              </div>

              {/* COLUMN 3: DESIGNATION */}
              <div className={`${styles.columnCard} ${styles.colCardDesig}`}>
                <div className={styles.columnHeader}>DESIGNATION</div>
                {committeeMembers.map((row) => (
                  <div key={row.sNo} className={styles.columnCell}>
                    {row.designation}
                  </div>
                ))}
              </div>

              {/* COLUMN 4: NOMINATED AS */}
              <div className={`${styles.columnCard} ${styles.colCardNom}`}>
                <div className={styles.columnHeader}>NOMINATED AS</div>
                {committeeMembers.map((row) => (
                  <div key={row.sNo} className={styles.columnCell}>
                    {row.nominatedAs}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OBJECTIVES SECTION */}
          <div className={styles.objectivesBlock}>
            <h3 className={styles.objectivesTitle}>OBJECTIVES</h3>
            <ul className={styles.objectivesList}>
              {objectivesList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* EMAIL CONTACT BLOCK */}
          <div className={styles.emailBlock}>
            <h4 className={styles.emailLabel}>Email</h4>
            <a href="mailto:mtcpcarebox25@gmail.com" className={styles.emailLink}>
              mtcpcarebox25@gmail.com
            </a>
          </div>
        </div>
      </section>
       {/* CTA */}
              <Cta />
    </main>
  );
}
