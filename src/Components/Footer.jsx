import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../Styles/Footer.module.css";
import logo from "../assets/images/logo.png";

import locationIcon from "../assets/icons/location.svg";
import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import facebookHoverIcon from "../assets/icons/facebook-hover.svg";
import linkedinHoverIcon from "../assets/icons/linkedin-hover.svg";
import instagramHoverIcon from "../assets/icons/instagram-hover.svg";
import twitterHoverIcon from "../assets/icons/twitter-hover.svg";

const quickLinks = [
  { label: "About MTCOP", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Faculty", to: "/faculty" },
  { label: "Facilities", to: "/facilities" },
  { label: "News and Events", to: "/news" },
  { label: "Gallery", to: "/gallery" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms and Conditions", to: "/terms-and-conditions" },
  { label: "Return and Refund Policy", to: "/return-refund-policy" },
  { label: "Cancellation Policy", to: "/cancellation-policy" },
];

export default function Footer() {
  const location = useLocation();
  const isAboutPage = location.pathname.toLowerCase() === "/about";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        {/* BRAND COLUMN */}
        <div className={styles.footerBrand}>
          <Link to="/" className={styles.brand} onClick={scrollToTop}>
            <img src={logo} alt="Mother Terasa College of Pharmacy logo" className={styles.brandLogo} />
            <span className={styles.brandText}>
              <span className={styles.brandName}>MOTHER TERASA</span>
              <span className={styles.brandTagline}>COLLEGE OF PHARMACY</span>
              <span className={styles.brandAffiliation}>
                Affiliated to The Tamilnadu Dr.M.G.R Medical University
              </span>
            </span>
          </Link>

          <p className={styles.footerDesc}>
            Mother Terasa Group of Educational Institutions is multifaceted institution known for its contribution in diversified educational channels such as Pharmacy{" "}
            {!isAboutPage && (
              <Link to="/about" className={styles.readMoreLink} onClick={scrollToTop}>
                Read More
              </Link>
            )}
          </p>

          <div className={styles.footerSocial}>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" className={styles.iconNormal} />
              <img src={facebookHoverIcon} alt="Facebook Hover" className={styles.iconHover} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">
              <img src={twitterIcon} alt="Twitter" className={styles.iconNormal} />
              <img src={twitterHoverIcon} alt="Twitter Hover" className={styles.iconHover} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className={styles.iconNormal} />
              <img src={instagramHoverIcon} alt="Instagram Hover" className={styles.iconHover} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className={styles.iconNormal} />
              <img src={linkedinHoverIcon} alt="LinkedIn Hover" className={styles.iconHover} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS COLUMN */}
        <div className={`${styles.footerCol} ${styles.quickLinksCol}`}>
          <h3>Quick Links</h3>
          <ul className={styles.quickLinksList}>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} onClick={scrollToTop}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div className={`${styles.footerCol} ${styles.contactCol}`}>
          <h3>Contact us</h3>
          <ul className={styles.contactList}>
            <li>
              <img src={locationIcon} alt="Location" className={styles.contactIcon} />
              <span>
                Mother Terasa College of Pharmacy, MTGI Campus, Mettusalai, Illuppur, Pudukkottai – 622 102
              </span>
            </li>
            <li>
              <img src={phoneIcon} alt="Phone" className={styles.contactIcon} />
              <div className={styles.phoneGroup}>
                <span>+91-78068 28750</span>
                <span>+91-93454 85129</span>
                <span>+91-94434 94665</span>
              </div>
            </li>
            <li>
              <img src={mailIcon} alt="Email" className={styles.contactIcon} />
              <span>mtcp18@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* MOBILE ONLY: LEGAL COLUMN */}
        <div className={`${styles.footerCol} ${styles.mobileLegalCol}`}>
          <h3>Legal</h3>
          <ul className={styles.quickLinksList}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} onClick={scrollToTop}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.footerBottom}>
        <ul className={`${styles.legalLinks} ${styles.desktopLegalLinks}`}>
          {legalLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} onClick={scrollToTop}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <p className={styles.copyright}>
          © 2026 Mother Terasa College of Pharmacy. All Rights Reserved.
        </p>

        <button className={styles.scrollToTop} onClick={scrollToTop} aria-label="Scroll to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </footer>
  );
}