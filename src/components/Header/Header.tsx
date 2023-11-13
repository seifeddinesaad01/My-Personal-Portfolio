// Header.tsx
import React from 'react';
import './Header.css'; // Import the CSS file
import useWindow from '../../utils/useWindow';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const { width } = useWindow();
  const links = [
    {
      name:"Home",
       tag:"home"
    },
    {
      name:"About",
       tag:"about"
 },
    {
      name:"Skills",
       tag:"skills"
    },
    {
      name:"Projects",
       tag:"projects"
    },
    {
      name:"Contact",
       tag:"contact"
    },
  ]
  return (
    <header className="header">
      <div className="logo">Your Logo</div>

      {/* Menu icon for medium and small devices */}

      {width > 765 ?
        <>
          <nav className="nav-links">
            {links.map((link, index)=>{
              return  <NavLink to={link?.tag}>{link?.name}</NavLink>
            })}
          </nav>
          <div className="icons-wrapper">
            {/* You can replace these icons with your preferred icon components or images */}
            <span>Icon 1</span>
            <span>Icon 2</span>
            <span>Icon 3</span>
          </div>
        </>
        :
        <div className="menu-icon">&#9776;</div>
      }



    </header>
  );
};

export default Header;
