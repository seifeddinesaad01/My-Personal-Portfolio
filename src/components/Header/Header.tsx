// Header.tsx
import React from 'react';
import './Header.css'; // Import the CSS file
import useWindow from '../../utils/useWindow';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/constants';
import { FaInstagram, FaLinkedinIn,FaTwitter} from "react-icons/fa";

const Header: React.FC = () => {
  const { width } = useWindow();
 
  return (
    <header className="header">
      <div className="logo">Logo</div>

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
            <span className='header_icons'><FaInstagram /></span>
            <span className='header_icons'><FaLinkedinIn /></span>
            <span className='header_icons'><FaTwitter /></span>
          </div>
        </>
        :
        <div className="menu-icon">&#9776;</div>
      }



    </header>
  );
};

export default Header;
