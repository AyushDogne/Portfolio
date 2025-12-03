import React from 'react';

const About = () => {
  const details = [
    { icon: 'bi-person', label: 'Name', value: 'Aayush Dogne' },
    { icon: 'bi-calendar', label: 'Birthday', value: '31 July 2002' },
    { icon: 'bi-phone', label: 'Phone', value: '+91 7489048015' },
    { icon: 'bi-geo-alt', label: 'Location', value: 'Indore, MP, India' },
    { icon: 'bi-envelope', label: 'Email', value: 'ayushdogne2002@gmail.com' },
    { icon: 'bi-briefcase', label: 'Status', value: 'Available for Work' }
  ];

  return (
    <section id="about" className="about section" style={{ background: '#f8f9fa' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px' }}>About Me</h2>
        <div 
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }}
        ></div>
        {/* <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
          I'm a passionate Full Stack MERN Developer with <strong style={{ color: '#667eea' }}>1+ years of professional experience</strong> in building modern web applications. 
          Currently working at Nenosystems Consulting Services, I specialize in creating scalable and 
          efficient solutions using React, Node.js, and MongoDB.
        </p> */}
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div 
              style={{
                background: '#fff',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#333' }}>
                <i className="bi bi-code-slash" style={{ marginRight: '10px', color: '#667eea' }}></i>
                Full Stack Developer
              </h3>
              
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                I completed my Bachelor of Computer Application from Dr. CV Raman University, Khandwa. 
                With <strong style={{ color: '#667eea' }}>1+ years of experience</strong> in both frontend and backend development, I create seamless user experiences 
                and robust server-side solutions. I'm always eager to learn new technologies and take on 
                challenging projects.
              </p>

              <div 
                style={{
                  background: 'linear-gradient(135deg, #667eea15, #764ba215)',
                  borderRadius: '15px',
                  padding: '25px',
                  marginBottom: '30px',
                  borderLeft: '4px solid #667eea'
                }}
              >
                <h4 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px', color: '#333' }}>
                  <i className="bi bi-briefcase-fill" style={{ marginRight: '10px', color: '#667eea' }}></i>
                  Professional Experience
                </h4>
                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555', margin: 0 }}>
                  With <strong style={{ color: '#667eea' }}>over 1 year of professional experience</strong> as a MERN Stack Developer, 
                  I have worked on various projects including e-commerce platforms, business management systems, 
                  and Chrome extensions. I have expertise in building scalable applications, implementing RESTful APIs, 
                  and creating responsive user interfaces that deliver exceptional user experiences.
                </p>
              </div>

              <div className="row g-4">
                {details.map((detail, index) => (
                  <div key={index} className="col-md-6" data-aos="fade-up" data-aos-delay={100 + (index * 50)}>
                    <div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '15px',
                        background: '#f8f9fa',
                        borderRadius: '10px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#e9ecef';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#f8f9fa';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <i 
                        className={`bi ${detail.icon}`}
                        style={{
                          fontSize: '1.5rem',
                          color: '#667eea',
                          marginRight: '15px',
                          width: '30px',
                          textAlign: 'center'
                        }}
                      ></i>
                      <div>
                        <strong style={{ display: 'block', color: '#333', marginBottom: '3px' }}>
                          {detail.label}:
                        </strong>
                        <span style={{ color: '#666' }}>{detail.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
