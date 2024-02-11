import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import SectionTwo from '../SectionTwo/SectionTwo'
import SectionOne from '../SectionOne/SectionOne'
import './Home.css'
import Projects from '../Projects/Projects'
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating loading time with setTimeout. Replace this with your actual loading logic.

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ?
        <p>Loading...</p> :
        <div className='home__container'>
          <Hero />
          <SectionOne />
          <SectionTwo />
          <Projects />
        </div>
      }

    </>

  )
}

export default Home