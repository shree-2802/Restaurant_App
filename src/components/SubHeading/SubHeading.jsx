import React from 'react';
import { spoon } from '../../constants/images';
const SubHeading = ({ text }) => (
  <div>
    <p style={{ fontWeight: '700', fontSize: '23px', lineHeight: '29px' }}>
      {text}
    </p>
    <img src={spoon} alt='->' />
  </div>
);

export default SubHeading;
