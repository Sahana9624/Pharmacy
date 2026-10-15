import React, { useState } from "react";
import styles from "../../Styles/Home/FaqSection.module.css";
import nextIcon from "../../assets/icons/next.svg";

const faqData = [
  {
    q: "What is the eligibility for D.Pharm?",
    a: "Students must complete 10+2 with Physics, Chemistry, and Biology/Mathematics from a recognized board.",
  },
  {
    q: "What is the eligibility for B.Pharm?",
    a: "Candidates should complete Higher Secondary Education with Physics, Chemistry, and Biology/Mathematics.",
  },
  {
    q: "What is the duration of M.Pharm course?",
    a: "The duration of M.Pharm (Pharmaceutics) is 2 years.",
  },
  {
    q: "What is the duration of Pharm.D course?",
    a: "The duration of Pharm.D is 6 years",
  },
  {
    q: "What is the duration of B.Pharm course?",
    a: "The duration of B.Pharm is 4 years",
  },
  {
    q: "What is the duration of B.Pharm Lateral course?",
    a: "The duration of B.Pharm Lateral Entry is 3 years",
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqGridContainer}>
        {/* LEFT COLUMN */}
        <div className={styles.faqLeftCol}>
          <span className={styles.pillBadgeGreen} data-fade data-fade-delay="0">Frequently asked questions</span>
          <h2 className={styles.faqTitle} data-fade data-fade-delay="0.1">Got Questions? We've Got Answers</h2>
          <p className={styles.faqSubtitle} data-fade data-fade-delay="0.2">
            Everything you need to know about our programs and admission process.
          </p>
        </div>

        {/* RIGHT COLUMN ACCORDION */}
        <div className={styles.faqRightCol}>
          <div className={styles.faqList} data-fade-container>
            {faqData.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                  key={item.q}
                  onClick={() => toggleFaq(idx)}
                  data-fade-item
                  data-fade-delay={(idx * 0.15).toFixed(2)}
                >
                  <div
                    className={`${styles.faqQuestionBtn} ${isOpen ? styles.faqQuestionBtnOpen : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleFaq(idx);
                      }
                    }}
                  >
                    <span>{item.q}</span>
                    <img
                      src={nextIcon}
                      alt=""
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotate : ""}`}
                    />
                  </div>
                  <div className={`${styles.faqAnswerWrapper} ${isOpen ? styles.faqAnswerWrapperOpen : ""}`}>
                    <div className={styles.faqAnswerBox}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
