import React from 'react';

import './MenuItem.css';

const MenuItem = ({ name, price, tag }) => (
  <div className='app__menuitem'>
    <div>
      <h5>{name}</h5>
      <div/>
      <p>{price}</p>
    </div>
    <p>{tag}</p>
  </div>
);

export default MenuItem;
