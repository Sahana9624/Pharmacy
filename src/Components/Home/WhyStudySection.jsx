import React from "react";
import styles from "../../Styles/Home/WhyStudySection.module.css";
import buildingImg from "../../assets/images/why-clg.jpg";

import industryIcon from "../../assets/icons/industry.svg";
import handsOnIcon from "../../assets/icons/settings.svg";
import careerIcon from "../../assets/icons/mortarboard.svg";
import infraIcon from "../../assets/icons/building.svg";
import facultyIcon from "../../assets/icons/user-star.svg";

const whyStudyFeatures = [
  {
    title: "Industry-Relevant Programs",
    desc: "Undergraduate courses designed to meet current industry standards and future demands.",
    icon: industryIcon,
  },
  {
    title: "Hands-on Learning",
    desc: "Gain practical experience through labs, real-world projects, and internship opportunities.",
    icon: handsOnIcon,
  },
  {
    title: "Career & Placement Support",
    desc: "Comprehensive training and placement assistance to help you build a successful career.",
    icon: careerIcon,
  },
  {
    title: "Modern Infrastructure & Facilities",
    desc: "Comprehensive training and placement assistance to help you build a successful career.",
    icon: infraIcon,
  },
  {
    title: "Expert Faculty & Mentorship",
    desc: "Learn from experienced educators and industry professionals who guide your academic journey.",
    icon: facultyIcon,
  },
];

export default function WhyStudySection() {
  return (
    <section className={styles.whySection}>
      <div className={styles.whyHeader} data-fade data-fade-delay="0">
        <h2 className={styles.whyTitle}>
          Why Study at <span className={styles.highlightBlue}>Mother Terasa College of Pharmacy</span>
        </h2>
        <p className={styles.whySubtitle}>
          Discover a dynamic learning environment that fosters professional growth, clinical expertise, research skills, and lifelong success.
        </p>
      </div>

      <div className={styles.whyGrid}>
        <div className={styles.whyImageCol} data-fade data-fade-delay="0.4">
          <div className={styles.buildingImageCard}>
            <img src={buildingImg} alt="Mother Terasa College of Pharmacy Building" className={styles.buildingImg} />
          </div>
        </div>

        <div className={styles.whyFeaturesCol} data-fade-container>
          {whyStudyFeatures.map((feat, index) => (
            <div
              className={styles.featureItem}
              key={feat.title}
              data-fade-item
              data-fade-delay={(index * 0.15).toFixed(2)}
            >
              <div className={styles.featureIconBox}>
                <img src={feat.icon} alt="" className={styles.featureIconSvg} />
              </div>
              <div className={styles.featureText}>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
