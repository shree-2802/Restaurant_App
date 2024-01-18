import React from 'react';
import './AboutUs.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import Button from '../../components/Button/button';
import { aboutUsConstants } from '../../constants/constants';
const AboutUs = () => (
  <div className='app__about'>
    <div className='app__about--background'>
      <img
        className='app__about--background-img'
        src={aboutUsConstants.gImage}
        alt='G'
      />
    </div>
    <div className='app__about-content'>
      <div className='app__about-content--left'>
        <SubHeading text={aboutUsConstants.about} />
        <p>{aboutUsConstants.aboutContent}</p>
        <Button text={aboutUsConstants.aboutButton} />
      </div>
      <div className='app__about-content--middle'>
        <img src={aboutUsConstants.knife} alt='|' />
      </div>
      <div className='app__about-content--right'>
        <SubHeading text={aboutUsConstants.history} />
        <p>{aboutUsConstants.historyContent}</p>
        <Button text={aboutUsConstants.aboutButton} />
      </div>
    </div>
  </div>
);

export default AboutUs;
