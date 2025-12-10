import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about-us' },
    { name: 'TECHNOLOGY', path: '/technology' },
    { name: 'RESOURCES', path: '/resources' },
    { name: 'EXECUTION PROCESS', path: '/execution-process' },
    { name: 'OUR PROJECTS', path: '/our-projects' },
    { name: 'CAREER', path: '/career' }
  ];

  return (
    <header className="navbar-container">
      {/* Top Bar */}
      <div className="top-bar">
        {/* Social Icons */}
        <div className="social-icons">
          <a href="#" className="social-icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <FaXTwitter />
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/assets/Unified New Logo.png" alt="Unified Post Tensioning Systems LLP" className="logo-img" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-btn" aria-label="Search">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact-us" className="contact-btn">
          CONTACT US
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
