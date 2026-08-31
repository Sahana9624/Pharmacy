import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { newsItems } from "../data/newsData";
import styles from "../Styles/NewsDetail.module.css";
import Cta from "./Cta";
import bgImg from "../assets/images/home-hero.jpg";
import nextIcon from "../assets/icons/next.svg";

export default function NewsDetail() {
  const { slug } = useParams();
  
  const newsItem = newsItems.find((item) => item.slug === slug || item.href === `/news/${slug}`);

  if (!newsItem) {
    return <Navigate to="/news" />;
  }

  return (
    <main className={styles.newsDetail}>
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
            <Link to="/news">News and Events</Link>
          </nav>
          <h1>{newsItem.title}</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.newsCard}>
          <div className={styles.imageWrapper}>
            <img src={newsItem.img || newsItem.coverImg || newsItem.image} alt={newsItem.title} />
          </div>
          <div className={styles.textContent}>
            <p className={styles.date}>{newsItem.date}</p>
            <div className={styles.description}>
              {newsItem.description || newsItem.content || newsItem.summary}
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  );
}
