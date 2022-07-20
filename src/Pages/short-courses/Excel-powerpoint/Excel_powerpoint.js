import React from 'react';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import './Excel_powerpoint.css';
import { BsCalendar3 } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { ImLocation } from 'react-icons/im';
import { BsMap } from "react-icons/bs";

const Excel_powerpoint = () => {
  return (
    <>
      <div className="excel-container">
        <div className="excel-banner">
          <div className="excel-banner-content">
            <h1 className="title-text">Excel and Powerpoint</h1>
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
              <Breadcrumb.Item>Excel & powerpoint</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <div className="ep-container">
        <div className="ep-content">
          <h3>Excel and Powerpoint Program</h3>
          <div className="ep-wrapper">
            <div className="ep-sub">
              <BsCalendar3 className="ep-icon" />
              <p className="ep-sub-text">17 February 2022</p>
            </div>
            <div className="ep-sub">
              <BiTime className="ep-icon" />
              <p className="ep-sub-text">2 hours per class</p>
            </div>
            <div className="ep-sub">
              <ImLocation className="ep-icon" />
              <p className="ep-sub-text">Jaroy Class</p>
            </div>
          </div>

          <div className="img-sec">
            <img src="./image/se-1.jpg" />
          </div>
        </div>

        <div className="time-sec">
          <div className="time-sec-content">
            <BiTime className="ep-icon" />
            <span className="time-sec-text">First Class</span>
            <p>12:00pm - 2:00pm</p>
          </div>
          <div className="time-sec-content">
            <BiTime className="ep-icon" />
            <span className="time-sec-text">Second Class</span>
            <p>2:00pm - 4:00pm</p>
          </div>
          <div className="time-sec-content">
            <BiTime className="ep-icon" />
            <span className="time-sec-text">Third Class</span>
            <p>4:00pm - 6:00pm</p>
          </div>
          <div className="time-sec-content">
            <BsMap className="ep-icon" />
            <span className="time-sec-text">Address</span>
            <p>Salawu Olabode Avenue, Abeokuta, Ogun State</p>
          </div>

          <div className="bottom-text">
            <div>
              <h3 className="time-sec-text">WHY THE NEED TO LEARN MICROSOFT POWERPOINT?</h3>
              <p>
                Microsoft PowerPoint is a powerful presentation software that
                has changed the way people present ideas and information to an
                audience. With just a few clicks and keystrokes, you can add
                graphics, text, audio, video and animation to a slide show.
                Customized presentations can be saved and modified as needed and
                used again as needs arise. If time, quality or convenience is a
                factor, PowerPoint has definite advantages over traditional
                visual aids. Microsoft PowerPoint is an easy program to use and
                a powerful tool for giving a presentation. Whether your
                presentation needs a visual kick, tools for collaboration, easy
                access or the ability to share information beyond the initial
                meeting, PowerPoint is a good option. It can even help reduce
                speaking anxiety by drawing eyes away from the speaker and
                towards a screen. Just do not expect this technology to
                substitute for sound and dynamic speaking skills.
              </p>
            </div>

            <div>
              <h3 className="time-sec-text">WHY THE NEED TO LEARN MICROSOFT EXCEL?</h3>
              <p>
                Microsoft Excel gives businesses the tools they need to make the
                most of their data. And when it comes to making the most of
                resources, and maximising return on investment, this is becoming
                increasingly important. Firms are collecting ever-greater
                volumes of data from multiple sources, including
                in-store-transactions, online sales and social media. They need
                to be able to collate and analyse this information quickly and
                effectively. Excel spreadsheets are commonly used across
                business to display financial information and other data
                relevant to the running of the business. This could be
                information relevant to the customer relationship management
                department, sales, marketing or HR. With so many business
                functions now reliant on IT and the internet, Excel continues to
                be seen as a vital tool for administration and the effective
                running of a business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Excel_powerpoint