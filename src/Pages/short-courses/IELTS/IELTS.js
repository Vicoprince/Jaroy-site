import React from 'react';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import "./IELTS.css";
import { BsCalendar3 } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { BsMap } from "react-icons/bs";


const IELTS = () => {
  return (
    <>
      <div className="ielts-container">
        <div className="ielts-banner">
          <div className="excel-banner-content">
            <h1 className="title-text">IELTS TRAINING</h1>
            <Breadcrumb className="b-text">
              <Breadcrumb.Item className="text">
                <Link to="/">
                  <h5>Home</h5>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="text">
                <Link to="/Events">
                  <h5>Events</h5>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>IELTS TRAINING</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="ielts-container">
        <div className="ielts-content">
          <h3>IELTS TRAINING</h3>
          <div className="ielts-wrapper">
            <div className="ielts-sub">
              <BsCalendar3 className="ielts-icon" />
              <p className="ielts-sub-text">3 February 2022</p>
            </div>
            <div className="ielts-sub">
              <BiTime className="ielts-icon" />
              <p className="ielts-sub-text">2 hours per class</p>
            </div>
            <div className="ielts-sub">
              <ImLocation className="ielts-icon" />
              <p className="ielts-sub-text">Jaroy Class</p>
            </div>
          </div>

          <div className="img-sec">
            <img src="./image/ielts.jpg" />
            <p>
              The International English Language Testing System or "IELTS" is an
              international standardized test of English language proficiency
              for non-native English language speakers. Here at Jaroy, we
              guarantee that our students will come with excellent results with
              our well organized IELTS training curricullum and professional
              tutors.
            </p>
          </div>
        </div>

        <div className="ielts-text-sec">
          <div className="ielts-text-sec-content">
            <BiTime className="ielts-icon" />
            <span className="ielts-text-sec-text">First Class</span>
            <p>12:00pm - 2:00pm</p>
          </div>
          <div className="ielts-text-sec-content">
            <BiTime className="ielts-icon" />
            <span className="ielts-text-sec-text">Second Class</span>
            <p>2:00pm - 4:00pm</p>
          </div>
          <div className="ielts-text-sec-content">
            <BiTime className="ielts-icon" />
            <span className="ielts-text-sec-text">Third Class</span>
            <p>4:00pm - 6:00pm</p>
          </div>
          <div className="ielts-text-sec-content">
            <BsMap className="ielts-icon" />
            <span className="ielts-text-sec-text">Address</span>
            <p>Salawu Olabode Avenue, Abeokuta, Ogun State</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IELTS