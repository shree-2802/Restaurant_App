import React from 'react';
import { chefConstants, headerConstants } from '../../constants/constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Chef.css';

const Chef = () => (
  <div className='app__chef'>
    <div className='app__chef--image'>
      <img src={chefConstants.image} alt='chef' />
    </div>
    <div className='app__chef--context'>
      <div className='app__chef--context-heading'>
        <SubHeading text={chefConstants.topText} />
        <h1>{chefConstants.heading}</h1>
      </div>
      <p className='app__chef--context-text'>
        <img src={chefConstants.colonImage} alt='"' /> {headerConstants.subText}
      </p>
      <div className='app__chef--context-sign'>
        <h5>{chefConstants.name}</h5>
        <p>{chefConstants.designation}</p>
      </div>
      <img className='app__chef--context-signature' src={chefConstants.signature} alt='Kevin Luo' />
    </div>
  </div>
);

export default Chef;
