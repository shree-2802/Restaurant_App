import React from 'react';
import { headerConstants } from '../../constants/constants';
import './Header.css';

const Header = () => (
  <div className='app__header'>
    <div className='app__header-left'>
      <div>
        <p>{headerConstants.chase}</p>
        <img src={headerConstants.spoon} alt='->' />
      </div>
      <h1>{headerConstants.mainHead}</h1>
      <p>{headerConstants.subText}</p>
      <button>{headerConstants.buttonContent}</button>
    </div>
    <div className='app__header-right'>
      <img src={headerConstants.welcome} alt='Welcome' />
    </div>
  </div>
);

export default Header;
