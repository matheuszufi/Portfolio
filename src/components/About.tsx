import React from 'react';
import matheusAboutImage from '../assets/images/matheus.png';

const About: React.FC = () => {
  const stats = [
    { number: "15+", label: "Projetos Concluídos" },
    { number: "3+", label: "Anos de Experiência" },
    { number: "8+", label: "Tecnologias Dominadas" }
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">Sobre Mim</h2>
            <p className="about-description">
              Sou um desenvolvedor Full Stack com mais de 3 anos de experiência, especializado em criar 
              soluções digitais inovadoras e eficientes. Minha paixão pela tecnologia me levou a dominar 
              diversas ferramentas e linguagens de programação.
            </p>
            <p className="about-description">
              Tenho experiência sólida tanto no frontend quanto no backend, trabalhando com tecnologias 
              modernas como React, Node.js, TypeScript e C#. Sempre busco entregar projetos de alta 
              qualidade que atendam às necessidades específicas de cada cliente.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-image-container">
              <img 
                src={matheusAboutImage} 
                alt="Matheus Zufi - Desenvolvedor Full Stack" 
                className="about-profile-image"
                loading="lazy"
              />
              <div className="about-image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;