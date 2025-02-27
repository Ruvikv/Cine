import React, { useRef } from 'react';
import Carrousel2 from '../pages/carrousel2/carrousel2.jsx';
import Carrousel1 from '../pages/carrousel1/carrousel1.jsx';
import Map from './map/map.jsx';

const Home = () => {
  const sectionRef = useRef(null);

  const handleCarouselClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='pt-5' onClick={handleCarouselClick}>
        <Carrousel1 />
      </div>
      <div className='pt-3' ref={sectionRef}>
        <Carrousel2 />
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default Home;
