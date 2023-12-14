import React, { useState } from 'react';
import './Header.css';
import useWindow from '../../utils/useWindow';
import { NavLink } from 'react-router-dom';
import { links } from '../../data/constants';
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { GiSkullCrossedBones } from "react-icons/gi";
import logo from "../../assets/logo.png"
const Header: React.FC = () => {
  const { width } = useWindow();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  return (
    <header className={`header fixed`}>
      <div className="logo">
        <img src={logo} alt="logo" style={{width:'10rem'}}/>
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
            <span className="header_icons">
              <FaInstagram className='rotating-icon' />
            </span>
            <span className="header_icons">
              <FaLinkedinIn />
            </span>
            <span className="header_icons">
              <FaTwitter />
            </span>
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
            <FaTwitter />
          </span>
        </div>
      </div>

    </header>
  );
};

export default Header;
