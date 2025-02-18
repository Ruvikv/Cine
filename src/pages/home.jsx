import React from 'react'
import Carrousel2 from '../pages/carrousel2/carrousel2.jsx';
import Carrousel1 from '../pages/carrousel1/carrousel1.jsx';
import Map from './map/map.jsx'


const home = () => {

  

  

  return (

    <div>
      <div className='pt-5'>
        <Carrousel1/>
      </div>
      <div className='pt-3'>
        <Carrousel2/>
      </div>
      <div>
        <Map />
      </div>
    </div>
    
  )
}

export default home