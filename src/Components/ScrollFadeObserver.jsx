import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollFadeObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    let timeoutId;
    let fallbackId;

    // Reset top scroll position before scanning page
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    } catch {
      window.scrollTo(0, 0);
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Remove existing animation classes on route change
    const existingActive = document.querySelectorAll(".fade-up-active, .fade-up-init, [data-fade-active]");
    existingActive.forEach((el) => {
      el.classList.remove("fade-up-active", "fade-up-init");
      delete el.dataset.fadeActive;
      el.style.removeProperty("transition-delay");
    });

    const runObserver = () => {
      initScrollFade();

      // Safety Fallback: Ensure no element in viewport stays hidden if observer misses it
      fallbackId = setTimeout(() => {
        document.querySelectorAll(".fade-up-init:not(.fade-up-active)").forEach((el) => {
          const rect = el.getBoundingClientRect();
          // Only activate if the element is near or inside the viewport
          if (rect.top < window.innerHeight + 200) {
            el.classList.add("fade-up-active");
            el.dataset.fadeActive = "true";
          }
        });
      }, 3000);
    };

    timeoutId = setTimeout(runObserver, 20);

    window.addEventListener("resize", runObserver);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(fallbackId);
      window.removeEventListener("resize", runObserver);
    };
  }, [pathname]);

  return null;
}

function initScrollFade() {
  const allSections = document.querySelectorAll(
    "section, footer, main > div, .section-wrapper"
  );

  if (!allSections.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up-active");
          entry.target.dataset.fadeActive = "true";
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.02,
      rootMargin: "0px 0px 50px 0px",
    }
  );

  allSections.forEach((section) => {
    const classListStr = section.className ? String(section.className).toLowerCase() : "";
    const idStr = section.id ? String(section.id).toLowerCase() : "";

    // Exclude Hero sections and top headers
    const isHero =
      section.dataset.hero === "true" ||
      classListStr.includes("hero") ||
      classListStr.includes("page-header") ||
      idStr.includes("hero") ||
      (Boolean(section.querySelector('[class*="hero"]')) &&
        section.parentElement?.tagName === "MAIN" &&
        section === section.parentElement.firstElementChild);

    if (isHero) {
      section.classList.remove("fade-up-init", "fade-up-active");
      return;
    }

    const targets = getAnimatableChildren(section);
    if (!targets || targets.length === 0) return;

    targets.forEach((el, index) => {
      el.classList.remove("fade-up-active");
      el.classList.add("fade-up-init");

      const customDelay = el.dataset.fadeDelay;
      const delay = customDelay !== undefined ? parseFloat(customDelay) : (index % 3) * 0.15;
      el.style.setProperty("transition-delay", `${delay}s`, "important");

      // Force synchronous layout reflow so browser commits initial opacity:0 & translateY(50px)
      void el.offsetWidth;

      // Observe each target element directly as it enters viewport
      observer.observe(el);
    });
  });
}

function getAnimatableChildren(section) {
  // If explicitly tagged with data-fade or data-fade-item
  const explicit = Array.from(section.querySelectorAll("[data-fade], [data-fade-item]"));
  if (explicit.length > 0) {
    explicit.sort((a, b) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    );
    return explicit;
  }

  const items = [];

  const add = (el) => {
    if (el && !items.includes(el) && !el.closest('[class*="hero"]')) {
      items.push(el);
    }
  };

  // Target headers
  const headerSelectors = [
    '[class*="eyebrow"]',
    '[class*="section-eyebrow"]',
    '[class*="section-title"]',
    '[class*="section-subtitle"]',
    '[class*="title"]',
    '[class*="subtitle"]',
    'h2',
    'h3',
  ];

  const headers = section.querySelectorAll(headerSelectors.join(", "));
  headers.forEach((h) => {
    const wrapper = h.closest('[class*="header"], [class*="inner"], [class*="top"]');
    if (wrapper && wrapper.parentElement === section && !items.includes(wrapper)) {
      add(wrapper);
    } else {
      add(h);
    }
  });

  // Target content items & cards
  const contentSelectors = [
    '[class*="stat-item"]',
    '[class*="resource-card"]',
    '[class*="product-card"]',
    '[class*="category-card"]',
    '[class*="facility-card"]',
    '[class*="grid-item"]',
    '[class*="gridImg"]',
    '[class*="detail-card"]',
    '[class*="contact-card"]',
    '[class*="testimonial-card"]',
    '[class*="testimonial"]',
    '[class*="faqItem"]',
    '[class*="faq-item"]',
    '[class*="facItem"]',
    '[class*="fac-item"]',
    '[class*="facultyCard"]',
    '[class*="faculty-card"]',
    '[class*="gallery-card"]',
    '[class*="news-card"]',
    '[class*="newsCard"]',
    '[class*="imageWrapper"]',
    '[class*="missionBlock"]',
    '[class*="visionBlock"]',
    '[class*="purposeTextBlock"]',
    '[class*="purposeBannerWrapper"]',
    '[class*="missionVisionImageWrapper"]',
    '[class*="courseCard"]',
    '[class*="course-card"]',
    '[class*="bullet-list"] > li',
    'img:not([class*="icon"]):not([class*="logo"])',
    '[class*="cta-content"]',
  ];

  const contentElements = Array.from(
    section.querySelectorAll(contentSelectors.join(", "))
  );

  contentElements.forEach((el) => {
    const isNestedInOtherTarget = contentElements.some(
      (other) => other !== el && other.contains(el)
    );
    if (!isNestedInOtherTarget) {
      add(el);
    }
  });

  // Fallback to top-level children
  if (items.length === 0) {
    Array.from(section.children).forEach((child) => {
      if (
        child.tagName !== "SCRIPT" &&
        child.tagName !== "STYLE" &&
        child.offsetWidth > 0 &&
        child.offsetHeight > 0
      ) {
        add(child);
      }
    });
  }

  // Sort strictly by DOM document order
  items.sort((a, b) =>
    a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
  );

  return items;
}
