import React from 'react';
import { menuConstants } from '../../constants/constants';
import { wines, cocktails } from '../../constants/data';
import MenuItem from '../../components/Menuitem/MenuItem';
import Button from '../../components/Button/button';
import SubHeading from '../../components/SubHeading/SubHeading';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__menu'>
    <div className='app__menu--heading'>
      <SubHeading text={menuConstants.menu} />
      <h1>{menuConstants.title}</h1>
    </div>
    <div className='app__menu--list'>
      <div className='app__menu--list-left'>
        <h3>{menuConstants.wineTitle}</h3>
        <div className='app__menu--list-left-wine'>
          {wines.map((item, index) => {
            return (
              <MenuItem
                key={index}
                name={item.title}
                price={item.price}
                tag={item.tags}
              />
            );
          })}
        </div>
      </div>
      <div className='app__menu--list-middle'>
        <img src={menuConstants.menuImage} alt='menu' />
      </div>
      <div className='app__menu--list-right'>
        <h3>{menuConstants.cocktails}</h3>
        <div className='app__menu--list-right-cocktail'>
          {cocktails.map((item, index) => {
            return (
              <MenuItem name={item.title} price={item.price} tag={item.tags} />
            );
          })}
        </div>
      </div>
    </div>
    <Button text={'View More'} />
  </div>
);

export default SpecialMenu;
