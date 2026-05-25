import React from 'react';

const Header = () => {
  return (
    <header className="fixed-header">
      <div className="container header-content">
        <div className="logo-container">
          <span className="logo-text">CALESTIA</span>
          <span className="logo-dot">.</span>
          <span className="logo-sub">DEVELOPMENT</span>
        </div>

        <nav className="main-nav">
          {['Stack', 'Projects', 'Manifesto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-item">
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="auth-btn">
            SYSTEM_ACCESS
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
