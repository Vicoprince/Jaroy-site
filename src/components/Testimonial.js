import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <>
      <Carousel className="slider-container">
        <h3>Testimonial</h3>
        <hr />
        <h2>What They Say</h2>
        <Carousel.Item interval={1000} className="slide-wrapper">
          <img
            className="slide-image"
            src="../image/testy1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="slide-caption">
            <h3>
              Jaroy ICT have been providing us with great IT support for several
              years, They deliver an excelent service and any issues are dealt
              with quickly and effectively
            </h3>
            <p>Ayodele Moses</p>
            <span>IT Student</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} className="slide-wrapper">
          <img
            className="slide-image"
            src="../image/testy2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="slide-caption">
            <h3>
              We have been incredibly impressed and pleased with the service
              Jaroy ICT have provided us with. Their expertise, support and
              flexibility have been of immerse value.
            </h3>
            <p>Gabriel Chukwu</p>
            <span>B.Tech</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} className="slide-wrapper">
          <img
            className="slide-image"
            src="../image/testy3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="slide-caption">
            <h3>
              Having Worked with various ICT Institutions in the past, I can
              honestly say that JaroyMtech offers a service that is second to
              none. Their Staff are professional,efficient and dedicated and can
              always be relied upon to resolve promptly any issues that may
              arise.
            </h3>
            <p>Abubakar Hassan</p>
            <span>ND, Computer Science</span>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide-wrapper">
          <img
            className="slide-image"
            src="../image/testy4.jpg"
            alt="Fourth slide"
          />
          <Carousel.Caption className="slide-caption">
            <h3>
              Jaroy is a place to be and also a place to acquire new skills, i
              never regret attending this institution, will definitely want all
              my siblings to be here
            </h3>
            <p>Ademona Oluwaseun</p>
            <span>B.Tech</span>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Testimonial