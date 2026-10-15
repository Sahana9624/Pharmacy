import React, { useEffect } from "react";
import styles from "../../Styles/About/LeadershipSection.module.css";
import founderImg from "../../assets/images/founder.jpg";
import chairmanImg from "../../assets/images/chairman.jpg";
import principalImg from "../../assets/images/principal.jpg";

export default function LeadershipSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(`.${styles.fadeUp}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.leadershipSection}>
      <div className={styles.leadershipHeader}>
        <h2 className={styles.sectionTitle}>
          Leadership Message
        </h2>
        <p className={styles.sectionSubtitle}>
          Our leadership is dedicated to creating a transformative learning environment 
          that empowers students to excel in healthcare and pharmacy.
        </p>  
      </div>

      <div className={styles.leaderCardWrapper}>
        {/* FOUNDER CARD */}
        <div className={styles.leaderCard}>
          <div className={`${styles.leaderCardPhotoWrap} ${styles.fadeUp}`}>
            <img src={founderImg} alt="Shri R. Chinnathambi" className={styles.leaderCardPhoto} />
          </div>
          <div className={`${styles.leaderCardContent} ${styles.fadeUp}`}>
            <h3>Founder of Mother Terasa Group of Institutions</h3>
            <p>
              Shri.R.Chinnathambi., the Founder of Mother Terasa Educational & Charitable 
              Trust is well known for his contributions in the field of education. He is 
              the father of our beloved Chairman. He was also the Chairman of Annavasal 
              Union in 1986. He extends his guidance in each and every way in establishing 
              the infrastructure, construction of building and guiding the staff of all the 
              Institutions. And also he is a personality of social worker by associating himself
              as a Vision to promote quality education in this rural area .
              He is a Philanthropist and also a great Humanitarian.
            </p>
            
              <p className={styles.leaderCardName}>Shri R.Chinnathambi</p>
              <p className={styles.leaderCardRole}>Founder</p>
            </div>
          </div>
       

        {/* CHAIRMAN CARD */}
        <div className={`${styles.leaderCard} ${styles.leaderCardReverse}`}>
          <div className={`${styles.leaderCardContent} ${styles.fadeUp} ${styles.fadeUpDelay}`}>
            <h3>Chairman of Mother Terasa Group of Institutions</h3>
            <p>
              <span>Rome was not built in a day.</span> So are the accomplishments of every achievement. 
              One small step leads to great expedition. <span>Mr.R.C.Uthayakumar B.A ., a great 
              philanthropist & an entrepreneur.</span> His main thirst was to give value- based 
              education to the downtrodden people. So the trust aimed to propose the multi 
              professional research-led institution, which will be internationally recognized 
              leader in professional and career-oriented education, a-unique intersection 
              between theory and practice, passion and reason. So they started the 
              Polytechnic College, Teacher Training Institute, Engineering and Technology, 
              Arts and Science College of Education and all the institutions produce 100% 
              result.
            </p>
            <p>
              This thought provoked him to start Mother Terasa College of Arts and Science 
              which will be another diamond in the crown of the Mother Terasa Educational 
              and Charitable Trust. His vision is to educate the next generation of 
              engineering and technological professionals on a rigorous, applied treatment 
              by integrating teaching and research to create and manage the technology-based 
              enterprises that will provide future economic growth and professional growth. 
              Our Chairman was Young, Dynamic and Highly motivated to promote Quality 
              Education for the rural People. He was also a Member in Rotary Club.
            </p>
            
              <p className={styles.leaderCardName}>Mr.R.C.Uthayakumar B.A</p>
              <p className={styles.leaderCardRole}>Chairman</p>
           
          </div>
          <div className={`${styles.leaderCardPhotoWrap} ${styles.fadeUp}`}>
            <img src={chairmanImg} alt="Mr. R.C. Uthayakumar" className={styles.leaderCardPhoto} />
          </div>
        </div>

        {/* PRINCIPAL CARD */}
        <div className={styles.leaderCard}>
          <div className={`${styles.leaderCardPhotoWrap} ${styles.fadeUp}`}>
            <img src={principalImg} alt="Prof. Dr. T. Shri Vijaya Kirubha" className={styles.leaderCardPhoto} />
          </div>
          <div className={`${styles.leaderCardContent} ${styles.fadeUp} ${styles.fadeUpDelay}`}>
            <h3>Principal of Mother Terasa College Of Pharmacy</h3>
            <p>
              Warm Greetings from Mother Terasa College of Pharmacy!
              It gives me immense pleasure to welcome you all to Mother Terasa College of Pharmacy - a place where passion meets purpose and learning meets excellence.
            </p>
            <p>
              Since its inception in 2018, our institution has been committed to nurturing young minds with knowledge, skills, and values essential for shaping them into competent and socially responsible pharmacy professionals. With the approval of the Pharmacy Council of India, New Delhi and affiliation to The Tamil Nadu Dr. M.G.R. Medical University, our college stands as a symbol of quality education and holistic development.
            </p>
            <p>
              We believe that education is not just about acquiring a degree, but about developing a strong character, scientific insight, ethical values, and a commitment to serve society. At Mother Terasa College of Pharmacy, we provide a vibrant academic environment, well-equipped laboratories, modern infrastructure, and a dedicated team of highly qualified faculty who guide students towards academic excellence and research innovation.
            </p>
            <p>
              Our students have excelled in academics, research, sports, and various extension activities, bringing laurels to the institution. The Placement Cell of our college works actively to create excellent career opportunities for our students, with many of them placed in reputed pharmaceutical companies, hospitals, and research organizations, while others have pursued higher studies. We focus on instilling moral uprightness, scientific temperament, and social commitment in every student. I am confident that with these qualities, our graduates will emerge not just as successful pharmacists but as responsible citizens contributing positively to society.
            </p>
            <p>
              I warmly invite all aspiring students to be a part of Mother Terasa College of Pharmacy, to explore their potential, and to build a bright and rewarding career in the field of pharmacy.
            </p>
            <p>
              &ldquo;Join us to learn, lead, and serve with excellence.&rdquo;
            </p>
            <p className={styles.leaderCardName}>Prof. Dr. T. Shri Vijaya Kirubha, M.Pharm., Ph.D.,</p>
            <p className={styles.leaderCardRole}>Principal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
