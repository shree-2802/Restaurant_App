import React from 'react';
import { galleryConstants } from '../../constants/constants';
import Button from '../../components/Button/button';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Gallery.css';

const Gallery = () => {
  const imgRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = imgRef;
    if (direction === 'left') current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };
  return (
    <div className='app__gallery'>
      <div className='app__gallery--left'>
        <SubHeading text={galleryConstants.text} />
        <h1>{galleryConstants.title}</h1>
        <p>{galleryConstants.subText}</p>
        <Button text={galleryConstants.buttonContent} />
      </div>
      <div className='app__gallery--right'>
        <div className='app__gallery--right-imageContainer' ref={imgRef}>
          {galleryConstants.images.map((item, index) => {
            return (
              <div key={index} className='app__gallery--right-img'>
                <img
                  src={item}
                  alt='img'
                  className='app__gallery--right-img-image'
                />
                <BsInstagram
                  fontSize={27}
                  color='#fff'
                  className='app__gallery--right-img-inst'
                />
              </div>
            );
          })}
        </div>
        <div className='app__gallery--right--arrows'>
          <BsArrowLeftShort
            fontSize={27}
            color='#fff'
            onClick={() => scroll('left')}
            className='left'
          />
          <BsArrowRightShort
            fontSize={27}
            color='#fff'
            onClick={() => scroll('right')}
            className='right'
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
