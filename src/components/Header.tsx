import { useState, useEffect } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Controla o scroll para adicionar backdrop ao header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    window.open('https://wa.me/5511999999999', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="header-nav">
        {/* Logo */}
        <div className="header-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Matheus</span>
          <span className="logo-highlight">Zufi</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="header-menu desktop-menu">
          <button 
            className="header-button"
            onClick={() => scrollToSection('hero')}
          >
            Home
          </button>
          <button 
            className="header-button"
            onClick={() => scrollToSection('projetos')}
          >
            Projetos
          </button>
          <button 
            className="header-button"
            onClick={() => scrollToSection('sobre')}
          >
            Sobre
          </button>
          <button 
            className="header-contact-button"
            onClick={handleContactClick}
          >
            Contato
          </button>
          <div 
            className={`header-theme-toggle ${isDarkMode ? 'night' : ''}`} 
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            <div className="header-toggle-ball"></div>
          </div>
        </div>

        {/* Mobile Menu Controls */}
        <div className="mobile-controls">
          <div 
            className={`header-theme-toggle mobile-theme ${isDarkMode ? 'night' : ''}`} 
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            <div className="header-toggle-ball"></div>
          </div>
          
          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <button 
              className="mobile-menu-item"
              onClick={() => scrollToSection('hero')}
            >
              Home
            </button>
            <button 
              className="mobile-menu-item"
              onClick={() => scrollToSection('projetos')}
            >
              Projetos
            </button>
            <button 
              className="mobile-menu-item"
              onClick={() => scrollToSection('sobre')}
            >
              Sobre
            </button>
            <button 
              className="mobile-menu-contact"
              onClick={handleContactClick}
            >
              Contato
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
}

export default Header;