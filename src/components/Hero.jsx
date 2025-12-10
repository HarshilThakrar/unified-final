import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/assets/1.jpg',
      title: "India's Trusted Authority in",
      highlight: 'Bonded & Unbonded Post-Tensioning Systems',
      description: 'We engineer high-performance structural solutions that speed up construction, reduce material consumption, and deliver larger, smarter, more efficient buildings.'
    },
    {
      image: '/assets/construction-site.jpg',
      title: 'Excellence in',
      highlight: 'Structural Engineering Solutions',
      description: 'Our approach blends advanced engineering, precise execution, and a deep understanding of modern architectural requirements for superior results.'
    },
    {
      image: '/assets/construction-site-with-cranes-dubai.jpg',
      title: 'Building the Future with',
      highlight: 'Innovative PT Technology',
      description: 'From design to execution, we provide end-to-end post-tensioning solutions that transform the way structures are built across India.'
    },
    {
      image: '/assets/construction-houses-israel-2022view-building-complex-vintage-processing-selective-focus.jpg',
      title: 'Committed to',
      highlight: 'Quality & Precision',
      description: 'With years of expertise and a dedicated team, we ensure every project meets the highest standards of structural integrity and efficiency.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="hero-bg-video"
      >
        <source src="/assets/456584_Drone_Landscape_Bangkok_3840x2160.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* Left Side - Image Slider */}
        <div className="hero-left">
          <div className="hero-image-card">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.highlight} 
                  className="hero-main-image"
                />
                <div className="hero-image-content">
                  <h1 className="hero-title">
                    <span className="title-main">{slide.title}</span>
                    <span className="highlight">{slide.highlight}</span>
                  </h1>
                  <div className="hero-description">
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>

        {/* Right Side - Info Cards */}
        <div className="hero-right">
          {/* Why Unified Card */}
          <div className="info-card why-unified-card">
            <h2 className="card-title">WHY UNIFIED?</h2>
            <ul className="benefits-list">
              <li>Faster slabs with verified PT design</li>
              <li>Clean execution with trained teams</li>
              <li>Engineering accuracy from start to finish</li>
            </ul>
            <div className="card-images">
              <div className="card-image-placeholder"></div>
              <div className="card-image-placeholder"></div>
            </div>
          </div>

          {/* Explore PT Systems Card */}
          <div className="info-card explore-card">
            <h3 className="explore-title">EXPLORE OUR PT SYSTEMS</h3>
            <Link to="/technology" className="btn-technology">
              View Technology
            </Link>
          </div>
        </div>
      </div>

      {/* News Ticker */}
      <div className="ticker-wrapper">
        <div className="ticker">
          <div className="ticker-content">
            <span className="ticker-item">★ Quality Matters, Over Quantity ★</span>
            <span className="ticker-item">★ Post-tensioning you can trust ★</span>
            <span className="ticker-item">★ Delivering structural efficiency every time ★</span>
            <span className="ticker-item">★ Quality Matters, Over Quantity ★</span>
            <span className="ticker-item">★ Post-tensioning you can trust ★</span>
            <span className="ticker-item">★ Delivering structural efficiency every time ★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
