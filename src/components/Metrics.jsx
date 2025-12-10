import { useEffect, useRef, useState } from 'react';
import './Metrics.css';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([false, false, false, false]);
  const [countedValues, setCountedValues] = useState({
    projects: 0,
    area: 0,
    cities: 0,
    clients: '0%'
  });
  const sectionRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const metrics = [
    {
      number: countedValues.projects,
      suffix: '+',
      label: 'PT Projects',
      description: 'Projects',
      maxValue: 120,
      duration: 2000
    },
    {
      number: countedValues.area,
      suffix: 'M+',
      label: 'sq.ft PT',
      description: 'Built-Up Area',
      maxValue: 17,
      duration: 2000
    },
    {
      number: countedValues.cities,
      suffix: '+',
      label: 'Major Cities',
      description: 'Cities Served',
      maxValue: 10,
      duration: 1500
    },
    {
      number: countedValues.clients,
      suffix: '',
      label: 'Repeat Engagements',
      description: 'Repeat Clients',
      isPercentage: true,
      duration: 2000
    }
  ];

  useEffect(() => {
    // Main section observer - triggers earlier
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px -50px 0px' // Trigger 100px before section enters viewport
      }
    );

    // Individual card observers for staggered animations
    const cardObservers = cardRefs.map((cardRef, index) => {
      return new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCardVisibility(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { 
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        }
      );
    });

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    cardRefs.forEach((cardRef, index) => {
      if (cardRef.current) {
        cardObservers[index].observe(cardRef.current);
      }
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      cardRefs.forEach((cardRef, index) => {
        if (cardRef.current) {
          cardObservers[index].unobserve(cardRef.current);
        }
      });
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Easing function for smooth animation
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    // Animate Projects
    const animateProjects = () => {
      let startTime = null;
      const end = 120;
      const duration = 2500;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const value = Math.floor(eased * end);
        
        setCountedValues(prev => ({ ...prev, projects: value }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCountedValues(prev => ({ ...prev, projects: end }));
        }
      };
      
      requestAnimationFrame(animate);
    };

    // Animate Area
    const animateArea = () => {
      let startTime = null;
      const end = 17;
      const duration = 2500;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const value = Math.floor(eased * end);
        
        setCountedValues(prev => ({ ...prev, area: value }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCountedValues(prev => ({ ...prev, area: end }));
        }
      };
      
      requestAnimationFrame(animate);
    };

    // Animate Cities
    const animateCities = () => {
      let startTime = null;
      const end = 10;
      const duration = 2000;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const value = Math.floor(eased * end);
        
        setCountedValues(prev => ({ ...prev, cities: value }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCountedValues(prev => ({ ...prev, cities: end }));
        }
      };
      
      requestAnimationFrame(animate);
    };

    // Animate Clients (Percentage)
    const animateClients = () => {
      let startTime = null;
      const end = 85; // Average of 80-90%
      const duration = 2500;
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const value = Math.floor(eased * end);
        
        if (progress >= 1) {
          setCountedValues(prev => ({ ...prev, clients: '80–90%' }));
        } else {
          setCountedValues(prev => ({ ...prev, clients: `${value}%` }));
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    };

    // Stagger the animations with better timing
    const delays = [200, 400, 600, 800];
    setTimeout(() => animateProjects(), delays[0]);
    setTimeout(() => animateArea(), delays[1]);
    setTimeout(() => animateCities(), delays[2]);
    setTimeout(() => animateClients(), delays[3]);
  }, [isVisible]);

  return (
    <section className="metrics-section" ref={sectionRef}>
      <div className="metrics-container">
        <div className={`metrics-grid ${isVisible ? 'animate-in' : ''}`}>
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              ref={cardRefs[index]}
              className={`metric-card ${cardVisibility[index] ? 'card-visible' : ''}`}
              data-index={index}
            >
              <div className="metric-number">
                {metric.isPercentage ? metric.number : `${metric.number}${metric.suffix}`}
              </div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-description">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

