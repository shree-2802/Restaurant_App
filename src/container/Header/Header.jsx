import React from 'react';
import { headerConstants } from '../../constants/constants';
import Button from '../../components/Button/button';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';

const Header = () => (
  <div className='app__header'>
    <div className='app__header-left'>
      <SubHeading text={headerConstants.chase}/>
      <h1>{headerConstants.mainHead}</h1>
      <p>{headerConstants.subText}</p>
      <Button text={headerConstants.buttonContent} />
    </div>
    <div className='app__header-right'>
      <img src={headerConstants.welcome} alt='Welcome' />
    </div>
  </div>
);

export default Header;
