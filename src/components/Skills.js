import React from 'react';

const Skills = () => {
  const skills = [
    { 
      title: 'HTML5', 
      icon: 'bi-filetype-html',
      color: '#e34c26',
      description: 'Semantic markup and modern HTML5 features'
    },
    { 
      title: 'CSS3', 
      icon: 'bi-filetype-css',
      color: '#264de4',
      description: 'Advanced styling, animations, and responsive design'
    },
    { 
      title: 'JavaScript', 
      icon: 'bi-filetype-js',
      color: '#f7df1e',
      description: 'ES6+, async programming, and modern JS patterns'
    },
    { 
      title: 'React.js', 
      icon: 'bi-code-square',
      color: '#61dafb',
      description: 'Component-based UI development with hooks and context'
    },
    { 
      title: 'Next.js', 
      icon: 'bi-lightning',
      color: '#000000',
      description: 'React framework for production with SSR and SSG capabilities'
    },
    { 
      title: 'React Native', 
      icon: 'bi-phone',
      color: '#61dafb',
      description: 'Cross-platform mobile app development with React'
    },
    { 
      title: 'Node.js', 
      icon: 'bi-server',
      color: '#339933',
      description: 'Server-side JavaScript and RESTful API development'
    },
    { 
      title: 'Express.js', 
      icon: 'bi-diagram-3',
      color: '#000000',
      description: 'Fast, minimalist web framework for Node.js'
    },
    { 
      title: 'MongoDB', 
      icon: 'bi-database',
      color: '#47a248',
      description: 'NoSQL database design and optimization'
    },
    { 
      title: 'MySQL', 
      icon: 'bi-database-check',
      color: '#00758f',
      description: 'Relational database management and SQL queries'
    },
    { 
      title: 'PostgreSQL', 
      icon: 'bi-database-fill',
      color: '#336791',
      description: 'Advanced open-source relational database system'
    },
    { 
      title: 'Prisma ORM', 
      icon: 'bi-box',
      color: '#2d3748',
      description: 'Next-generation ORM for type-safe database access'
    },
    { 
      title: 'Bootstrap', 
      icon: 'bi-bootstrap',
      color: '#7952b3',
      description: 'Responsive framework and component library'
    }
  ];

  return (
    <section id="services" className="services section" style={{ background: '#fff' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px' }}>Skills & Technologies</h2>
        <div 
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }}
        ></div>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>Technologies I worked with</p>
      </div>

      <div className="container">
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div
                className="skill-card"
                style={{
                  background: '#fff',
                  borderRadius: '15px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  border: '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateY(5deg)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                  e.currentTarget.style.borderColor = skill.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div
                  className="skill-icon-wrapper"
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}30)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.15) rotate(360deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <i 
                    className={`bi ${skill.icon}`}
                    style={{
                      fontSize: '2rem',
                      color: skill.color,
                      transition: 'all 0.3s ease'
                    }}
                  ></i>
                </div>
                <h4 
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '10px',
                    color: '#333'
                  }}
                >
                  {skill.title}
                </h4>
                <p 
                  style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    margin: 0,
                    lineHeight: '1.5'
                  }}
                >
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
