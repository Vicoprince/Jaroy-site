import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import { SliderData } from '../data/SliderData';
import { CourseData } from "../data/CourseData";
import Testimonial from '../components/Testimonial';
import Partners from '../components/partners/Partners';

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />

      <div className="top-text">
        <h1>Best Institution To learn Everything</h1>
      </div>

      <div className="info-card">
        <div className="info-wrapper">
          <div className="card1">
            <img src="../image/ctg-1.png" />
            <h4>Digital Literacy</h4>
          </div>

          <div className="card2">
            <img src="../image/ctg-2.png" />
            <h4>Web Development</h4>
          </div>

          <div className="card3">
            <img src="../image/ctg-3.png" />
            <h4>Digital Marketing</h4>
          </div>

          <div className="card4">
            <img src="../image/ctg-3.png" />
            <h4>Cyber Security</h4>
          </div>

          <div className="card5">
            <img src="../image/ctg-3.png" />
            <h4>IELTS</h4>
          </div>
        </div>
      </div>

      <div className="value-card">
        <h3>Welcome To JaroyMtech</h3>
        <hr />
      </div>

      <div className="value-wrapper">
        <div className="value-left">
          <h1>Our Core Values</h1>
          <ul>
            <li>
              <b>Integrity: </b>Transparency in all our business activities and
              relationships and being accountable for our actions.
            </li>
            <li>
              <b>Dilligence: </b>Delivering superior performance through high
              quality services has always been a primary driving force for
              everyone at Jaroymtech.
            </li>
            <li>
              <b>Team Work: </b>Realising the strength in unity, sharing core
              values and respecting each other's opinions and views.
            </li>
            <li>
              <b>Creativity: </b>Encouraging the free flow of ideas and
              appreciating innovations.
            </li>
            <li>
              <b>Passion: </b>Being enthusiastic and ready to accept
              responsibility, proud of our business and vocations.
            </li>
            <li>
              <b>Possibility Mentality: </b>We believe that the mental picture
              of a man is what defines his actual future.
            </li>
          </ul>

          <button className="value-button">Learn More</button>
        </div>
        <div className="value-right">
          <img src="../image/image2.jpg" />
        </div>
      </div>

      <div className="apply-wrapper">
        <div className="apply-card">
          <div className="apply1">
            <h1>Apply for Full Time 2022</h1>
            <p>
              Our Full Time Courses are not primarily focuses on teaching
              methods but it is aimed at students wishing to know more about
              Technology and Management
            </p>
            <button className="apply-button">Apply Now</button>
          </div>

          <div className="apply2">
            <h1>Apply for Part Time 2022</h1>
            <p>
              Our Part Time Courses focuses on leading people and Organizations
              to face critical challenges of sustainability,innovation and
              changes in today's highly volatile and uncertain environment.
            </p>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </div>

      <div className="course-title">
        <h5>Our course</h5>
        <hr />
        <h1>Featured Courses </h1>

        <div className="course-list">
          {CourseData.map((item, index) => (
            <div className="course" key={index}>
              <div className="browser">
                <h4>{item.title}</h4>
              </div>
              <div className="sub-text">
                <p>
                  <i class="fa fa-star"></i> {item.subText}{" "}
                </p>
              </div>
              <img src={item.image} className="c-img" />
            </div>
          ))}
          ;
        </div>
      </div>
      <Testimonial />
      <Partners />
    </>
  );}

export default Home