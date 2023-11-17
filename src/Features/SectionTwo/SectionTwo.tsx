import React from 'react'
import { Tab, Tabs } from '../../components/Tabs/Tabs';

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <div className="sectionOne__right">
        <h1>About Us</h1>
        <h4>Choose What Matters To Your Software</h4>

        <p className='sectionOne__text'>
          One of my favorite activities is to educate and mentor <br /> others in the field to fulfill their potential and deepen my <br /> knowledge. You can find more about this on my CV
        </p>
        <button className='sectionOne__btn'>Download CV</button>

      </div>
      <div className="sectionTwo__right">
        <Tabs>
          <Tab label="Tab 1">
            <p>Content for Tab 1</p>
          </Tab>
          <Tab label="Tab 2">
            <p>Content for Tab 2</p>
          </Tab>
          <Tab label="Tab 3">
            <p>Content for Tab 3</p>
          </Tab>
        </Tabs>

      </div>
    </div>
  )
}

export default SectionTwo;