import { Link } from 'react-router-dom';
import './ProjectsSection.css';

// Icon Components
const BuildingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 56V20L32 8L56 20V56H8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 56V32H28V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 56V32H44V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="24" y="20" width="16" height="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CorporateIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="40" height="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 32H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 44H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 32V20L32 12L44 20V32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="20" y="48" width="8" height="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="36" y="48" width="8" height="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DataCenterIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="48" height="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 28H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 40H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="16" y="20" width="6" height="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="26" y="20" width="6" height="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="36" y="20" width="6" height="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="46" y="20" width="6" height="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="44" r="2" fill="currentColor"/>
    <circle cx="32" cy="44" r="2" fill="currentColor"/>
    <circle cx="44" cy="44" r="2" fill="currentColor"/>
  </svg>
);

const WarehouseIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 56V24L32 12L56 24V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 56H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 56V36H28V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 56V36H44V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="24" y="24" width="16" height="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HotelIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 56V20L32 8L52 20V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 56V28H28V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 56V28H44V56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="22" y="20" width="20" height="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="26" cy="24" r="1.5" fill="currentColor"/>
    <circle cx="38" cy="24" r="1.5" fill="currentColor"/>
  </svg>
);

const ParkingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="48" height="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 32H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 48H56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="16" y="20" width="12" height="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="36" y="20" width="12" height="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="16" y="36" width="12" height="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="36" y="36" width="12" height="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TransferSlabIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="28" width="48" height="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 28V20L32 12L48 20V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 36V44L32 52L48 44V36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="8" y="44" width="48" height="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 20L20 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 20L44 44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProjectsSection = () => {

  const projectTypes = [
    {
      title: 'Residential High-Rises',
      description: 'Slimmer slabs, reduced reinforcement, shorter cycles, and improved height efficiency.',
      icon: BuildingIcon
    },
    {
      title: 'Commercial & Corporate Buildings',
      description: 'Large column-free spaces, flexible office planning, and optimised floor grids.',
      icon: CorporateIcon
    },
    {
      title: 'IT Parks & Data Centres',
      description: 'High load-carrying capacity, tighter deflection control, and uninterrupted spans.',
      icon: DataCenterIcon
    },
    {
      title: 'Industrial Structures & Warehouses',
      description: 'Greater durability, higher strength, and rapid on-site execution.',
      icon: WarehouseIcon
    },
    {
      title: 'Hotels & Mixed-Use Developments',
      description: 'Architectural freedom for premium layouts, amenities, and complex slab profiles.',
      icon: HotelIcon
    },
    {
      title: 'Podiums & Parking Structures',
      description: 'Larger bays, fewer beams, smoother circulation, and reduced overall height.',
      icon: ParkingIcon
    },
    {
      title: 'Transfer Slabs & Heavy-Load Slabs',
      description: 'Superior crack control, reliable performance, and efficient force distribution.',
      icon: TransferSlabIcon
    }
  ];

  const projectList = [
    'Residential Towers',
    'Commercial Buildings',
    'IT Parks & Corporate Offices',
    'Malls & Mixed-Use Developments',
    'Industrial Structures',
    'Podiums & Parking Slabs',
    'Transfer Slabs & Transfer Girders',
    'Hotels & Institutional Projects'
  ];


  return (
    <section className="projects-section">
      <div className="projects-container">
        {/* Section Title */}
        <div className="section-title-wrapper">
          <h2 className="section-main-title">HOW OUR SYSTEMS ADD VALUE ACROSS PROJECT TYPES</h2>
        </div>

        {/* Header Section */}
        <div className="projects-header">
          <div className="projects-intro">
            <h2 className="projects-title">Post-tensioning is not just reinforcement.</h2>
            <p className="projects-subtitle">
              It is a structural strategy that transforms slab efficiency, reduces cost, and expands architectural possibilities.
            </p>
            <p className="projects-delivery-text">
              Unified delivers PT solutions across:
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid-wrapper">
          <div className="cards-grid">
            {projectTypes.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="project-card">
                  <div className="card-icon">
                    <IconComponent />
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Text */}
        <div className="projects-closing">
          <p className="closing-text">
            Across all building types, PT creates measurable structural and commercial advantages — and Unified ensures each system is executed with absolute precision.
          </p>
        </div>

        {/* Project Types List */}
        <div className="project-types-section">
          <h3 className="types-title">Types of Projects We Deliver</h3>
          <p className="types-intro">Unified delivers PT systems for:</p>
          <ul className="project-types-list">
            {projectList.map((type, index) => (
              <li key={index} className="project-type-item">
                <span className="bullet">•</span>
                <span className="type-text">{type}</span>
              </li>
            ))}
          </ul>
          <p className="types-closing">
            Each structure is engineered with optimised slab thickness, precise tendon geometry, and targeted cost savings — without compromising safety or serviceability.
          </p>
        </div>

        {/* CTA Button */}
        <div className="projects-cta">
          <Link to="/our-projects" className="cta-button">
            View Our Projects
            <span className="cta-arrow">&#10095;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

