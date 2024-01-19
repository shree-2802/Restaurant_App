import React from 'react';
import { newsletterConstants } from '../../constants/constants';
import Button from '../Button/button';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter--text'>
      <SubHeading text={newsletterConstants.text} />
      <h1>{newsletterConstants.title}</h1>
      <p>{newsletterConstants.subText}</p>
    </div>
    <div className='app__newsletter--input'>
      <input type='email' placeholder={newsletterConstants.placeholder} />
      <Button text={newsletterConstants.buttonContent} />
    </div>
  </div>
);

export default Newsletter;
