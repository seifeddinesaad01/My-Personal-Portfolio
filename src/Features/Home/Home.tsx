import React, { useEffect, useState } from 'react'
import Hero from '../Hero/Hero'
import SectionTwo from '../SectionTwo/SectionTwo'
import SectionOne from '../SectionOne/SectionOne'
import './Home.css'
import Projects from '../Projects/Projects'
import Spinner from '../../components/Spinner/Spinner'
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
        <Spinner />
        :
        <div className='home__container'>
          <Hero />
          {/* <SectionOne />
           <SectionTwo /> */}
          {/* <Projects />   */}
        </div>
      }

    </>

  )
}

export default Home