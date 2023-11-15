import React from 'react';
import heroImg from '../../assets/hero1.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className='hero__section'>
            <div className="hero__left">
                <div className="hero__info">
                    <h1 className='hero__title'>Seif Eddine Saad</h1>
                    <h3 className='hero__description'>Web Developer</h3>
                    <div className="hero__buttons">
                    <button className='hero__btn'>Projects</button>
                    <button className='hero__btn'>Contact</button>
                    </div>
                    <div className="infos__box">
                        <div className="info__box">
                            <p>20+</p>
                            <p>experience</p>
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