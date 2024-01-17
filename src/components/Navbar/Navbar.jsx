import React, { useState } from 'react';
import { navBarConstants } from '../../constants/constants';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

import './Navbar.css';

const LinksDisplay = () => {
  return (
    <ul className='app__navbar-link'>
      {navBarConstants.navLinks.map((links, index) => (
        <li key={index}>
          <a href={`#${links.toLowerCase()}`}>{links}</a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [hamburger, setHamburger] = useState(true);
  return (
    <div className='app__navbar'>
      <img
        src={navBarConstants.image}
        alt='GERICHT'
        className='app__navbar-logo'
      />
      <LinksDisplay />
      <div className='app__navbar-registration'>
        <a href='#reg' className='app__navbar-registration-link'>
          Log in/Registration
        </a>
        <div className='app__navbar-registration-line' />
        <a className='app__navbar-registration-link' href='#log'>
          Book a Table
        </a>
      </div>
      <div className='app__navbar-hamburger'>
        {hamburger && (
          <GiHamburgerMenu fontSize={27} onClick={() => setHamburger(false)} />
        )}
        {!hamburger && (
          <div
            className={`app__navbar-hamburger-links ${
              hamburger ? 'fadeOut' : 'fadeIn'
            }`}
          >
            <IoClose
              fontSize={27}
              onClick={() => setHamburger(true)}
              className='app__navbar-hamburger-links-close'
            />
            <LinksDisplay />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
