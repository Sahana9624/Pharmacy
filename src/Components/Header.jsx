import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "../Styles/Header.module.css";
import logo from "../assets/images/logo.png";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import drop1Img from "../assets/images/academic-drop.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Academics", to: "/academics", hasDropdown: true },
  { label: "Facilities", to: "/facilities" },
  { label: "Faculty", to: "/faculty" },
  { label: "News", to: "/news" },
  { label: "Committee", to: "/committee" },
  { label: "Gallery", to: "/gallery" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [forceCloseMenu, setForceCloseMenu] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen && window.innerWidth <= 1023) {
      const handlePreventMobileScroll = (e) => {
        const navContainer = e.target.closest(`.${styles["mobile-nav-links-container"]}`);
        if (navContainer) {
          const { scrollTop, scrollHeight, clientHeight } = navContainer;
          if (scrollHeight > clientHeight) {
            const isScrollingUp = e.deltaY ? e.deltaY < 0 : false;
            const isScrollingDown = e.deltaY ? e.deltaY > 0 : false;
            const atTop = scrollTop <= 0;
            const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
            if ((isScrollingUp && !atTop) || (isScrollingDown && !atBottom) || !e.deltaY) {
              return;
            }
          }
        }
        e.preventDefault();
      };

      const handleResize = () => {
        if (window.innerWidth > 1023) {
          setMenuOpen(false);
        }
      };

      window.addEventListener("touchmove", handlePreventMobileScroll, { passive: false });
      window.addEventListener("wheel", handlePreventMobileScroll, { passive: false });
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("touchmove", handlePreventMobileScroll);
        window.removeEventListener("wheel", handlePreventMobileScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [menuOpen]);

  const handleDropdownClick = () => {
    setMenuOpen(false);
    setForceCloseMenu(false);
    setOpenMobileDropdown(null);
  };

  const handleMenuToggle = () => {
    setMenuOpen((prev) => {
      const nextState = !prev;
      if (!nextState) {
        setOpenMobileDropdown(null);
      }
      setForceCloseMenu(false);
      return nextState;
    });
  };

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        {/* TOP CONTACT BAR */}
        <div className={styles["top-bar"]}>
          <div className={styles["top-bar__inner"]}>
            <div className={styles["top-bar__phones"]}>
              <img src={phoneIcon} alt="" aria-hidden="true" className={styles["icon-wrap"]} />
              <span>+91 - 94434 94665</span>
              <span>+91 - 93454 85129</span>
              <span>+91 - 78068 28750</span>
            </div>

            <div className={styles["top-bar__email"]}>
              <img src={mailIcon} alt="" aria-hidden="true" className={styles["icon-wrap"]} />
              <span>mtcp18@gmail.com</span>
            </div>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className={styles.navbar}>
          <div className={styles["navbar__inner"]}>
            <Link to="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="Mother Terasa College of Pharmacy logo" className={styles.brand__logo} />
              <span className={styles.brand__text}>
                <span className={styles.brand__name}>MOTHER TERASA</span>
                <span className={styles.brand__tagline}>COLLEGE OF PHARMACY</span>
                <span className={`${styles.brand__affiliation} ${styles.desktopOnly}`}>
                  Affiliated to The Tamilnadu Dr.M.G.R Medical University
                </span>
                <span className={`${styles.brand__affiliation} ${styles.mobileOnly}`}>
                  Affiliated to The Tamilnadu Dr.M.G.R Medical University.
                </span>
              </span>
            </Link>

            <nav
              className={`${styles.nav} ${menuOpen ? styles["nav--open"] : ""} ${openMobileDropdown ? styles["nav--dropdown-open"] : ""}`}
              aria-label="Primary"
              onClick={() => menuOpen && setMenuOpen(false)}
            >
              <div
                className={styles["mobile-nav-links-container"]}
                onClick={(e) => e.stopPropagation()}
              >
                {navLinks.map((link) => {
                  const isDropdownOpen = openMobileDropdown === link.label;

                  return (
                    <div
                      className={`${styles["nav__item-container"]} ${link.hasDropdown ? styles["has-dropdown"] : ""} ${isDropdownOpen ? styles["mobile-dropdown-active"] : ""}`}
                      key={link.label}
                      onMouseLeave={() => setForceCloseMenu(false)}
                    >
                      <NavLink
                        to={link.label === "Academics" ? "#" : link.to}
                        className={({ isActive }) => {
                          if (link.label === "Academics") {
                            const isAcademicsActive = location.pathname.startsWith("/academics") || location.pathname.startsWith("/course-description");
                            return isAcademicsActive
                              ? `${styles.nav__link} ${styles["nav__link--active"]}`
                              : styles.nav__link;
                          }
                          return isActive
                            ? `${styles.nav__link} ${styles["nav__link--active"]}`
                            : styles.nav__link;
                        }}
                        onClick={(e) => {
                          if (link.label === "Academics") {
                            e.preventDefault();
                            if (window.innerWidth <= 1023) {
                              setOpenMobileDropdown(isDropdownOpen ? null : link.label);
                            }
                          } else {
                            setMenuOpen(false);
                            setOpenMobileDropdown(null);
                          }
                        }}
                      >
                        <span>{link.label}</span>
                        {link.label === "Academics" && (
                          <span className={styles["mobile-chevron"]} aria-hidden="true">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points={isDropdownOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                            </svg>
                          </span>
                        )}
                      </NavLink>

                      {link.label === "Academics" && (
                        <div className={styles["mega-menu-wrapper"]} style={forceCloseMenu ? { display: 'none' } : {}}>
                          <div className={styles["mega-menu"]}>
                            <div className={styles["mega-menu__left"]}>
                              <NavLink
                                to="/academics"
                                onClick={handleDropdownClick}
                                className={({ isActive }) => `${styles["mega-menu__title-link"]} ${isActive ? styles.active : ""}`}
                              >
                                <h4 className={styles["mega-menu__title"]}>Academics @MTCP</h4>
                              </NavLink>
                              <ul className={styles["mega-menu__list"]}>
                                <li><NavLink to="/course-description/b-pharm" onClick={handleDropdownClick}>B.Pharm</NavLink></li>
                                <li><NavLink to="/course-description/m-pharm" onClick={handleDropdownClick}>M.Pharm</NavLink></li>
                                <li><NavLink to="/course-description/d-pharm" onClick={handleDropdownClick}>D.Pharm</NavLink></li>
                                <li><NavLink to="/course-description/pharm-d" onClick={handleDropdownClick}>Pharm D</NavLink></li>
                                <li><NavLink to="/course-description/b-pharm-lateral" onClick={handleDropdownClick}>B.Pharm (Lateral)</NavLink></li>
                              </ul>
                            </div>
                            <div className={styles["mega-menu__right"]}>
                              <div className={styles["mega-menu__right-content"]}>
                                <h4>
                                  Excellence in <span>Pharmaceutical</span><br />
                                  <span>Education and Patient Care</span>
                                </h4>
                                <p>Mother Terasa College Of<br />Pharmacy</p>
                              </div>
                              <img src={drop1Img} alt="Pharmacy Student" className={styles["mega-menu__img"]} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Contact Us Button */}
              <Link to="/contact" className={styles["mobile-cta"]} onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </nav>

            <Link to="/contact" className={styles.cta}>
              Contact Us
            </Link>

            <button
              type="button"
              className={`${styles["menu-toggle"]} ${menuOpen ? styles["menu-toggle--open"] : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={handleMenuToggle}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {/* DYNAMIC FULL-WIDTH OVERLAY ANCHORED AT BOTTOM OF NAVBAR */}
          <div
            className={styles["mega-menu-overlay"]}
            style={forceCloseMenu ? { display: "none" } : {}}
            aria-hidden="true"
          />
        </div>
      </header>
    </div>
  );
}
