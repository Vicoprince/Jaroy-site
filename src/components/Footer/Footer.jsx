import React from 'react';
import './Footer.css';
import "bootstrap/dist/css/bootstrap.css";
import {Link} from 'react-router-dom';
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { ImFacebook } from "react-icons/im";
import {FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer id="footer-part">
        <div class="footer-top pt-40 pb-70">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="footer-about mt-40">
                  <div class="logo">
                    <a href="#">
                      <img
                        className="logo-image"
                        src="../image/logo.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <p>
                    Jaroy School of Management and Technology was incorporated
                    by the Nigeria Corporate Affairs Commission (CAC) to take
                    over the IT Training interest of Jaroy Investment Limited.{" "}
                  </p>
                  <ul class="mt-20">
                    <li>
                      <Link to="https://facebook.com/jaroyinvestments/">
                        <ImFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://linkedin.com/company/jaroy-investments-limited">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://wa.me/2348067399860?text=I'm%20directed%20from%20your%20website">
                        <BsWhatsapp />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <BsInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6" id="footer-card">
                <div class="footer-link mt-40">
                  <div class="footer-title pb-25">
                    <h6>Sitemap</h6>
                  </div>
                  <ul>
                    <li>
                      <Link to="/">
                        <IoArrowForward />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/About-us">
                        <IoArrowForward />
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link to="/courses">
                        <IoArrowForward />
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="/News">
                        <IoArrowForward />
                        News
                      </Link>
                    </li>
                    <li>
                      <Link to="/Event">
                        <IoArrowForward />
                        Event
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-6 col-sm-6" id="footer-card">
                <div class="footer-link support mt-40">
                  <div class="footer-title pb-25">
                    <h6>Support</h6>
                  </div>
                  <ul>
                    <li>
                      <Link to="/FAQS">
                        <i class="fa fa-angle-right"></i>FAQS
                      </Link>
                    </li>
                    <li>
                      <Link to="/Privacy">
                        <i class="fa fa-angle-right"></i>Privacy
                      </Link>
                    </li>
                    <li>
                      <Link to="/Policy">
                        <i class="fa fa-angle-right"></i>Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/Support">
                        <i class="fa fa-angle-right"></i>Support
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i class="fa fa-angle-right"></i>Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6" id="footer-card">
                <div class="footer-address mt-40">
                  <div class="footer-title pb-25">
                    <h6>Contact Us</h6>
                  </div>
                  <ul>
                    <li>
                      <div class="icon">
                        <i class="fa fa-home"></i>
                      </div>
                      <div class="cont">
                        <p>
                          17, Salawu Olabode Avenue, Opposite PRO HUB, Sam Ewang
                          Tekobo Bypass,Idi Aba, Abeokuta, Ogun State.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="fa fa-phone"></i>
                      </div>
                      <div class="cont">
                        <p>
                          +2348067399860 <br /> +2348128999857 <br />{" "}
                          +2348060060642
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <i class="fa fa-envelope-o"></i>
                      </div>
                      <div class="cont">
                        <p>info@jaroymtech.ng</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright pt-10 pb-25">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="copyright  text-center pt-15" id="f-copy">
                  <center>
                    {" "}
                    <p>
                      {" "}
                      &nbsp;&nbsp;&nbsp; Jaroy ICT Team | &copy; 2022. | All
                      Rights Reserved.
                    </p>
                  </center>
                </div>
              </div>
              <div class="col-md-4">
                <div class="copyright text-md-right text-center pt-15"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer