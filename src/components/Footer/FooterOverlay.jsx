import React from 'react';
import { footerConstants } from '../../constants/constants';
import SubHeading from '../SubHeading/SubHeading';
import './FooterOverlay.css';

const FooterOverlay = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer--info'>
        <div className='app__footer--info-contact'>
          <h3>{footerConstants.contact.text}</h3>
          <p>{footerConstants.contact.subText}</p>
          <div className='app__footer--info-contact-number'>
            {footerConstants.contact.phone.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className='app__footer--info-gericht'>
          <h1>{footerConstants.middle.title}</h1>
          <SubHeading text={footerConstants.middle.subText} />
          <div className='app__footer--info-gericht-icons'>
            {footerConstants.middle.icons.map((Item, index) => (
              <Item key={index} />
            ))}
          </div>
        </div>
        <div className='app__footer--info-hours'>
          <h3>Working Hours</h3>
          <div className='app__footer--info-hours-day'>
            {footerConstants.workingHours.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.day}</p>
                  <p>{item.time}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='app__footer--copyRight'>{footerConstants.copyRights}</div>
    </div>
  );
};

export default FooterOverlay;
