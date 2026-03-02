import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const tools = [
    {
      name: 'Trello',
      role: 'Project Management',
      icon: 'bi-kanban',
      color: '#0079bf',
      description: 'Visual collaboration tool for organizing projects into boards and managing workflows efficiently.'
    },
    {
      name: 'GitHub',
      role: 'Version Control',
      icon: 'bi-github',
      color: '#24292e',
      description: 'Web-based platform for version control and collaborative software development using Git.'
    },
    {
      name: 'JIRA',
      role: 'Project Management',
      icon: 'bi-bug',
      color: '#0052cc',
      description: 'Project management and ticketing tool for technical teams to plan, track, and manage software products.'
    },
    {
      name: 'Slack',
      role: 'Communication',
      icon: 'bi-chat-dots',
      color: '#4a154b',
      description: 'Messaging app for businesses that helps teams communicate and collaborate effectively.'
    },
    {
      name: 'VS Code',
      role: 'Code Editor',
      icon: 'bi-code-slash',
      color: '#007acc',
      description: 'Free source code editor with built-in support for JavaScript, TypeScript, and Node.js.'
    },
    {
      name: 'Postman',
      role: 'API Testing',
      icon: 'bi-send',
      color: '#FF6C37',
      description: 'API development and testing platform for building, testing, and documenting APIs.'
    },
];

  const experiences = [
    {
        company: 'Viionn Labs Pvt Ltd',
        period: 'OCT 2024 - Present',
        role: 'Full Stack Web Developer',
        technologies: ['MERN Stack', 'Next.js','MySQL','PostgreSQL','AWS EC2','Amplify','Firebase'],
        tools: ['GitHub', 'Jira', 'Trello', 'Slack', 'Skype', 'VS Code', 'Postman'],
        description: 'Viionn Labs Pvt Ltd is a software development company that provides software development services to businesses.',
        link: 'https://viionn.com/',
        color: '#667eea'
    },
    // {
    //   company: 'Nenosystems Consulting Services',
    //   period: 'Nov 2024 - April 2025',
    //   role: 'MERN Stack Developer',
    //   technologies: ['MERN Stack', 'Next.js','MySQL','PostgreSQL','AWS EC2','Amplify','Firebase'],
    //   tools: ['GitHub', 'Jira', 'Trello', 'Slack', 'Skype', 'VS Code', 'Postman'],
    //   description: 'Leading Product Development and Custom Software Development company specializing in product automation and integrated solutions using Open Source Technologies.',
    //   link: 'https://nenosystems.com/',
    //   color: '#667eea'
    // },
    {
      company: 'Uraan Softskills Pvt Ltd',
      period: 'Jan 2024 - July 2024',
      role: 'MERN Stack Developer (Intern)',
      technologies: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
      tools: ['GitHub', 'JIRA', 'Trello', 'Slack'],
      description: 'Innovative web development company with a creative team of developers specializing in customized web, app, and software development formats.',
      link: 'https://www.uraansoftskills.com/',
      color: '#764ba2'
    }
  ];

  return (
    <>
      {/* <section id="testimonials" className="testimonials section" style={{ background: '#fff' }}>
        <div className="container section-title" data-aos="fade-up">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px' }}>Tools & Software</h2>
          <div 
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              margin: '0 auto 20px',
              borderRadius: '2px'
            }}
          ></div>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>Tools I use for project planning and management</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className="init-swiper"
            style={{ paddingBottom: '50px' }}
          >
            {tools.map((tool, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '30px',
                    textAlign: 'center',
                    boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    minHeight: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                    e.currentTarget.style.borderColor = tool.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,0,0,0.08)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${tool.color}15, ${tool.color}30)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <i 
                        className={`bi ${tool.icon}`}
                        style={{ fontSize: '2rem', color: tool.color }}
                      ></i>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
                      {tool.name}
                    </h3>
                    <h4 style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>
                      {tool.role}
                    </h4>
                    <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.6', margin: 0 }}>
                      {tool.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      <section className="section" style={{ background: '#f8f9fa', paddingTop: '60px' }}>
        <div className="container section-title" data-aos="fade-up">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px' }}>Work Experience</h2>
          <div 
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              margin: '0 auto 20px',
              borderRadius: '2px'
            }}
          ></div>
        </div>

        <div className="container">
          <div className="row g-4 justify-content-center">
            {experiences.map((exp, index) => (
              <div key={index} className="col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '35px',
                    height: '100%',
                    boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    borderLeft: `5px solid ${exp.color}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,0,0,0.08)';
                  }}
                >
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '5px', color: '#333' }}>
                      {exp.company}
                    </h3>
                    <p style={{ color: exp.color, fontWeight: 600, marginBottom: '8px' }}>
                      {exp.period}
                    </p>
                    <p style={{ color: '#666', fontSize: '0.95rem' }}>
                      <i className="bi bi-briefcase" style={{ marginRight: '5px' }}></i>
                      {exp.role}
                    </p>
                  </div>

                  <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px' }}>
                    {exp.description}
                  </p>

                  <div style={{ marginBottom: '15px' }}>
                    <strong style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
                      Technologies:
                    </strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          style={{
                            padding: '5px 12px',
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
                  </div>

                  <div>
                    <strong style={{ display: 'block', marginBottom: '8px', color: '#333' }}>
                      Tools:
                    </strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {exp.tools.map((tool, toolIdx) => (
                        <span
                          key={toolIdx}
                          style={{
                            padding: '5px 12px',
                            background: '#e9ecef',
                            borderRadius: '15px',
                            fontSize: '0.85rem',
                            color: '#666'
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '20px',
                      color: exp.color,
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
                    Visit Website <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
