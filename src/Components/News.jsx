import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/News.module.css";
import Cta from "./Cta";

import { newsItems } from "../data/newsData";
import bgImg from "../assets/images/home-hero.jpg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";
import arrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import nextIcon from "../assets/icons/next.svg";

export default function News() {
  return (
    <main className={styles.news}>
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
            <span className={styles["breadcrumb__current"]}>News and Events</span>
          </nav>
          <h1>Happenings @MTCOP</h1>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className={styles["grid-section"]}>
        <div className={styles["subtitle"]} data-fade data-fade-delay="0">
          <h1>News and Events</h1>
          <h3>Department News and Events are Regularly Updated</h3>
        </div>
        <div className={styles["news-grid"]} data-fade-container>
          {newsItems.map((item, idx) => {
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
                to={item.href || `/news/${item.slug}`}
                className={styles["news-card"]}
                key={item.slug || item.title}
                data-fade-item
                data-fade-delay={delay.toFixed(2)}
              >
                <div className={styles["news-card__img-wrap"]}>
                  <img src={item.img || item.coverImg || item.image} alt={item.title} className={styles["news-card__img"]} />
                  {item.isNew && <span className={styles["news-card__badge"]}>New</span>}
                </div>

                <h2>{item.title}</h2>
                <p className={styles["news-card__date"]}>{item.date}</p>
                <p className={styles["news-card__excerpt"]}>{item.excerpt || item.summary}</p>

                <span className={styles["news-card__link"]}>
                  <span className={styles["arrow-icon"]} aria-hidden="true" />
                  <span>Know more</span>
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