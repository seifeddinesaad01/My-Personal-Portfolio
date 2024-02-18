import React from 'react';
import heroImg from '../../assets/herohero.png';
import './Hero.css';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button';
const Hero = () => {
    return (
        <div className='hero__section'>
            <div className="hero__left">
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                    <h1 className='hero__title'>Hi, I'm Seif 👋</h1>
                    <p className='hero__description'>Experienced Frontend Developer, delivering dynamic and user-friendly web
                        applications with a focus on clean and efficient code.
                    </p>
                </div>
                <div className="hero__buttons">
                    <NavLink to="/projects">
                        <Button text="Projects" />
                    </NavLink>
                    <NavLink to="/contact">
                        <Button text="Contact me" />
                    </NavLink>
                </div>
                <div
                    className="infos__box"
                    style={{
                        border: "2px solid #812bccff"
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
            <div className="hero__right">
                <img src={heroImg} alt="hero" className='hero__img' />
            </div>
        </div>

    )
}

export default Hero