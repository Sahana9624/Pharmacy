import React from "react";
import { Link } from "react-router-dom";
import styles from "../../Styles/Home/NewsBar.module.css";

export default function NewsBar() {
  return (
    <section className={styles.newsbar}>
      <div className={styles["newsbar__inner"]}>
        <div className={styles["newsbar__badge-container"]}>
          <Link to="/news" className={styles["newsbar__badge"]}>Latest News</Link>
        </div>
        <div className={styles["newsbar__marquee"]}>
          <div className={styles["newsbar__track"]}>
            {[1, 2, 3].map((i) => (
              <Link to="/news" key={`t1-${i}`} className={styles["newsbar__text"]}>
                Nov 2025 Examination Timetable Download
              </Link>
            ))}
          </div>
          <div className={styles["newsbar__track"]}>
            {[1, 2, 3].map((i) => (
              <Link to="/news" key={`t2-${i}`} className={styles["newsbar__text"]}>
                Nov 2025 Examination Timetable Download
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
