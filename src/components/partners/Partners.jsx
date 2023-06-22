import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Partner.css";

const Partners = () => {
  return (
    <div>
      <Carousel className="partner-corner">
        <Carousel.Item>
          <img src="../../image/p-1.png" alt="First slide" />
          <img src="../../image/p-2.png" alt="First slide" />
          <img src="../../image/p-3.png" alt="First slide" />
          <img src="../../image/p-4.png" alt="First slide" />
          <img src="../../image/p-5.png" alt="First slide" />
          <img src="../../image/p-6.png" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="../../image/p-7.png" alt="Second slide" />
          <img src="../../image/p-8.png" alt="Second slide" />
          <img src="../../image/p-9.png" alt="Second slide" />
          <img src="../../image/ec-council.png" alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Partners