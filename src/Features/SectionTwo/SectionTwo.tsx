import React from 'react'
import { Tab, Tabs } from '../../components/Tabs/Tabs';
import "./SectionTwo.css"
import InfoCard from '../../components/InfoCard/InfoCard';
import { educationInfo, sectionTwoInfo } from '../../data/constants';
import { skills } from '../Skills/Skills';
import { FcIdea } from "react-icons/fc";
import { NavLink } from 'react-router-dom';


const SectionTwo = () => {
  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
  };
  return (
    <div className="sectionTwo">
      <div className="sectionTwo__left">
        <h1>About Us</h1>
        <h4>Choose What Matters To Your Software</h4>

        <p className='sectionTwo__text'>
          One of my favorite activities is to educate and mentor others in the field to fulfill their potential and deepen my knowledge. You can find more about this on my CV
        </p>
        {/* <button className='sectionOne__btn'> */}
          <NavLink
           className='sectionOne__btn'
            target="_blank"
            style={navLinkStyle}
            to="https://jade-lilian-73.tiiny.site">
            See Resume
          </NavLink>
        {/* </button> */}

      </div>
      <div className="sectionTwo__right">
        <Tabs>
          <Tab label="Experiences">
            {sectionTwoInfo?.map((info) => {
              return <InfoCard data={info} />
            })}
          </Tab>
          <Tab label="Education">
            {educationInfo?.map((info) => {
              return <InfoCard data={info} />
            })}
          </Tab>
          <Tab label="Skills">
            <div className="icons__container">
              {skills?.map((skill) => {
                return <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                  <p className='skill__icon'>{skill?.icon}</p>
                  <p className='skill__name'>{skill?.name}</p>
                </div>
              })}
            </div>
          </Tab>
          <Tab label="Soft-Skills">
            <div
              style={{
                display: 'flex',
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', gap: '1rem', fontWeight: '600' }}><FcIdea fontSize="2rem" color="#2f3d7e" />Quick & Visual Learner</p>
                <p style={{ color: 'gray', fontSize: '1.1rem' }}>I am a very strong visual learner and am determined to solve problems and quickly find an effective solution.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', gap: '1rem', fontWeight: '600' }}><FcIdea fontSize="2rem" color="#2f3d7e" />Effective Problem Solver</p>
                <p style={{ color: 'gray', fontSize: '1.1rem' }}>I have the capability to solve problems and determining the cause of the problem. Identifying, prioritizing, and selecting alternatives for a solution; and implementing a solution.</p>
              </div>
            </div>
          </Tab>
        </Tabs>

      </div>
    </div>
  )
}

export default SectionTwo;