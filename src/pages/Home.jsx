import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/item-1.jpeg'
import img2 from '../images/item-2.jpeg'
import img3 from '../images/item-10.jpeg'
import img4 from '../images/item-4.jpeg'
import img5 from '../images/item-5.jpeg'


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='bg-secondary' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto mt-2"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Buttermil Pancakes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Diner Double</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-50  m-auto"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Steka House</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Country Delight</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 m-auto"
          src={img5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Egg Attack</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Home;