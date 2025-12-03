import React, { useState, useEffect } from 'react';
import myImg from '../img/ayushPaspot.jpg';
const Header = ({onResumeClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'portfolio', 'services', 'cloud-services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 0;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header id="header" className={`header dark-background d-flex flex-column ${isMenuOpen ? 'header-show' : ''}`}
     style={{ backgroundColor: "#1E172D" }}
    >
      <i
        className={`header-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
        onClick={toggleMenu}
      ></i>

      <div style={{ margin: '20px auto', textAlign: 'center' }}>
  <div
    style={{
      width: '100px',
      height: '130px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto',
      padding: '0',
      background: 'transparent',
      border: '3px solid rgba(56, 82, 111, 1)',
      boxSizing: 'content-box',
      position: 'relative'
    }}
  >
  <img
  src={myImg}
  alt="Profile"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    display: 'block',

    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
    border: 'none !important',
    padding: '0 !important',
    background: 'transparent !important',

    // ⭐ reduce light/glow
    filter: 'brightness(0.85) contrast(0.95)',
  }}
/>

  </div>

  <div
    style={{
      marginTop: '18px',
      fontSize: '2rem',
      fontWeight: 700,
      color: '#ffffffff'
    }}
  >
    AD
  </div>
</div>

{/* 
      <a href="#hero" className="logo d-flex align-items-center justify-content-center" onClick={(e) => handleNavClick(e, 'hero')}>
        <h1 className="sitename">Aayush Dogne</h1>
      </a> */}

      <div className="social-links text-center">
        <a href="https://www.facebook.com/aayush.dogne.5" className="facebook" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/ay_ush6912" className="instagram" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/aayush-dogne-a139b926b" className="linkedin" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a
              href="#hero"
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'hero')}
            >
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
  <a
    href="#resume"
    onClick={(e) => {
      e.preventDefault();
      if (onResumeClick) onResumeClick();

    }}
  >
    <i className="bi bi-file-earmark-text navicon"></i> Resume
  </a>
</li>

          <li>
            <a
              href="#portfolio"
              className={activeSection === 'portfolio' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'portfolio')}
            >
              <i className="bi bi-images navicon"></i> Project
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeSection === 'services' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'services')}
            >
              <i className="bi bi-hdd-stack navicon"></i>Skills
            </a>
          </li>
          <li>
            <a
              href="#cloud-services"
              className={activeSection === 'cloud-services' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'cloud-services')}
            >
              <i className="bi bi-cloud navicon"></i>Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

