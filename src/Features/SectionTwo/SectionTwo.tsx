import React from 'react'
import { Tab, Tabs } from '../../components/Tabs/Tabs';
import "./SectionTwo.css"
import InfoCard from '../../components/InfoCard/InfoCard';
import { sectionTwoInfo } from '../../data/constants';

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <div className="sectionOne__right">
        <h1>About Us</h1>
        <h4>Choose What Matters To Your Software</h4>

        <p className='sectionOne__text'>
          One of my favorite activities is to educate and mentor others in the field to fulfill their potential and deepen my knowledge. You can find more about this on my CV
        </p>
        <button className='sectionOne__btn'>Download CV</button>

      </div>
      <div className="sectionTwo__right">
        <Tabs>
          <Tab label="Experiences">
          {sectionTwoInfo?.map((info)=>{
            return  <InfoCard data={info}/>
          })}
          </Tab>
          <Tab label="Education">
          {sectionTwoInfo?.map((info)=>{
            return  <InfoCard data={info}/>
          })}
          </Tab>
          <Tab label="Skills">
          {sectionTwoInfo?.map((info)=>{
            return  <InfoCard data={info}/>
          })}
          </Tab>
          <Tab label="Soft-Skills">
          {sectionTwoInfo?.map((info)=>{
            return  <InfoCard data={info}/>
          })}
          </Tab>
        </Tabs>

      </div>
    </div>
  )
}

export default SectionTwo;