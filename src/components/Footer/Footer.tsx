import React from 'react'
import './Footer.css';
import { socialMedia } from '../Header/Header';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="footer">
      <div className="icons-wrapper">
        {socialMedia.map(socialMedia => {
          return <NavLink target="_blank" to={socialMedia.url} style={{ textDecoration: "none" }} className="header_icons">
            {socialMedia.icon}
          </NavLink>
        })}

      </div>
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
        <p>© Copyright {currentYear} <span className='myName'>Seif Eddine Saad</span></p>
        <p>saadseif304@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer