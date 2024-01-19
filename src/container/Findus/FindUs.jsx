import React from 'react';
import { findUsConstants } from '../../constants/constants';
import SubHeading from '../../components/SubHeading/SubHeading';
import Button from '../../components/Button/button';

import './FindUs.css';

const FindUs = () => {
  return (
    <div className='app__findus'>
      <div className='app__findus--left'>
        <div className='app__findus--left-heading'>
          <SubHeading text={findUsConstants.text} />
          <h1>{findUsConstants.title}</h1>
        </div>
        <div className='app__findus--left-info'>
          <p>{findUsConstants.subText}</p>
          <div className='app__findus--left-info_time'>
          <h3>{findUsConstants.subTitle}</h3>
            {findUsConstants.time.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <Button text={findUsConstants.buttonContent}/>
        </div>
      </div>
      <div className='app__findus--right'>
        <img src={findUsConstants.image} alt="findUs"/>
      </div>
    </div>
  );
};

export default FindUs;
