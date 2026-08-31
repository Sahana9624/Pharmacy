import React from "react";
import styles from "../Styles/Home.module.css";
import HeroSection from "./Home/HeroSection";
import NewsBar from "./Home/NewsBar";
import ImpactSection from "./Home/ImpactSection";
import WhyStudySection from "./Home/WhyStudySection";
import HandsOnSection from "./Home/HandsOnSection";
import CampusLifeSection from "./Home/CampusLifeSection";
import TestimonialsSection from "./Home/TestimonialsSection";
import FaqSection from "./Home/FaqSection";
import Cta from "./Cta";

export default function Home({ setAdmissionsModalOpen }) {
  return (
    <main className={styles.home}>
      {/* 1. HERO SECTION */}
      <HeroSection setAdmissionsModalOpen={setAdmissionsModalOpen} />

      {/* 2. ANNOUNCEMENT NEWS TICKER BAR */}
      <NewsBar />

      {/* 3. IMPACT SECTION */}
      <ImpactSection />

      {/* 4. WHY STUDY SECTION */}
      <WhyStudySection />

      {/* 5. HANDS-ON LEARNING SECTION */}
      <HandsOnSection />

      {/* 6. CAMPUS LIFE SECTION */}
      <CampusLifeSection />

      {/* 7. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 8. FAQ SECTION */}
      <FaqSection />

      {/* 9. CTA SECTION */}
      <Cta />
    </main>
  );
}