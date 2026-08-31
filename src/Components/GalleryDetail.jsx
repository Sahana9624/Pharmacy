import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { galleryItems } from "../data/galleryData";
import styles from "../Styles/GalleryDetail.module.css";
import Cta from "./Cta";
import bgImg from "../assets/images/home-hero.jpg";
import nextIcon from "../assets/icons/next.svg";

export default function GalleryDetail() {
  const { slug } = useParams();
  
  const galleryItem = galleryItems.find((item) => item.slug === slug);

  if (!galleryItem) {
    return <Navigate to="/gallery" />;
  }

  const heroImage = galleryItem.images?.[0] || galleryItem.coverImg || galleryItem.image || galleryItem.img || bgImg;

  return (
    <main className={styles.galleryDetail}>
      <section className={styles.hero}>
        <img
          src={heroImage}
          alt={galleryItem.title}
          className={styles["hero__bg"]}
        />
        <div className={styles["header-card"]}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <img src={nextIcon} alt="" className={styles.breadcrumbArrow} aria-hidden="true" />
            <Link to="/gallery">Gallery</Link>
          </nav>
          <h1>{galleryItem.title}</h1>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.imageGrid}>
          {(galleryItem.images || [galleryItem.coverImg || galleryItem.image || galleryItem.img]).filter(Boolean).map((imgSrc, idx) => (
            <img key={idx} src={imgSrc} alt={`${galleryItem.title} ${idx + 1}`} className={styles.gridImg} />
          ))}
        </div>
      </section>

      <Cta />
    </main>
  );
}
