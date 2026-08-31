import React from "react";
import styles from "../Styles/About.module.css";
import HeroSection from "./About/HeroSection";
import ExcellenceSection from "./About/ExcellenceSection";
import LeadershipSection from "./About/LeadershipSection";
import Cta from "./Cta";
 
export default function About() {
  return (
    <main className={styles.about}>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. EXCELLENCE, PURPOSE, MISSION & VISION SECTION */}
      <ExcellenceSection />

      {/* 3. LEADERSHIP SECTION */}
      <LeadershipSection />

      {/* 4. CTA SECTION */}
      <Cta />
    </main>
  );
}