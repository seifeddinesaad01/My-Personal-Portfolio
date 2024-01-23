import React from 'react';
import heroImg from '../../assets/hero.jpeg';
import './Hero.css';
import { NavLink } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='hero__section'>
            <div className="hero__left">
                <div className="hero__info">
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                        <h1 className='hero__title'>Hi, I'm Seif 👋</h1>
                        <p className='hero__description'>I'm a front end developer (React.js & Next.js)
                        </p>
                    </div>
                    <div className="hero__buttons">
                        <NavLink to="/projects">
                            <button className='sectionOne__btn'>Projects</button>
                        </NavLink>
                        <NavLink to="/contact">
                            <button className='sectionOne__btn'>Contact me</button>
                        </NavLink>
                    </div>
                    <div className="infos__box" style={{
                        border:"2px solid #812bccff"
                    }}>
                        <div className="info__box">
                            <p>2+</p>
                            <p>experience</p>
                        </div>
                        <div className="info__box">
                            <p>10+</p>
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