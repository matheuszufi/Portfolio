import React from 'react';
import fluirLogo from '../assets/icons/logos/logofluireng.png';
import hotboxImg from '../assets/images/hotbox.png';
import coopenutriLogo from '../assets/images/logocoopenutri.webp';

interface Project {
  name: string;
  tech: string;
  description: string;
  logo: string;
  logoType?: 'emoji' | 'image';
  link: string;
  category: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      name: "E-commerce/ERP",
      tech: "React • Node.js • Firebase",
      description: "Sistema completo de e-commerce com ERP integrado, gestão de estoque, vendas e relatórios financeiros",
      logo: hotboxImg,
      logoType: 'image',
      link: "https://github.com/matheuszufi/HotBox",
      category: "Full Stack"
    },
    {
      name: "Fluir Engenharia (Landing Page)",
      tech: "HTML • JavaScript • Tailwind CSS",
      description: "Website corporativo moderno para empresa de engenharia com foco em projetos sustentáveis",
      logo: fluirLogo,
      logoType: 'image',
      link: "https://fluirengenhariainstalacoes.com.br/",
      category: "Website"
    },
    {
      name: "Gerenciador de Grupo Tibia",
      tech: "React • Tibia API • Firebase",
      description: "Sistema de gerenciamento para grupos de Tibia usando a API oficial do jogo para tracking e estatísticas",
      logo: "⚔️",
      link: "https://tibia-party-finder.vercel.app/",
      category: "Gaming"
    },
    {
      name: "Gerenciador de Dieta",
      tech: "React Native • Firebase • Nutrition API",
      description: "Aplicativo mobile para controle nutricional com banco de dados de alimentos e metas personalizadas",
      logo: "🥗",
      link: "https://gerenciador-de-dieta.vercel.app/",
      category: "Health"
    },
    {
      name: "Jogo RPG Unity",
      tech: "Unity • C# • Sistema de Combate",
      description: "Jogo RPG 2D desenvolvido em Unity com sistema de combate, inventário e progressão de personagem",
      logo: "🎮",
      link: "https://github.com/matheuszufi/MedievalGame",
      category: "Game Dev"
    },
    {
      name: "Coopenutri (Landing Page)",
      tech: "HTML5 • CSS3 • JavaScript • Bootstrap",
      description: "Website institucional responsivo para cooperativa de nutricionistas com design moderno e otimizado para SEO",
      logo: coopenutriLogo,
      logoType: 'image',
      link: "https://github.com/matheuszufi/COOPENUTRI-2.0",
      category: "Website"
    }
  ];

  return (
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Meus Projetos</h2>
          <p className="projects-subtitle">
            Alguns projetos que desenvolvi utilizando as mais diversas tecnologias
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-logo">
                  {project.logoType === 'image' ? (
                    <img 
                      src={project.logo} 
                      alt={`${project.name} logo`}
                      className="project-logo-image"
                    />
                  ) : (
                    <span className="project-logo-emoji">{project.logo}</span>
                  )}
                </div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="project-footer">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg className="project-link-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"/>
                  </svg>
                  Visitar Projeto
                </a>
              </div>
              
              <div className="project-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;