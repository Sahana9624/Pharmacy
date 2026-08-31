import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../Styles/Contact.module.css";
import successCircleIcon from "../assets/icons/success-circle.svg";
import successTickIcon from "../assets/icons/success-tick.svg";
import heroImg from "../assets/images/home-hero.jpg";
import locationIcon from "../assets/icons/contact-location.svg";
import mailIcon from "../assets/icons/contact-mail.svg";
import phoneIcon from "../assets/icons/contact-phn.svg";

const initialForm = {
  name: "",
  mobile: "",
  email: "",
  message: "",
  consent: false,
};

const initialTouched = {
  name: false,
  mobile: false,
  email: false,
  message: false,
  consent: false,
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState(initialTouched);
  const [warnings, setWarnings] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (submitted) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [submitted]);

  const handleClose = () => {
    setSubmitted(false);
  };

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    
    if (type === "tel" || name === "mobile") {
      value = value.replace(/[^0-9]/g, '');
      if (value.length > 10) {
        setWarnings(prev => ({ ...prev, mobile: true }));
        value = value.slice(0, 10);
      } else {
        setWarnings(prev => ({ ...prev, mobile: false }));
      }
    }
    
    e.target.classList.remove(styles.error);

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isMobileValid = form.mobile.length === 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  
  const isValid = 
    form.name.trim() !== "" &&
    isMobileValid &&
    isEmailValid &&
    form.consent;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setForm(initialForm);
      setTouched(initialTouched);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <main className={styles.contact}>
      {/* HERO */}
      <section className={styles.hero}>
        <img src={heroImg} alt="Mother Terasa College of Pharmacy campus" className={styles["hero__bg"]} />
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className={styles["contact-section"]}>
        <div className={styles["contact-card"]}>
          <div className={styles["contact-card__info"]}>
            <h1>Get in Touch with Us</h1>
            <p className={styles.intro}>
              We are here to help you. Please feel free to contact us with any questions or enquiries you may have.            </p>

            <h2>Contact Details</h2>

            <div className={styles["detail-item"]}>
              <span className={styles["detail-item__icon-phn"]} aria-hidden="true">
                <img src={phoneIcon} alt="Phone" />
              </span>
              <div>
                <h3>Contact Number</h3>
                <p>
                  <a href="tel:+919443494665">+91-94434 94665</a>
                  <br />
                  <a href="tel:+919345485129">+91-93454 85129</a>
                  <br />
                  <a href="tel:+917806828750">+91-78068 28750</a>
                </p>
              </div>
            </div>

            <div className={styles["detail-item"]}>
              <span className={styles["detail-item__icon-location"]} aria-hidden="true">
                <img src={locationIcon} alt="Location" />
              </span>
              <div>
                <h3>Our Address</h3>
                <p>
             Mother Terasa College of Pharmacy, MTGI Campus, Mettusalai, Illuppur, Pudukkottai – 622 102                </p>
              </div>
            </div>

            <div className={styles["detail-item"]}>
              <span className={styles["detail-item__icon-mail"]} aria-hidden="true">
                <img src={mailIcon} alt="Mail" />
              </span>
              <div>
                <h3>Mail Us</h3>
                <p>
                  <a href="mailto:mtcp1997@gmail.com">mtcp18@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className={styles["contact-card__form"]}>
            <h2>Contact Form</h2>
            <p className={styles["form-subtitle"]}>Please share the following Details</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder={touched.name && form.name.trim() === "" ? "Please fill this" : "Enter your Name"}
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`${styles.input} ${touched.name && form.name.trim() === "" ? styles.error : ""}`}
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  name="mobile"
                  placeholder={
                    touched.mobile && form.mobile.trim() === "" 
                      ? "Please fill this" 
                      : (touched.mobile && !isMobileValid ? "Nos should be in 10 digits" : "Enter your Mobile Number")
                  }
                  value={form.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`${styles.input} ${touched.mobile && (!form.mobile.trim() || !isMobileValid) ? styles.error : ""}`}
                />
                {warnings.mobile && <p className={styles.errorText}>Maximum 10 digits allowed</p>}
                {!warnings.mobile && touched.mobile && form.mobile.trim() !== "" && !isMobileValid && <p className={styles.errorText}>Mobile number must be exactly 10 digits</p>}
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder={touched.email && form.email.trim() === "" ? "Please fill this" : "Enter your mail Id"}
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`${styles.input} ${touched.email && (!form.email.trim() || !isEmailValid) ? styles.error : ""}`}
                />
                {touched.email && form.email.trim() !== "" && !isEmailValid && <p className={styles.errorText}>Please enter a valid email address</p>}
              </div>

              <div className={styles.inputGroup}>
                <textarea
                  name="message"
                  placeholder="Any Questions or Preferences (Optional)"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={styles.textarea}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.consent}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={(e) => {
                      handleChange(e);
                      setTouched((prev) => ({ ...prev, consent: true }));
                    }}
                    onBlur={() => setTouched((prev) => ({ ...prev, consent: true }))}
                    required
                  />
                  <span>
                    By submitting this form, you agree to receive admission-related emails and calls from our team.
                  </span>
                </label>
                {touched.consent && !form.consent && <p className={styles.errorText}>Please agree to the terms to proceed</p>}
              </div>

              <button type="submit" className={styles["submit-btn"]} disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Please wait..." : "Submit Form"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className={styles["map-section"]}>
        <div className={styles["map-card"]}>
          <div className={styles["map-card__header"]}>
            <h2>Mother Terasa College of Pharmacy</h2>
            <p>Mettusalai, Illuppur, Pudukkottai(Dt), Tamilnadu-622102.</p>
          </div>
          <iframe
            title="Mother Terasa College of Pharmacy location"
            className={styles["map-card__iframe"]}
            src="https://maps.google.com/maps?q=Mother%20Terasa%20College%20of%20Pharmacy%2C%20Ghatkesar%2C%20Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {submitted && ReactDOM.createPortal(
        <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }} onTouchMove={(e) => { if (e.target === e.currentTarget) e.preventDefault(); }}>
          <div className={styles.successModal}>
            <div className={styles.successContent}>
              <div className={styles.successIcon}>
                <div style={{ position: 'relative', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={successCircleIcon} alt="" style={{ position: 'absolute', width: '32px', height: '32px', inset: 0 }} />
                  <img src={successTickIcon} alt="Success" style={{ position: 'absolute', zIndex: 1 }} />
                </div>
              </div>
              <h2>Application Submitted</h2>
              <p>We have received your Application form and our admissions team will Reach you shortly.</p>
              <button className={styles.submitBtn} onClick={handleClose}>Done</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </main>
  );
}