interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <nav className="header-nav">
        {/* Logo ou nome do portfolio */}
        <div className="header-logo">
          MZ
        </div>
        
        {/* Menu de navegação */}
        <div className="header-menu">
          <button className="header-button">
            Home
          </button>
          <button className="header-button">
            About
          </button>
          <button className="header-button">
            Services
          </button>
          <button className="header-contact-button">
            Contact
          </button>
          <div className={`header-theme-toggle ${isDarkMode ? 'night' : ''}`} onClick={toggleTheme}>
            <div className="header-toggle-ball"></div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header