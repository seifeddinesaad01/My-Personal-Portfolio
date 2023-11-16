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
        <h1>Core Feature</h1>
        <h4>Let's work together to bring your <br /> ideas to life and create amazing <br /> software that makes a difference!</h4>
      </div>
    </div>
  )
}

export default SectionOne