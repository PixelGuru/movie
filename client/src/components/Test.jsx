import React, { useRef } from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const App = () => {
  const carouselRef = useRef();

  const onNextClick = () => {
    carouselRef.current.next();
  };

  const onPrevClick = () => {
    carouselRef.current.prev();
  };

  const onChange = (currentSlide) => {
    console.log('Current Slide:', currentSlide);
  };

  return (
    <div>
      <Carousel afterChange={onChange} ref={carouselRef}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <button onClick={onPrevClick}>Previous</button>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default App;
