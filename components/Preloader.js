import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidePreloader = () => {
      setIsVisible(false);
      // Force remove from DOM after state update
      setTimeout(() => {
        const preloaderElement = document.getElementById('preloader');
        if (preloaderElement) {
          preloaderElement.style.display = 'none';
          preloaderElement.style.visibility = 'hidden';
          preloaderElement.style.opacity = '0';
          preloaderElement.style.zIndex = '-1';
        }
      }, 100);
    };

    // Hide after a very short delay to show it briefly
    const timer = setTimeout(hidePreloader, 300);

    // Also hide on window load
    const handleLoad = () => {
      hidePreloader();
    };

    // Check if already loaded
    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
      // Ensure it's hidden on cleanup
      hidePreloader();
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      id="preloader" 
      style={{ 
        display: isVisible ? 'block' : 'none',
        visibility: isVisible ? 'visible' : 'hidden'
      }}
    ></div>
  );
};

export default Preloader;

