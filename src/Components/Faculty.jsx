import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Faculty.module.css";
import herobg from "../assets/images/home-hero.jpg";
import nextIcon from "../assets/icons/next.svg";

// IMPORT AVAILABLE ASSETS & DEFAULT AVATARS
import principalImg from "../assets/images/faculty/principal.jpg";
import faculty1Img from "../assets/images/faculty/fac-1.png";
import faculty2Img from "../assets/images/faculty/fac-2.png";
import faculty3Img from "../assets/images/faculty/fac-3.png";
import faculty4Img from "../assets/images/faculty/fac-4.png";
import faculty5Img from "../assets/images/faculty/fac-5.jpg";
import faculty6Img from "../assets/images/faculty/fac-6.png";
import faculty7Img from "../assets/images/faculty/fac-7.jpg";
import faculty8Img from "../assets/images/faculty/fac-8.jpg";
import faculty9Img from "../assets/images/faculty/fac-9.jpg";
import faculty10Img from "../assets/images/faculty/fac-10.jpg";
import faculty11Img from "../assets/images/faculty/fac-11.jpg";
import faculty12Img from "../assets/images/faculty/fac-12.jpg";
import faculty13Img from "../assets/images/faculty/fac-13.png";
import faculty14Img from "../assets/images/faculty/fac-14.jpg";
import faculty15Img from "../assets/images/faculty/fac-15.jpg";
import faculty16Img from "../assets/images/faculty/fac-16.jpg";
import faculty17Img from "../assets/images/faculty/fac-17.jpg";
import faculty18Img from "../assets/images/faculty/fac-18.jpg";
import faculty19Img from "../assets/images/faculty/fac-19.jpg";


// CATEGORY 1: PRINCIPAL
const principalData = {
  name: "Dr.T.ShriVijaya Kirubha",
  role: "Principal",
  dept: "",
  img: principalImg,
};

// CATEGORY 2: HEAD OF DEPARTMENT (3 Members)
const hodList = [
  {
    id: "hod-1",
    name: "Dr. Punitha",
    role: "Head of Department",
    dept: "Department of pharmaceutics",
    img: faculty1Img,
  },
  {
    id: "hod-2",
    name: "Dr.T.Arokiasamy",
    role: "Professor",
    dept: "Department of Pharmacology",
    img: faculty2Img,
  },
  {
    id: "hod-3",
    name: "Mr.S.Pandian",
    role: "Associate Professor",
    dept: "Department of Pharmaceutical Chemistry",
    img: faculty3Img,
  },
];

