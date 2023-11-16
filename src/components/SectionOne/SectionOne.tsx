import React from 'react'
import "./SectionOne.css"
import sectionOneImg from "../../assets/about.jpg";
const SectionOne = () => {
  return (
    <div className="sectionOne">
      <div className="sectionOne__left">
        <img src={sectionOneImg} alt="sectionImg" className='sectionOne__img'/>
      </div>
      <div className="sectionOne__right">
        <h4>Core Feature</h4>
        <h1>Let's work together to bring your ideas to life and create amazing software that makes a difference!</h1>
      </div>
    </div>
  )
}

export default SectionOne