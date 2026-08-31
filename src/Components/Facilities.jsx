import React from "react";
import styles from "../Styles/Facilities.module.css";
import HeroSection from "./Facilities/HeroSection";
import FacilitiesSection from "./Facilities/FacilitiesSection";
import Cta from "./Cta";

export default function Facilities() {
  return (
    <main className={styles.facilities}>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. FACILITIES ACCORDION CARD SECTION */}
      <FacilitiesSection />

      {/* 3. CTA SECTION */}
      <Cta />
    </main>
  );
}