// CATEGORY 3: ASSISTANT PROFESSORS AND LECTURERS (16 Members)
const facultyList = [
  {
    id: "f-1",
    name: "Mr.P.Selvaganesh",
    role: "Associate Professor",
    dept: "Department of Pharmaceutical Analysis",
    img: faculty4Img,
  },
  {
    id: "f-2",
    name: "Mr.P.Manoj Prabakar",
    role: "Associate Professor",
    dept: "Department of pharmaceutics",
    img: faculty5Img,
  },
  {
    id: "f-3",
    name: "Mr.P.Balasubramanian",
    role: "Associate Professor",
    dept: "Department of Pharmacognosy",
    img: faculty6Img,
  },
  {
    id: "f-4",
    name: "Mrs. Packialakshmi",
    role: "Associate Professor",
    dept: "Department of Pharmacology",
    img: faculty7Img,
  },
  {
    id: "f-5",
    name: "Mr. M.DhineshKumar",
    role: "Assistant Professor",
    dept: "Department of Pharmaceutical Analysis",
    img: faculty8Img,
  },
  {
    id: "f-6",
    name: "Mrs. K. Radhika",
    role: "Assistant Professor",
    dept: "Department of Pharmaceutical Analysis",
    img: faculty9Img,
  },
  {
    id: "f-7",
    name: "Mr. B. Manoharan",
    role: "Assistant Professor",
    dept: "Department of Pharmacology",
    img: faculty10Img,
  },
  {
    id: "f-8",
    name: "Mr.S.Dhilip Kumar",
    role: "Assistant Professor",
    dept: "Department of Pharmacy Practice",
    img: faculty11Img,
  },
  {
    id: "f-9",
    name: "Mrs.K.Kanista",
    role: "Assistant Professor",
    dept: "Department of Pharmacy Practice",
    img: faculty12Img,
  },
  {
    id: "f-10",
    name: "Mrs.S.Syed Rabiya",
    role: "Assistant Professor",
    dept: "Department of Pharmaceutics",
    img: faculty13Img,
  },
  {
    id: "f-11",
    name: "Ms.M.Swathi",
    role: "Assistant Professor",
    dept: "Department of Pharmaceutics",
    img: faculty14Img,
  },
  {
    id: "f-12",
    name: "Mr.M.Parthiban",
    role: "Assistant Professor",
    dept: "Department of Pharmaceutics",
    img: faculty15Img,
  },
  {
    id: "f-13",
    name: "Ms.A.Kiruthika",
    role: "Lecturer",
    dept: "",
    img: faculty16Img,
  },
  {
    id: "f-14",
    name: "Mr.S.Devarajan",
    role: "Lecturer",
    dept: "",
    img: faculty17Img,
  },
  {
    id: "f-15",
    name: "Ms.P. Felcia",
    role: "Lecturer",
    dept: "",
    img: faculty18Img,
  },
  // {
  //   id: "f-16",
  //   name: "Mr. C. Selvanathan",
  //   role: "Lecturer",
  //   dept: "",
  //   img: faculty19Img,
  // },
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export default function Faculty() {
  return (
    <main className={styles.facultyPage}>
      {/* 1. HERO HEADER WITH FLOATING WHITE CARD */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgWrapper}>
          <img src={herobg} alt="Mother Terasa College Building" className={styles.heroBg} />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroCardContainer}>
          <div className={styles.heroCard}>
            <h1 className={styles.heroTitle}>Faculty</h1>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
              <span className={styles.breadcrumbCurrent}>Faculty</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. FACULTY CONTENT SECTION */}
      <section className={styles.facultyContentSection}>
        <div className={styles.container}>
          
          {/* CATEGORY 1: PRINCIPAL */}
          <div className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle} data-fade data-fade-delay="0">Principal</h2>
            <div className={styles.singleCardWrapper} data-fade-container>
              <div className={styles.facultyCard} data-fade-item data-fade-delay="0">
                <div className={styles.imgBox}>
                  <img src={principalData.img} alt={principalData.name} className={styles.facultyImg} />
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.memberName}>{principalData.name}</h3>
                  <p className={styles.memberRole}>{principalData.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CATEGORY 2: HEAD OF DEPARTMENT */}
          <div className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle} data-fade data-fade-delay="0">Head of Department</h2>
            <div className={styles.gridThree} data-fade-container>
              {hodList.map((item, idx) => (
                <div
                  key={item.id}
                  className={styles.facultyCard}
                  data-fade-item
                  data-fade-delay={(idx * 0.15).toFixed(2)}
                >
                  <div className={styles.imgBox}>
                    <img src={item.img} alt={item.name} className={styles.facultyImg} />
                  </div>
                  <div className={styles.cardInfo}>
                    <h3 className={styles.memberName}>{item.name}</h3>
                    <p className={styles.memberRole}>{item.role}</p>
                    {item.dept && <p className={styles.memberDept}>{item.dept}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY 3: ASSISTANT PROFESSORS AND LECTURERS */}
          <div className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle} data-fade data-fade-delay="0">Assistant Professors and Lecturers</h2>
            {chunkArray(facultyList.slice(0, 15), 3).map((row, rIdx) => (
              <div
                key={`faculty-row-${rIdx}`}
                className={styles.gridThree}
                data-fade-container
                style={{ marginBottom: rIdx < 4 ? "clamp(1.5rem, 3vw, 2.5rem)" : "0" }}
              >
                {row.map((item, idx) => (
                  <div
                    key={item.id}
                    className={styles.facultyCard}
                    data-fade-item
                    data-fade-delay={(idx * 0.15).toFixed(2)}
                  >
                    <div className={styles.imgBox}>
                      <img src={item.img} alt={item.name} className={styles.facultyImg} />
                    </div>
                    <div className={styles.cardInfo}>
                      <h3 className={styles.memberName}>{item.name}</h3>
                      <p className={styles.memberRole}>{item.role}</p>
                      {item.dept && <p className={styles.memberDept}>{item.dept}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ))}

            {/* LAST FACULTY MEMBER CENTERED BELOW GRID */}
            {facultyList.length > 15 && (
              <div className={styles.singleCardWrapper} style={{ marginTop: "clamp(1.5rem, 3vw, 2.5rem)" }} data-fade-container>
                {facultyList.slice(15).map((item, idx) => (
                  <div
                    key={item.id}
                    className={styles.facultyCard}
                    data-fade-item
                    data-fade-delay={(idx * 0.15).toFixed(2)}
                  >
                    <div className={styles.imgBox}>
                      <img src={item.img} alt={item.name} className={styles.facultyImg} />
                    </div>
                    <div className={styles.cardInfo}>
                      <h3 className={styles.memberName}>{item.name}</h3>
                      <p className={styles.memberRole}>{item.role}</p>
                      {item.dept && <p className={styles.memberDept}>{item.dept}</p>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
