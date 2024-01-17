import React from 'react';
import { headerConstants } from '../../constants/constants';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header_left'>
        <p>{headerConstants.chase}</p>
        <img src={headerConstants.spoon} alt='->' />
        <h1>{headerConstants.mainHead}</h1>
        <p>{headerConstants.subText}</p>
        <button>{headerConstants.buttonContent}</button>
      </div>
      <div className='app__header_right'>
        <img src={headerConstants.welcome} alt='Welcome' />
      </div>
    </div>
  );
};

export default Header;
