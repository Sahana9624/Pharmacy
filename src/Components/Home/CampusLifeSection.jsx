import React, { useState } from "react";
import styles from "../../Styles/Home/CampusLifeSection.module.css";
import campusImg1 from "../../assets/images/campus-life-1.png";
import campusImg2 from "../../assets/images/campus-life-2.png";
import campusImg3 from "../../assets/images/campus-life-3.png";

const campusImages = [
  { src: campusImg2, alt: "Singer Performing at Aranga 2026" },
  { src: campusImg3, alt: "Event Anchors at Aranga 2026" },
  { src: campusImg1, alt: "Aranga 2026 Moments" },
];

export default function CampusLife() {
  const [isTouchPaused, setIsTouchPaused] = useState(false);

  return (
    <section className={styles.campusSection}>
      {/* OUTER BLUE HEADER */}
      <div className={styles.campusOuterHeader}>
        <h2 className={styles.outerTitle}>Campus Life @MTIAHS</h2>
        <p className={styles.outerSubtitle}>
          Everything you need to know about our programs and admission process.
        </p>
      </div>

      {/* FLOATING WHITE CARD CONTAINER */}
      <div className={styles.campusCardContainer}>
        <div className={styles.campusWhiteCard}>
          {/* FEST HEADER INSIDE CARD */}
          <div className={styles.festHeader}>
            <h3 className={styles.festTitle}>Aranga 2026</h3>
            <p className={styles.festSubtitle}>
              Mother Terasa College of Allied Health Science Students Celebrated Aranga 26 Vibrantly.            </p>
          </div>

          {/* ROW 1: STATIC PICTURE GRID (2 STATIC IMAGES) */}
          <div className={styles.staticGrid}>
            <div className={styles.staticImgItem}>
              <img src={campusImg1} alt="Aranga 2026 Stage Performance" className={styles.staticImg} />
            </div>
            <div className={styles.staticImgItem}>
              <img src={campusImg2} alt="Aranga 2026 Concert View" className={styles.staticImg} />
            </div>
          </div>

          {/* ROW 2: SCROLLING MARQUEE TRACK */}
          <div
            className={styles.marqueeContainer}
            onTouchStart={() => setIsTouchPaused(true)}
            onTouchEnd={() => setIsTouchPaused(false)}
          >
            <div
              className={styles.marqueeTrack}
              style={{ animationPlayState: isTouchPaused ? "paused" : undefined }}
            >
              {Array(8)
                .fill(campusImages)
                .flat()
                .map((img, idx) => (
                  <div className={styles.marqueeItem} key={idx}>
                    <img src={img.src} alt={img.alt} className={styles.marqueeImg} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
