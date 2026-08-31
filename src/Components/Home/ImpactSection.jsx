import React from "react";
import styles from "../../Styles/Home/ImpactSection.module.css";

const stats = [
  { value: "4+", label: "Academic Courses" },
  { value: "8+", label: "Years of Excellence" },
  { value: "800+", label: "Graduating Students" },
];

export default function ImpactSection() {
  return (
    <section className={styles.impactWrapper}>
      {/* TOP BLUE IMPACT BANNER */}
      <div className={styles.impactBanner}>
        <div className={styles.impactInner}>
          <span className={styles.impactBadge}>Our Impact</span>
          <h2 className={styles.impactTitle}>
            Creating Impact Through <span>Healthcare Education</span>
          </h2>
          <p className={styles.impactSubtitle}>
            Empowering future pharmacy professionals with academic excellence, clinical exposure, research opportunities.
          </p>
        </div>
      </div>

      {/* FLOATING OVERLAPPING WHITE STAT CARD */}
      <div className={styles.statCardWrapper}>
        <div className={styles.statCardContainer}>
          {stats.map((s) => (
            <div className={styles.statItem} key={s.label}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
