import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTop;

