import React, { useState } from 'react';
import './Header.css';
import useWindow from '../../utils/useWindow';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/constants';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

export const socialMedia = [
  {
    id: 1,
    icon: <FaGithub />,
    url: 'https://github.com/seifeddinesaad01'
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/seif-eddine-saad-3728aa19b/',
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    url: 'https://twitter.com/Saif71564790',
  }
]
const Header = () => {
  const { width } = useWindow();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLinkStyle = {
    textDecoration: 'none',
  };

  return (
    <header className='header'>
      <div className="logo">
        <h1 className='logo__text'>Seif.Dev</h1>
      </div>

      {width > 900 ? (
        <>
          <nav className="nav-links">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link?.tag}
                className={window.location.pathname === link?.tag ? 'active' : ''} // Add 'active' class if link is active
              >
                {link?.name}
              </NavLink>
            ))}
          </nav>
          <div className="icons-wrapper">
            {socialMedia.map(socialMedia => {
              return <NavLink target="_blank" to={socialMedia.url} style={navLinkStyle} className="header_icons">
                {socialMedia.icon}
              </NavLink>
            })}

          </div>
        </>
      ) : (
        <div className="menu-icon" onClick={toggleDrawer}>
          <RiMenu3Line fontSize="1.6rem" />
        </div>
      )}

      {/* Drawer component */}

      <div className={!isDrawerOpen ? "drawer" : 'hiddenDrawer'}>
        <div className='drawer__header'>
          <h1 className='logo__text'>Seif.Dev</h1>
          <div onClick={() => toggleDrawer()} style={{ cursor: "pointer" }}><ImCross /></div>
        </div>

        <nav className="drawer-links">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link?.tag}
              className={window.location.pathname === link?.tag ? 'active' : ''} // Add 'active' class if link is active
              onClick={toggleDrawer}
            >
              {link?.name}
            </NavLink>
          ))}
        </nav>
        <div className="icons-wrapper" style={{ width: '100%' }}>
          <span className="header_icons">
            <FaInstagram />
          </span>
          <span className="header_icons">
            <FaLinkedinIn />
          </span>
          <span className="header_icons">
            <FaXTwitter />
          </span>
        </div>
      </div>

    </header>
  );
};

export default Header;
