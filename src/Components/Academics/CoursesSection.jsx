import { Link } from "react-router-dom";
import styles from "../../Styles/Academics/CoursesSection.module.css";

const coursesList = [
  {
    id: 1,
    slug: "d-pharm",
    title: "D.Pharm",
    subtitle: "Diploma in Pharmacy",
    duration: "Duration - 2 Years",
  },
  {
    id: 2,
    slug: "b-pharm",
    title: "B.Pharm",
    subtitle: "Bachelor of Pharmacy",
    duration: "Duration - 4 Years",
  },
  {
    id: 3,
    slug: "m-pharm",
    title: "M.Pharm",
    subtitle: "Master of Pharmacy",
    duration: "Duration - 2 Years",
  },
  {
    id: 4,
    slug: "b-pharm-lateral",
    title: "B.Pharm (Lateral Entry)",
    subtitle: "Bachelor of Pharmacy",
    duration: "Duration - 3 Years",
  },
  {
    id: 5,
    slug: "pharm-d",
    title: "Pharm.D",
    subtitle: "Doctor of Pharmacy",
    duration: "Duration - 6 Years",
  },
];

export default function CoursesSection() {
  return (
    <section className={styles.coursesSection} id="courses-section">
      <div className={styles.coursesWrapper}>
        <div className={styles.coursesContainer}>
          {/* SECTION HEADER */}
          <div className={styles.sectionHeader}>
            <h2>Explore Our Courses</h2>
            <p>
              Industry-focused pharmacy programs designed to build clinical
              knowledge, practical skills, and professional excellence.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className={styles.cardsGrid}>
            {/* TOP ROW: 3 CARDS */}
            <div className={styles.topRow}>
              {coursesList.slice(0, 3).map((course) => (
                <Link
                  to={`/course-description/${course.slug}`}
                  className={styles.courseCard}
                  key={course.id}
                  style={{ textDecoration: 'none' }}
                >
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardSubtitle}>{course.subtitle}</p>
                  <p className={styles.cardDuration}>{course.duration}</p>
                  <span className={styles.applyBtn}>
                    Explore Course
                  </span>
                </Link>
              ))}
            </div>

            {/* BOTTOM ROW: 2 CARDS CENTERED */}
            <div className={styles.bottomRow}>
              {coursesList.slice(3, 5).map((course) => (
                <Link
                  to={`/course-description/${course.slug}`}
                  className={styles.courseCard}
                  key={course.id}
                  style={{ textDecoration: 'none' }}
                >
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardSubtitle}>{course.subtitle}</p>
                  <p className={styles.cardDuration}>{course.duration}</p>
                  <span className={styles.applyBtn}>
                    Explore Course
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
