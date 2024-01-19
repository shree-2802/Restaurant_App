import React from 'react';
import { laurelConstants } from '../../constants/constants';
import { awards } from '../../constants/data';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Laurels.css';

const Laurels = () => {
  return (
    <div>
      <div className='app__laurels'>
        <img
          className='app__laurels--logo'
          src={laurelConstants.img}
          alt='LOGO'
        />
        <div className='app__laurels--content'>
          <div className='app__laurels--content-left'>
            <div className='app__laurels--content-left_head'>
              <SubHeading text={laurelConstants.text} />
              <h1>{laurelConstants.laurel}</h1>
            </div>
            <div className='app__laurels--content-left-laurels'>
              {awards.map((item, index) => {
                return (
                  <div className='app__laurel-laurel'>
                    <div>
                      <img src={item.imgUrl} alt='award' />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='app__laurels--content-right'>
            <img src={laurelConstants.image} alt='G' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laurels;
