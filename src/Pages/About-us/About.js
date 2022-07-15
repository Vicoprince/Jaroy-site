import React from 'react';
import './About.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import Testimonial from '../../components/Testimonial';

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="title-text">About Us</h1>
            <Breadcrumb className="b-text">
              <Breadcrumb.Item className="text">
                <Link to="/">
                  <h5>Home</h5>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>About Us</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="welcome-container">
        <h5>About us</h5>
        <hr />
        <div className="welcome-content">
          <h1>Welcome to JaroyMtech</h1>
          <div className="main">
            <p>
              Jaroy School of Management and Technology was incorporated by the
              Nigeria Corporate Affairs Commission (CAC) to take over the IT
              Training interest of Jaroy Investment Limited. The company
              commenced business on the 1st of January, 2019. Jaroy School of
              Management and Technology since inception has been operating as an
              IT Education Service company in Ogun State and Nigeria in general.
              The scope is expected to include School of Basic Studies,
              Innovative Enterprise Institution, Graduate After School
              Development Centre, Electronic Testing Centre, Talent Discovery
              Centre.
            </p>
            <img src="../image/a-2.jpg" />
          </div>
        </div>
      </div>

      <div className="info">
        <div className="info-content">
          <h1 className="figure">01</h1>
          <h3>Why Choose us</h3>
          <p>
            Jaroy School of Management and Technology leads a team of young,
            qualified and well-motivated staff in executing broad policies with
            the collective resolve to achieve quantum leap growth for the group.
            Even though, it has not been smooth all through, the company as an
            integral part of micro and macro economies continues to sail on the
            sea of prosperity guided by the divine hand of God Almighty, the
            sound vision of the founding fathers and the creativity of her
            managers.
          </p>
        </div>
        <div className="info-content-1">
          <h1 className="figure">02</h1>
          <h3>Our Mission</h3>
          <p>
            To bridge the IT knowledge gap between the stakeholders and the
            deliver maximum returns through qualitative and strategic IT and
            Human Resource Management, towards enhancing the heritage of our
            founding fathers.
          </p>
        </div>
        <div className="info-content">
          <h1 className="figure">03</h1>
          <h3>Our Vision</h3>
          <p>
            Jaroy School of Management and Technology is a growing, dynamic
            vision-birthed, vision driven school, founded on ethos and committed
            to pioneering excellence at the cutting edge of learning. We are
            driven by the compelling vision of raising a new generation of IT
            Leaders for the African Continent on the platform of a Holistic,
            Human Development and integrated learning curriculum, in order to
            raise Total Men who will go out to develop their world. Our
            Core-Values of Integrity, Diligence, Team Work, Creativity, Passion,
            Possibility Mentality and Sacrifice are what defines our commitment
            to excellence.
          </p>
        </div>
      </div>

      <Testimonial />

      <div className="partner-card">
        <img className="p-image" src="../image/p-1.png" />
        <img className="p-image" src="../image/p-2.png" />
        <img className="p-image" src="../image/p-3.png" />
        <img className="p-image" src="../image/p-4.png" />
        <img className="p-image" src="../image/p-5.png" />
        <img className="p-image" src="../image/p-6.png" />
        <img className="p-image" src="../image/p-7.png" />
        <img className="p-image" src="../image/p-8.png" />
        <img className="p-image" src="../image/p-9.png" />
      </div>
    </>
  );
}

export default About