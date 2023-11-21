import React from 'react'
import "./SectionOne.css"
import sectionOneImg from "../../assets/about1.jpg";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";

const SectionOne = () => {
  return (
    <div className="sectionOne">
      <div className="sectionOne__left">
        <img src={sectionOneImg} alt="sectionImg" className='sectionOne__img' />
      </div>
      <div className="sectionOne__right">
        <h1>Core Feature</h1>
        <h4>Let's work together to bring your ideas to life and create amazing software that makes a difference!</h4>
        <div className="sectionOne__categories">
          <div className="sectionOne__category">
            <FaCode fontSize="3rem" color='#2F3D7E' />
            <p style={{fontSize:"1.2rem", fontWeight:"600"}}>Coding</p>
          </div>
          <div className="sectionOne__category">
            <MdDesignServices fontSize="3rem" color='#2F3D7E' />
            <p style={{fontSize:"1.2rem", fontWeight:"600"}}>Design</p>
          </div>
          <div className="sectionOne__category">
            <SiTestinglibrary fontSize="3rem" color='#2F3D7E' />
            <p style={{fontSize:"1.2rem", fontWeight:"600"}}>Testing</p>
          </div>
        </div>
        <p className='sectionOne__text'>Hi, I'm a software engineering student and developer with a passion for solving complex problems through code.
        </p>
        <button className='sectionOne__btn'>Contact Me</button>

      </div>
    </div>
  )
}

export default SectionOne