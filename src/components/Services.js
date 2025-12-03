import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Services = () => {
  const services = [
    {
      title: 'AWS EC2',
      icon: 'bi-cloud',
      color: '#FF9900',
      description: 'Elastic Compute Cloud for scalable virtual servers and cloud infrastructure management'
    },
    {
      title: 'AWS Amplify',
      icon: 'bi-lightning-charge',
      color: '#FF9900',
      description: 'Full-stack cloud platform for building and deploying scalable web and mobile applications'
    },
    {
      title: 'Firebase',
      icon: 'bi-fire',
      color: '#FFA000',
      description: 'Google\'s platform for app development with authentication, database, hosting, and cloud functions'
    },
    {
      title: 'Firebase Auth',
      icon: 'bi-shield-check',
      color: '#FFA000',
      description: 'Secure authentication service supporting multiple sign-in methods and user management'
    },
    {
      title: 'Firestore',
      icon: 'bi-database',
      color: '#FFA000',
      description: 'NoSQL cloud database for real-time data synchronization and offline support'
    },
    {
      title: 'Firebase Hosting',
      icon: 'bi-globe',
      color: '#FFA000',
      description: 'Fast and secure web hosting with CDN integration and automatic SSL certificates'
    }
  ];

const theridparty = [
  {
    title: 'WhiteBooks',
    icon: 'bi-journal-text',
    color: '#FF9900',
    description: 'Integrated WhiteBooks API to manage structured legal/business data inside the application.'
  },
  {
    title: 'UnSiloed AI',
    icon: 'bi-cpu-fill',
    color: '#FF9900',
    description: 'Transformed complex AI output into structured data suitable for UI rendering and backend storage.'
  },
  {
    title: 'Fracto OCR',
    icon: 'bi-file-earmark-richtext',
    color: '#FFA000',
    description: 'Integrated Fracto OCR API to extract text from images, receipts, and PDF files.'
  },
  {
    title: 'Resend Mail API',
    icon: 'bi-envelope-check',
    color: '#FFA000',
    description: 'Used Resend Email API for transactional email delivery (OTP, notifications, system alerts).'
  }
];

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


  return (
    <div>
    <section id="cloud-services" className="services section" style={{ background: '#f8f9fa' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px' }}>Cloud Services & Infrastructure</h2>
        <div 
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }}
        ></div>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>Cloud platforms and services I worked with</p>
      </div>

      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '35px 25px',
                  textAlign: 'center',
                  boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  border: '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${service.color}30`;
                  e.currentTarget.style.borderColor = service.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    transition: 'all 0.4s ease',
                    boxShadow: `0 10px 30px ${service.color}40`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <i 
                    className={`bi ${service.icon}`}
                    style={{ 
                      fontSize: '2.2rem', 
                      color: '#fff'
                    }}
                  ></i>
                </div>
                
                <h4 
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    marginBottom: '15px',
                    color: '#333'
                  }}
                >
                  {service.title}
                </h4>
                
                <p 
                  style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    margin: 0,
                    lineHeight: '1.6'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        <section id="cloud-services" className="services section" style={{ background: '#f8f9fa' }}>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '15px' }}>Third-Party APIs & Services</h2>
        <div 
          style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }}
        ></div>
        <p style={{ fontSize: '1.1rem', color: '#666' }}>Integration and services I worked with</p>
      </div>

      <div className="container">
        <div className="row g-4">
          {theridparty.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                style={{
                  background: '#fff',
                  borderRadius: '20px',
                  padding: '35px 25px',
                  textAlign: 'center',
                  boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  height: '100%',
                  border: '2px solid transparent',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${service.color}30`;
                  e.currentTarget.style.borderColor = service.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 5px 25px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    transition: 'all 0.4s ease',
                    boxShadow: `0 10px 30px ${service.color}40`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <i 
                    className={`bi ${service.icon}`}
                    style={{ 
                      fontSize: '2.2rem', 
                      color: '#fff'
                    }}
                  ></i>
                </div>
                
                <h4 
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    marginBottom: '15px',
                    color: '#333'
                  }}
                >
                  {service.title}
                </h4>
                
                <p 
                  style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    margin: 0,
                    lineHeight: '1.6'
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

          <section id="testimonials" className="testimonials section" style={{ background: '#fff' }}>
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
      </section>
    </div>
  );
};

export default Services;

