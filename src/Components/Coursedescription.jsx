import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../Styles/Coursedescription.module.css";
import CourseApplicationModal from "./CourseApplicationModal";
import { coursesData } from "../data/coursesData";

import defaultHeroImg from "../assets/images/hero-students.jpg";
import defaultOverviewImg from "../assets/images/lab-1.jpg";
import nextIcon from "../assets/icons/next.svg";

export default function CourseDescription() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { courseSlug } = useParams();

  const course = coursesData[courseSlug] || coursesData["b-pharm"];

  return (
    <>
      <main className={styles.course}>
        {/* HERO */}
        <section className={styles.hero}>
          <img
            src={course.heroImg || defaultHeroImg}
            alt={course.title}
            className={styles["hero__bg"]}
          />
          <div className={styles["hero__overlay"]} />

          {/* HEADER CARD */}
          <div className={styles["header-card"]}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
              <Link to="/academics">Academics</Link>
              <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
              <span className={styles["breadcrumb__current"]}>{course.shortTitle}</span>
            </nav>

            <h1>{course.title}</h1>

            <div className={styles["header-card__meta"]}>
              <span>{course.duration}</span>
              <span>{course.approval}</span>
            </div>

            <button onClick={() => setIsModalOpen(true)} className={styles["apply-btn"]}>
              Apply Now
            </button>
          </div>
        </section>

        {/* COURSE DETAILS */}
        <section className={styles["details-section"]}>
          <div className={styles["details-grid"]}>
            <img
              src={course.overviewImg || defaultOverviewImg}
              alt={`${course.title} Laboratory & Practical Training`}
              className={styles["details-grid__img"]}
              data-fade
              data-fade-delay="0.0"
            />

            <div className={styles["details-grid__content"]}>
              <div data-fade data-fade-delay="0.15">
                <h2>Course Overview</h2>
                <ul className={styles["bullet-list"]}>
                  <li>{course.overview}</li>
                </ul>
              </div>

              <div data-fade-container style={{ marginTop: "2rem" }}>
                <h2 data-fade data-fade-delay="0.0">Career Opportunities</h2>
                <ul className={styles["bullet-list"]}>
                  {course.careerOpportunities.map((item, idx) => (
                    <li
                      key={item}
                      data-fade-item
                      data-fade-delay={(0.15 + idx * 0.15).toFixed(2)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div data-fade-container style={{ marginTop: "2rem" }}>
                <h2 data-fade data-fade-delay="0.0">Eligibility Criteria</h2>
                <ul className={styles["bullet-list"]}>
                  {course.eligibility.map((item, idx) => (
                    <li
                      key={item}
                      data-fade-item
                      data-fade-delay={(0.15 + idx * 0.15).toFixed(2)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CourseApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={course.title}
        courseDuration={course.duration}
      />
    </>
  );
}