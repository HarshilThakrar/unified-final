import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './WhatWeDo.css';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`what-we-do ${isVisible ? 'visible' : ''}`}
    >
      <div className="what-we-do-container">
        <h2 className="section-title">WHAT WE DO?</h2>
        
        <p className="section-description">
          Unified specialises in designing and delivering Bonded and Unbonded Post-Tensioning Systems for projects where 
          structural efficiency, speed, and long-span performance are critical. We support architects, structural consultants, and 
          developers by providing systems that enhance the behaviour of concrete, optimise load paths, and maximise usable space 
          within the structure.
        </p>

        <p className="section-highlight">
          <strong>Our work is built around two core post-tensioning systems—each engineered for specific structural goals and project conditions.</strong>
        </p>

        {/* Blue Background Wrapper */}
        <div className="blue-bg-wrapper">
          {/* PT Systems Cards */}
          <div className="pt-systems-grid">
            <div className="pt-card">
              <div className="pt-card-image">
                <img src="/assets/construction-site.jpg" alt="Bonded Post-Tensioning" />
              </div>
            <div className="pt-card-content">
              <h3 className="pt-card-title">BONDED POST-TENSIONING</h3>
              <p className="pt-card-description">
                Bonded PT offers superior crack control, long-term durability, and 
                high structural reliability for slabs that demand precision and 
                safety under heavy loads...
              </p>
              <Link to="/technology" className="learn-more-link">Learn More <span className="arrow">&#10095;</span></Link>
            </div>
            </div>

            <div className="pt-card">
              <div className="pt-card-image">
                <img src="/assets/construction-site-with-cranes-dubai.jpg" alt="Unbonded Post-Tensioning" />
              </div>
            <div className="pt-card-content">
              <h3 className="pt-card-title">UNBONDED POST-TENSIONING</h3>
              <p className="pt-card-description">
                Unbonded PT provides faster construction cycles, flexible floor 
                planning, and efficient performance for modern high-rise and 
                commercial projects...
              </p>
              <Link to="/technology" className="learn-more-link">Learn More <span className="arrow">&#10095;</span></Link>
            </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="results-section">
            <h3 className="results-title">The Results You Can Expect</h3>
            <div className="results-grid">
              <div className="result-card">
                <span className="result-text">Faster Construction</span>
              </div>
              <div className="result-card">
                <span className="result-text">Cost Efficiency</span>
              </div>
              <div className="result-card">
                <span className="result-text">Superior Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

