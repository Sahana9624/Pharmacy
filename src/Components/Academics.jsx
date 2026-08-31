import React, { useState } from "react";
import styles from "../Styles/Academics.module.css";
import HeroSection from "./Academics/HeroSection";
import CoursesSection from "./Academics/CoursesSection";
import CourseApplicationModal from "./CourseApplicationModal";
import Cta from "./Cta";

export default function Academics() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <main className={styles.academicsPage}>
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. COURSE CARDS SECTION */}
      <CoursesSection onApplyClick={handleApplyClick} />

      {/* APPLICATION MODAL */}
      <CourseApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={selectedCourse ? `${selectedCourse.title} (${selectedCourse.subtitle})` : undefined}
        courseDuration={selectedCourse?.duration}
      />
      
      {/* 4. CTA SECTION */}
            <Cta />
    </main>
  );
}