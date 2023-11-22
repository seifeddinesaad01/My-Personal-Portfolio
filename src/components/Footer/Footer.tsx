import React from 'react'
import './Footer.css';
const Footer = () => {
    const currentDate = new Date();
const currentYear = currentDate.getFullYear();

  return (
   <div className="footer">
    <p>© Copyright {currentYear} <span className='myName'>Seif Eddine Saad</span>  - All Rights Reserved</p>
    <p>saadseif304@gmail.com</p>
   </div>
  )
}

export default Footer