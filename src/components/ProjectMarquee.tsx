import React from 'react';
import fluirLogo from '../assets/icons/logos/logofluireng.png';

interface Project {
  name: string;
  tech: string;
  description: string;
  logo: string;
  logoType?: 'emoji' | 'image';
  link: string;
}

const ProjectMarquee: React.FC = () => {
  const projects: Project[] = [
    {
      name: "E-commerce/ERP",
      tech: "React • TypeScript • Node.js",
      description: "Restaurante virtual e sistema ERP completo com carrinho de compras e área admin",
      logo: "🛒",
      link: "https://ecommerce-projeto.com"
    },
    {
      name: "Dashboard Analytics",
      tech: "React • Chart.js • Firebase",
      description: "Painel administrativo com relatórios em tempo real",
      logo: "📊",
      link: "https://dashboard-analytics.com"
    },
    {
      name: "App Mobile Nativo",
      tech: "React Native • Expo • API REST",
      description: "Aplicativo com autenticação e push notifications",
      logo: "📱",
      link: "https://app-mobile.com"
    },
    {
      name: "Sistema de Gestão",
      tech: "C# • .NET • SQL Server",
      description: "Sistema completo de gerenciamento empresarial",
      logo: "🏢",
      link: "https://sistema-gestao.com"
    },
    {
      name: "Landing Page Fluir Engenharia",
      tech: "HTML5 • CSS3 • JavaScript",
      description: "Site institucional responsivo e otimizado",
      logo: fluirLogo,
      logoType: 'image',
      link: "https://fluirengenhariainstalacoes.com.br/"
    },
    {
      name: "API RESTful",
      tech: "Node.js • Express • MongoDB",
      description: "Backend escalável com autenticação JWT",
      logo: "⚡",
      link: "https://api-restful.com"
    }
  ];

  // Duplicamos os projetos para criar um loop infinito suave
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <h2 className="marquee-title">Projetos em Destaque</h2>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {duplicatedProjects.map((project, index) => (
              <div key={index} className="marquee-card">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="marquee-project-logo"
                  aria-label={`Visitar ${project.name}`}
                >
                  {project.logoType === 'image' ? (
                    <img 
                      src={project.logo} 
                      alt={`${project.name} logo`}
                      className="marquee-logo-image"
                    />
                  ) : (
                    <span className="marquee-logo-emoji">{project.logo}</span>
                  )}
                </a>
                <div className="marquee-card-content">
                  <h3 className="marquee-project-name">{project.name}</h3>
                  <p className="marquee-project-tech">{project.tech}</p>
                  <p className="marquee-project-description">{project.description}</p>
                </div>
                <div className="marquee-card-decoration"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMarquee;