import React, { useState, useRef, useEffect } from "react";
import styles from "../../Styles/Home/TestimonialsSection.module.css";

const testimonials = [
  {
    quote:
      "I am proud to begin my career at Accenture as a Pharmacovigilance Services New Associate.I sincerely thank Mother Terasa College of Pharmacy, the management, and faculty for their guidance and support.",
    name: "Vasunthira S",
    work: "Pharmacovigilance Associate Accenture",
  },
  {
    quote:
      "I sincerely thank Mother Terasa College of Pharmacy for the knowledge, guidance, and encouragement that shaped my journey.The supportive faculty and quality education helped build my skills and confidence.",
    name: "Priya S.",
    work: "PharmacovigilanceAssociate at Accenture",
  },
  {
    quote:
      "I am grateful to Mother Terasa College of Pharmacy for the quality education and guidance that shaped my career.The supportive faculty and learning environment helped build my knowledge and confidence.",
    name: "Dharmaraj.P",
    work: "Apollo Pharmacy, Pudukkottai",
  },
  {
    quote:
      "I am proud to be a student of Mother Terasa College of Pharmacy, where I gained strong academic knowledge, and confidence.The guidance and support from my Faculty made my journey meaningful and memorable.",
    name: "DEVADHARSHINI.S",
    work: "MedPlus Pharmacy, Trichy.",
  },
  {
    quote:
      "The college has provided me with numerous opportunities to learn and grow. The supportive campus environment, experienced faculty, and practical exposure have made my educational journey truly rewarding.",    
    name: "Priya L.",
    work: "B.Pharm 2026 Batch",
  },
  {
    quote:
      "Studying here has been a wonderful experience. The emphasis on practical learning, internships, and professional development has prepared me well for a successful career in Pharmacy.",    
    name: "Keerthana S.",
    work: "B.Pharm 2026 Batch",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      // Start in the middle of the repeated content track so left-to-right drag works immediately
      const initialScroll = container.scrollWidth / 4;
      container.scrollLeft = initialScroll;
    }
  }, []);

  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    let newScrollLeft = scrollLeft - walk;

    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
    const oneQuarter = containerRef.current.scrollWidth / 4;

    if (newScrollLeft <= 10) {
      newScrollLeft += oneQuarter;
      setStartX(x);
      setScrollLeft(newScrollLeft);
    } else if (newScrollLeft >= maxScroll - 10) {
      newScrollLeft -= oneQuarter;
      setStartX(x);
      setScrollLeft(newScrollLeft);
    }

    containerRef.current.scrollLeft = newScrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const oneQuarter = container.scrollWidth / 4;

    if (container.scrollLeft <= 10) {
      container.scrollLeft += oneQuarter;
    } else if (container.scrollLeft >= maxScroll - 10) {
      container.scrollLeft -= oneQuarter;
    }
  };

  return (
    <section className={styles["testimonial-section"]}>
      <div className={styles["testimonial-section__container"]}>
        <div className={`${styles["section-eyebrow"]} ${styles["section-eyebrow--pill"]}`} data-fade>
          Student Reviews
        </div>
        <h2 className={`${styles["section-title"]} ${styles["section-title--light"]}`} data-fade data-fade-delay="0.1">
          Hear From Our Students
        </h2>
        <p className={`${styles["section-subtitle"]} ${styles["section-subtitle--light"]}`} data-fade data-fade-delay="0.2">
          Discover how our pharmacy programs have inspired students to grow with confidence, 
          compassion, and professional excellence.
        </p>

        <div 
          ref={containerRef}
          className={`${styles["testimonial-marquee-container"]} ${isDragging ? styles["is-dragging"] : ""}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          onScroll={handleScroll}
          data-fade-container
        >
          <div 
            className={styles["testimonial-marquee-track"]}
            style={{ animationPlayState: (isPaused || isDragging) ? 'paused' : undefined }}
          >
            {Array(20).fill(testimonials).flat().map((t, i) => (
              <div
                className={styles["testimonial-card"]}
                key={`${t.name}-${i}`}
                data-fade-item
                data-fade-delay={`${((i % 6) * 0.15).toFixed(2)}`}
              >
                <p className={styles["testimonial-card__quote"]}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className={styles["testimonial-card__author"]}>
                  <p className={styles["testimonial-card__name"]}>{t.name}</p>
                  <p className={styles["testimonial-card__work"]}>{t.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
