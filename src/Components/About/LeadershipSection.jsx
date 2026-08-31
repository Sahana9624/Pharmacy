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
          that empowers students to excel in healthcare and nursing.
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
            <img src={principalImg} alt="Prof. R. Anbu Dhanabalan" className={styles.leaderCardPhoto} />
          </div>
          <div className={`${styles.leaderCardContent} ${styles.fadeUp} ${styles.fadeUpDelay}`}>
            <h3>Principal of Mother Terasa College Of Pharmacy</h3>
            <p>
              “We Cordially Invite you to our Mother Terasa Paramedical Institute, 
              We are Dedicated to Train the Next generation of Health inspectors, 
              Who can Serve the Society with Passion and Make Meaningful Impact on 
              the life and surroundings of the Rural People.
            </p>
            <p>
              Our Mission is to provide Handson Training to the Young Trainees .So that 
              they are well Prepared to Serve the Society. <br />Health Inspectors are Supposed 
              to be very passionate in Serving the Rural People With Compassion and Empathy.<br />
              In our institute our Faculty includes batch of Retried Health Inspectors who 
              have 30 +years of Services in the field .In addition we are HIRING SUBJECTS 
              Experts from Variable fields as external Faculty while our trainees are well 
              enriched in the Theory, our main focus is on the field Training.<br /> Six batches 
              of our Trainees, of around 350 Health Inspectors are working in various 
              Districts of Tamil nadu. As the principal of this college, I invite you to 
              explore our website, learn more about our programs, and discover how we can 
              help you achieve your goals. Whether you are a prospective student, a 
              healthcare professional, or a community member, we look forward to 
              collaborating with you and contributing to the advancement of Health 
              Inspectors education and practice."
            </p>
              <p className={styles.leaderCardName}>Prof. Dr. T. Shri Vijaya Kirubha, M.Pharm., Ph.D.,</p>
              <p className={styles.leaderCardRole}>Principal</p>
            
          </div>
        </div>
      </div>
    </section>
  );
}
