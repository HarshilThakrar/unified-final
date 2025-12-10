import { Link } from 'react-router-dom';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="who-we-are-container">
        {/* Header */}
        <div className="who-header">
          <div className="who-header-content">
            <h2 className="who-title">Who We Are</h2>
            <p className="who-subtitle">
              Unified is an engineering-focused post-tensioning company that operates as a technical partner, not a generic service vendor. Our purpose is clear: help clients achieve efficient, safe, and optimised structures through disciplined, methodical post-tensioning practice.
            </p>
            
          </div>
        </div>

        {/* Cards Container */}
        <div className="who-cards">
          {/* Left Card */}
          <div className="who-card">
            <div className="who-card-image">
              <img 
                src="/assets/1.jpg" 
                alt="Building a Sustainable Future" 
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="who-card-content">
              <h3 className="who-card-title">Building a Sustainable Future</h3>
              <p className="who-card-description">
                We work with a system-driven approach that integrates PT into a project with accuracy, planning, and complete engineering alignment. Every decision—design, detailing, material supply, installation, stressing, and grouting—is managed with technical intent and controlled execution.
              </p>
              <Link to="/about-us" className="learn-more-btn">
                Learn More <span className="arrow">&#10095;</span>
              </Link>
            </div>
          </div>

          {/* Middle Image Section */}
          <div className="who-image-section">
            <img 
              src="/assets/construction-site-with-cranes-dubai.jpg" 
              alt="Construction Site" 
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Right Card - Operational Philosophy */}
          <div className="who-card philosophy-card">
            <div className="who-card-image">
              <img 
                src="/assets/construction-site.jpg" 
                alt="Our Operational Philosophy" 
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="who-card-content">
              <h3 className="who-card-title">Our Operational Philosophy</h3>
              <p className="who-card-description">
                Unified Post-Tensioning Systems LLP functions on a direct, disciplined, and methodical workflow. We combine technical understanding with on-site precision to ensure that every PT element—duct routing, strand placement, anchorage zones, stressing, grouting, and logistics—is implemented exactly as designed.
              </p>
              <p className="who-card-description">
                Our capability comes from experienced supervisors, trained installation teams, and a management structure built around planning, coordination, and accountability. We work closely with architects, structural consultants, and contractors so that the PT system supports the larger engineering objective of the project—reliably and consistently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

