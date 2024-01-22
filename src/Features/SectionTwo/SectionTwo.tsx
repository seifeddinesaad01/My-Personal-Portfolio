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
  };
  return (
    <div className="sectionTwo">
      <div className="sectionTwo__left">
        <h1>About Us</h1>
        <h4>Choose What Matters To Your Software</h4>

        <p className='sectionTwo__text'>
          One of my favorite activities is to educate and mentor others in the field to fulfill their potential and deepen my knowledge. You can find more about this on my CV
        </p>
        <NavLink
          className='sectionOne__btn'
          target="_blank"
          style={navLinkStyle}
          to="https://www.pdffiller.com/jsfiller-desk12/?flat_pdf_quality=high&isShareViaLink=1&lang=en&projectId=1427776696&loader=tips&MEDIUM_PDFJS=true&PAGE_REARRANGE_V2_MVP=true&richTextFormatting=true&isPageRearrangeV2MVP=true&jsf-page-rearrange-v2=true&LATEST_PDFJS=true&jsf-document-scroll-zoom=true&jsf-redesign-full=true&jsf-dss-v2=false&routeId=aef620af9c57592a25a279bda891ef42#96ed4bc2ef20485aa203323541c38707">
          See Resume
        </NavLink>
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
                gap: '0.5rem',
                paddingTop:"1rem"
              }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', gap: '1rem', fontWeight: '600' }}><FcIdea fontSize="2rem" color="hsla(272, 66%, 48%, 1)" />Quick & Visual Learner</p>
                <p style={{ color: 'gray', fontSize: '1.1rem' }}>I am a very strong visual learner and am determined to solve problems and quickly find an effective solution.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', gap: '1rem', fontWeight: '600' }}><FcIdea fontSize="2rem" color="hsla(272, 66%, 48%, 1)" />Effective Problem Solver</p>
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