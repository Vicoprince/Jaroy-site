import React from 'react';
import './Contact.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoHome } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";


const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-banner">
          <div className="contact-banner-content">
            <h1 className="title-text">Contact Us</h1>
            <Breadcrumb className="b-text">
              <Breadcrumb.Item className="text">
                <Link to="/">
                  <h5>Home</h5>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Contact us</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="c-form-container">
        <div className="form-wrapper">
          <h5>Contact Us</h5>
          <hr />
          <h1>Keep in touch</h1>

          <Form>
            <div className="input-field">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your last name" />
              </Form.Group>
            </div>

            <div className="input-field">
              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Your number" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Your subject" />
            </Form.Group>

            <textarea placeholder="Message"></textarea>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>

      <div className="details-section">
        <div className="details">
          <IoHome className="details-icon" />
          <h3>Where we are</h3>
          <p>
            17, Salawu Olabode Avenue, Opposite PRO HUB, Sam Ewang Tekobo
            Bypass, Idi Aba, Abeokuta, Ogun State.
          </p>
        </div>
        <div className="details">
          <MdPhone className="details-icon" />
          <h3>Phone us on</h3>
          <p>+2348067399860</p>
          <p>+2348128999851</p>
          <p>+2348060060642</p>
        </div>
        <div className="details">
          <BiEnvelope className="details-icon" />
          <h3>Email us</h3>
          <p>info@jaroymtech.ng jaroyeservices@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Contact