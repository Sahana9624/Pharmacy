import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Gallery.module.css";
import Cta from "./Cta";
import { galleryItems } from "../data/galleryData";
import bgImg from "../assets/images/home-hero.jpg";
import nextIcon from "../assets/icons/next.svg";

export default function Gallery() {
  return (
    <main className={styles.gallery}>
      {/* HERO */}
      <section className={styles.hero}>
        <img
          src={bgImg}
          alt="Mother Terasa College Campus"
          className={styles["hero__bg"]}
        />
        <div className={styles["header-card"]}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
            <span className={styles["breadcrumb__current"]}>Gallery</span>
          </nav>
          <h1>Gallery</h1>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className={styles["grid-section"]}>
        <div className={styles["gallery-grid"]} data-fade-container>
          {galleryItems.map((item, idx) => {
            const rowIdx = Math.floor(idx / 3);
            const colIdx = idx % 3;
            let delay;
            if (rowIdx === 0) {
              delay = 0.10 + colIdx * 0.15;
            } else if (rowIdx === 1) {
              delay = 0.22 + colIdx * 0.15;
            } else {
              delay = colIdx * 0.15;
            }

            return (
              <Link
                to={`/gallery/${item.slug}`}
                className={styles["gallery-card"]}
                key={item.slug || item.title}
                data-fade-item
                data-fade-delay={delay.toFixed(2)}
              >
                <div className={styles["gallery-card__img-wrap"]}>
                  <img src={item.coverImg || item.image || item.img} alt={item.title} className={styles["gallery-card__img"]} />
                  <div className={styles["gallery-card__overlay"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles["plus-icon"]}>
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </div>
                </div>
                <span className={styles["gallery-card__title"]}>{item.title}</span>
                <span className={styles["gallery-card__link"]}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles["gallery-card__link-arrow"]}>
                    <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="7 7 17 7 17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className={styles["gallery-card__link-text"]}>View More</span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </main>
  );
}