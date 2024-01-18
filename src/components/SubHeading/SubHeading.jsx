import React from 'react';
import { spoon } from '../../constants/images';
const SubHeading = ({ text }) => (
  <div>
    <p>{text}</p>
    <img src={spoon} alt='->' />
  </div>
);

export default SubHeading;
