import React from 'react';
import './map.css'

const Map = () => {
  return (
    <div>
      <div className="d-flex justify-content-center pt-4">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.140545203427!2d-64.29724732344883!3d-36.62300346692954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd0689920f4f%3A0xb4c0bd2ec262ec5f!2sCine%20Milenium!5e0!3m2!1ses-419!2sar!4v1739061217577!5m2!1ses-419!2sar"
            width="1000"
            height="480"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cine Milenium"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
