import React from 'react';
import { Carousel } from 'react-bootstrap';
import img2 from './imgs/878.png';
import img3 from './imgs/882.png';
import img4 from './imgs/884.png';

const Carrousel1 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center pt-5">
      <Carousel interval={3000} controls={false} indicators={false} fade>
        <Carousel.Item>
          <img
            src={img4}
            className="d-block w-100"
            alt="Slide 1"
            style={{
              objectFit: 'contain',
              maxHeight: '500px',
              margin: '0 auto',
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img3}
            className="d-block w-100"
            alt="Slide 2"
            style={{
              objectFit: 'contain',
              maxHeight: '500px',
              margin: '0 auto',
            }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img2}
            className="d-block w-100"
            alt="Slide 3"
            style={{
              objectFit: 'contain',
              maxHeight: '500px',
              margin: '0 auto',
            }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carrousel1;
