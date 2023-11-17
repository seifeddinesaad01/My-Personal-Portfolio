import React from 'react'
import Hero from '../Hero/Hero'
import SectionTwo from '../SectionTwo/SectionTwo'
import SectionOne from '../SectionOne/SectionOne'
import './Home.css'
const Home = () => {
  return (
    <div className='home__container'>
        <Hero />
        <SectionOne/>
        <SectionTwo />
    </div>
  )
}

export default Home