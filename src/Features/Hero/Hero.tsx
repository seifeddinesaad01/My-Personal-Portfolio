import React from 'react';
import heroImg from '../../assets/about.jpg';
import './Hero.css';
import { NavLink } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='hero__section'>
            <div className="hero__left">
                <div className="hero__info">
                    <h1 className='hero__title'>Seif Eddine Saad</h1>
                    <h3 className='hero__description'>Front End Developer</h3>
                    <div className="hero__buttons">
                        <NavLink to="/projects">
                            <button className='sectionOne__btn'>Projects</button>
                        </NavLink>
                        <NavLink to="/contact">
                            <button className='sectionOne__btn'>Contact me</button>
                        </NavLink>
                    </div>
                    <div className="infos__box">
                        <div className="info__box">
                            <p>2+</p>
                            <p>experience</p>
                        </div>
                        <div className="info__box">
                            <p>20+</p>
                            <p>Project Completed</p>
                        </div>
                        <div className="info__box">
                            <p>10+</p>
                            <p>Happy Client</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__right">
                <img src={heroImg} alt="cd" className='hero__img' />
            </div>
        </div>

    )
}

export default Hero