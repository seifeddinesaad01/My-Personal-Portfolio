// Header.tsx
import React from 'react';
import './Header.css'; // Import the CSS file
import useWindow from '../../utils/useWindow';

const Header: React.FC = () => {
  const {width} = useWindow();
  return (
    <header className="header">
      <div className="logo">Your Logo</div>

      {/* Menu icon for medium and small devices */}
      <div className="menu-icon">&#9776;</div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>

      <div className="icons-wrapper">
        {/* You can replace these icons with your preferred icon components or images */}
        <span>Icon 1</span>
        <span>Icon 2</span>
        <span>Icon 3</span>
      </div>
    </header>
  );
};

export default Header;
