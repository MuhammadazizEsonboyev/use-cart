import React, { useState } from 'react'
import { Carousel,  } from 'react-bootstrap'
import logoBg from './img/bg.png'
import './style.css'

 function Caroul() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div className='carouselSave'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logoBg}
          alt="png"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logoBg}
          alt="png"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={logoBg}
          alt="png"
        />
      </Carousel.Item>
    </Carousel>
            
        {/* <LineSection/> */}
        </div>
    )
}

export default Caroul