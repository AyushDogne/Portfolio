import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['Full Stack Developer', 'MERN Stack Developer', 'React Specialist', 'Problem Solver'],
        loop: true,
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        showCursor: true,
        cursorChar: '|'
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="hero section dark-background"
      style={{
        background: 'linear-gradient(135deg, #000000ff 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Unique animated particles background */}
      <div className="particles-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              '--delay': `${i * 0.1}s`,
              '--duration': `${5 + (i % 3) * 2}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>

      {/* Interactive gradient that follows mouse */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.14) 0%, transparent 20%)`,
          transition: 'background 0.3s ease-out',
          pointerEvents: 'none'
        }}
      ></div>

      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
      
      <div 
        className="container" 
        data-aos="fade-up" 
        data-aos-delay="100"
        style={{ 
          position: 'relative',
          zIndex: 2,
          color: '#ffffff',
          textAlign: 'center',
          paddingTop: '120px',
          paddingBottom: '80px'
        }}
      >
        <div data-aos="zoom-in" data-aos-delay="200">
          <h1 
            className="hero-title"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              marginBottom: '20px',
              background: 'linear-gradient(45deg, #fff, #e0e7ff, #fff)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 3s linear infinite'
            }}
          >
            Aayush Dogne
          </h1>
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <p 
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
              marginBottom: '30px',
              opacity: 0.95
            }}
          >
            I'm a <span className="typed" ref={typedRef} style={{ color: '#ffd700', fontWeight: 600 }}></span>
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" style={{ marginTop: '40px' }}>
          <a 
            href="#about" 
            className="btn btn-primary hero-cta"
            style={{
              padding: '15px 40px',
              fontSize: '1.1rem',
              borderRadius: '50px',
              background: 'rgba(255,255,255,0.2)',
              border: '2px solid rgba(255,255,255,0.3)',
              color: '#fff',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.3)';
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Know More About Me</span>
            <span className="btn-ripple"></span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(var(--x-offset, 20px), var(--y-offset, -30px)) scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes shape-rotate {
          0% { transform: rotate(0deg) translateX(0); }
          100% { transform: rotate(360deg) translateX(100px); }
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          left: var(--x);
          top: var(--y);
          animation: particle-float var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .shape {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20%;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 10%;
          animation: shape-rotate 20s linear infinite;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
          animation: shape-rotate 25s linear infinite reverse;
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 20%;
          animation: shape-rotate 15s linear infinite;
          border-radius: 50%;
        }

        .shape-4 {
          width: 120px;
          height: 120px;
          top: 30%;
          right: 30%;
          animation: shape-rotate 30s linear infinite reverse;
          border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
        }

        .hero-cta {
          position: relative;
        }

        .btn-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .hero-cta:hover .btn-ripple {
          width: 300px;
          height: 300px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
