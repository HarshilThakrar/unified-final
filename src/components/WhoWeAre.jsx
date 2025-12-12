import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './WhoWeAre.css';

const WhoWeAre = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);

  const slides = [
    {
      image: '/assets/construction-site-with-cranes-dubai.jpg',
      title: "Engineering Excellence",
      text: "Unified is an engineering-focused post-tensioning company that operates as a technical partner, not a generic service vendor. Our purpose is clear: help clients achieve efficient, safe, and optimised structures through disciplined, methodical post-tensioning practice."
    },
    {
      image: '/assets/construction-site.jpg',
      title: "System-Driven Approach",
      text: "We work with a system-driven approach that integrates PT into a project with accuracy, planning, and complete engineering alignment. Every decision—design, detailing, material supply, installation, stressing, and grouting—is managed with technical intent and controlled execution."
    },
    {
      image: '/assets/1.jpg',
      title: "Technical Partnership",
      text: "Our capability comes from experienced supervisors, trained installation teams, and a management structure built around planning, coordination, and accountability. We work closely with architects, structural consultants, and contractors."
    },
    {
      image: '/assets/construction-houses-israel-2022view-building-complex-vintage-processing-selective-focus.jpg',
      title: "Quality & Precision",
      text: "Unified Post-Tensioning Systems LLP functions on a direct, disciplined, and methodical workflow. We combine technical understanding with on-site precision to ensure that every PT element is implemented exactly as designed."
    }
  ];

  const operationalSteps = [
    "Understand the structural intent and engineering requirements",
    "Plan the PT layout, sequencing, and execution methodology",
    "Deliver complete technical documentation and verified performance",
    "Execute with trained teams, controlled supervision, and rigorous QA/QC",
    "Monitor and optimize performance throughout the project lifecycle",
    "Ensure quality assurance and compliance with industry standards",
    "Provide ongoing support and maintenance for long-term reliability"
  ];

  useEffect(() => {
    let ticking = false;
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const sectionTop = rect.top;
          const sectionHeight = section.offsetHeight;
          const scrollY = window.scrollY;
          const scrollDelta = scrollY - lastScrollY.current;

          // Check if section is entering or in viewport
          if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
            // Calculate progress: 0 when section top reaches viewport top, 1 when section bottom reaches viewport top
            const scrollableDistance = sectionHeight;
            const scrolled = Math.max(0, viewportHeight - sectionTop);
            const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
            
            setScrollProgress(progress);

            // Determine current slide based on progress
            const totalSlides = slides.length;
            const slideProgress = progress * totalSlides;
            const slideIndex = Math.min(
              Math.floor(slideProgress),
              totalSlides - 1
            );

            if (slideIndex !== currentSlide) {
              setCurrentSlide(slideIndex);
            }
          }

          lastScrollY.current = scrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSlide, slides.length]);

  return (
    <section className="who-we-are-section" ref={sectionRef}>
      <div className="who-scroll-wrapper">
        <div className="who-we-are-container">
          <div className="who-main-layout">
            {/* Left Section - Text Content */}
            <div className="who-left-section">
              <h2 className="who-title">WHO WE ARE ?</h2>
              
              {/* Scroll-driven text slides */}
              <div className="who-text-slides">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`text-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-text">{slide.text}</p>
                  </div>
                ))}
              </div>

              <h3 className="who-subheading">How We Operate ?</h3>
              <div className="operational-steps-slider">
                <div className="steps-container">
                  {operationalSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`step-box ${index === (currentSlide % operationalSteps.length) ? 'active' : ''}`}
                    >
                      <span className="step-text">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="slider-dots">
                  {operationalSteps.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === (currentSlide % operationalSteps.length) ? 'active' : ''}`}
                      onClick={() => {}}
                      aria-label={`Step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Center Image Section - Scroll-driven image slides */}
            <div className="who-center-image">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`image-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    loading="lazy"
                  />
                  <div className="unified-text-overlay">UNIFIED</div>
                </div>
              ))}
            </div>

            {/* Right Section - Operational Philosophy */}
            <div className="who-right-section">
              <div className="philosophy-header">
                <h3 className="philosophy-title">Our Operational Philosophy</h3>
              </div>
              <div className="philosophy-content">
                <p className="philosophy-text">
                  Unified Post-Tensioning Systems LLP functions on a direct, disciplined, and methodical workflow. We combine technical understanding with on-site precision to ensure that every PT element—duct routing, strand placement, anchorage zones, stressing, grouting, and logistics—is implemented exactly as designed.
                </p>
                <p className="philosophy-text">
                  Our capability comes from experienced supervisors, trained installation teams, and a management structure built around planning, coordination, and accountability. We work closely with architects, structural consultants, and contractors so that the PT system supports the larger engineering objective of the project—reliably and consistently.
                </p>
              </div>
              <Link to="/about-us" className="about-link">
                About Us
                <span className="link-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

