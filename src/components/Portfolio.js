import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Togl.ai',
      description: 'Chrome Extension - One click to log in, pay, and manage your digital life',
      tech: ['Chrome Extension', 'JavaScript', 'React'],
      link: 'https://www.togl.ai/',
      icon: 'bi-browser-chrome',
      color: '#4285F4'
    },
    {
      id: 2,
      title: 'Logi360',
      description: 'Business Management System - Comprehensive logistics and business operations platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://logi360.in/',
      icon: 'bi-truck',
      color: '#667eea'
    },
    {
      id: 3,
      title: 'Brick-Data',
      description: 'Automated Energy Management - Smart energy monitoring and optimization system',
      tech: ['React', 'Node.js', 'IoT'],
      link: 'https://brick-data.com/en-US',
      icon: 'bi-lightning-charge',
      color: '#764ba2'
    },
    {
      id: 4,
      title: 'Glow-Mart',
      description: 'E-Commerce Platform - Full-featured online shopping platform',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: 'https://myproject-ten-rosy.vercel.app/',
      icon: 'bi-cart-check',
      color: '#f093fb'
    },
    {
      id: 5,
      title: 'Astropush',
      description: 'Astrology Platform - Online platform providing astrology services and information',
      tech: ['React', 'Node.js', 'Express'],
      link: 'https://astropush.com/',
      icon: 'bi-stars',
      color: '#4facfe'
    }
  ];

  return (
    <section id="portfolio" className="portfolio section" style={{ background: '#f8f9fa' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px' }}>Projects</h2>
        <div 
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }}
        ></div>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>Some of my recent project</p>
      </div>

      <div className="container">
        <div className="row g-4" data-aos="fade-up" data-aos-delay="200">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '35px',
                  height: '100%',
                  boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '15px',
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <i 
                    className={`bi ${item.icon}`}
                    style={{ fontSize: '1.8rem', color: '#fff' }}
                  ></i>
                </div>
                
                <h4 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '10px', color: '#333' }}>
                  {item.title}
                </h4>
                
                <p style={{ color: '#666', marginBottom: '20px', flexGrow: 1, lineHeight: '1.6' }}>
                  {item.description}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  {item.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      style={{
                        display: 'inline-block',
                        padding: '5px 12px',
                        marginRight: '8px',
                        marginBottom: '8px',
                        background: '#f0f0f0',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        color: '#666'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: item.color,
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  View Project <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
