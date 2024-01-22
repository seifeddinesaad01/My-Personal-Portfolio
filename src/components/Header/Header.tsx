import React, { useState } from 'react';
import './Header.css';
import useWindow from '../../utils/useWindow';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/constants';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import { GiSkullCrossedBones } from "react-icons/gi";
import logo from "../../assets/logo2.png"
const Header: React.FC = () => {
  const { width } = useWindow();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
const socialMedia= [
  {
    id: 1,
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/saifeddine.sd/'
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
 const navLinkStyle = {
  textDecoration: 'none',
  // color: 'black',
};

  return (
    <header className='header'>
      <div className="logo">
        {/* <img src={logo} alt="logo" style={{width:'10rem'}}/> */}
        <h1 style={{
          color: "#812bccff"
        }}>Seif.Dev</h1>
      </div>

      {width > 765 ? (
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
            {socialMedia.map(socialMedia =>{
                return <NavLink target="_blank" to={socialMedia.url} style={navLinkStyle} className="header_icons">
                  {socialMedia.icon}
                </NavLink>
            })}
           
          </div>
        </>
      ) : (
        <div className="menu-icon" onClick={toggleDrawer}>
          &#9776;
        </div>
      )}

      {/* Drawer component */}

      <div className={!isDrawerOpen ? "drawer" : 'hiddenDrawer'}>
        <div className='drawer__header'>
          <div className="logo">SEIF</div>
          <div onClick={() => toggleDrawer()} style={{ cursor: "pointer" }}><GiSkullCrossedBones /></div>
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
