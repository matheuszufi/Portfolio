import Header from "./components/Header";
import matheusImage from "./assets/images/matheus.png";
import JavaScriptIcon from "./assets/icons/skills/javascript-svgrepo-com.svg";
import ReactIcon from "./assets/icons/skills/react-svgrepo-com.svg";
import FirebaseIcon from "./assets/icons/skills/firebase-svgrepo-com.svg";
import NodeIcon from "./assets/icons/skills/node-js-svgrepo-com.svg";
import PhotoshopIcon from "./assets/icons/skills/photoshop-svgrepo-com.svg";
import GitIcon from "./assets/icons/skills/git-svgrepo-com.svg";
import GitHubIcon from "./assets/icons/skills/github-142-svgrepo-com.svg";
import CSharpIcon from "./assets/icons/skills/Logo_C_sharp.svg";
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              Olá, me chamo
              <br />
              <span className="hero-title-highlight">Matheus Zufi</span>
            </h1>
            <p className="hero-description">
              Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis e soluções inovadoras.
            </p>
            <button className="hero-button">
              Vamos Conversar
            </button>
          </div>
          
          <div className="hero-right">
            <div className="hero-image-container">
              {/* <img 
                src={matheusImage} 
                alt="Matheus" 
                className="hero-image"
              /> */}
            </div>
          </div>
          
          <div className="skills-section">
            <h2 className="skills-title">Meus conhecimentos</h2>
            <div className="skills-container">
              <div className="skill-item">
                <img src={JavaScriptIcon} alt="JavaScript" className="skill-svg" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-item">
                <img src={ReactIcon} alt="React" className="skill-svg" />
                <span className="skill-name">React</span>
              </div>
              <div className="skill-item">
                <img src={FirebaseIcon} alt="Firebase" className="skill-svg" />
                <span className="skill-name">Firebase</span>
              </div>
              <div className="skill-item">
                <img src={GitIcon} alt="Git" className="skill-svg" />
                <span className="skill-name">Git</span>
              </div>
              <div className="skill-item">
                <img src={GitHubIcon} alt="GitHub" className="skill-svg" />
                <span className="skill-name">GitHub</span>
              </div>
              <div className="skill-item">
                <img src={NodeIcon} alt="Node.js" className="skill-svg" />
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill-item">
                <img src={CSharpIcon} alt="C#" className="skill-svg" />
                <span className="skill-name">C#</span>
              </div>
              <div className="skill-item">
                <img src={PhotoshopIcon} alt="Photoshop" className="skill-svg" />
                <span className="skill-name">Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
