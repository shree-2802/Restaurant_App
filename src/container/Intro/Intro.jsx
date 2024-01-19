import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import meal from '../../assets/meal.mp4';
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
  const [playvideo, setPlayVideo] = useState(false);
  const handleVideo = () => {
    setPlayVideo((prevState) => !prevState);
    if (playvideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className='app__video'>
      <video
        src={meal}
        type='video/mp4'
        ref={vidRef}
        loop
        controls={false}
        muted
      />
      <div className='app__video-overlay'>
        <div className='app__video-overlay_circle' onClick={handleVideo}>
          {playvideo ? (
            <BsPauseFill color='#fff' fontSize={30} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
