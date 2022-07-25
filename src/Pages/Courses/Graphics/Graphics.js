import React from "react";
import "./Graphics.css";
import { Tabs, Tab, AppBar } from '@mui/material';

const Graphics = () => {

  
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };

  return (
    <>
      <div className="g-Section">
        <div className="g-Wrapper">
          <div className="g-Slide">
            <div className="g-lider">
              <img
                className="g-Image"
                src="../image/g-banner.jpg"
                alt="graphics-image"
              />

              <div className="g-Content">
                <h1>Graphics Design</h1>
                <p>
                  Are you ready to learn all about graphic design? <br /> Learn
                  best practices and techniques from experts with real-world
                  exprience, then you are at the right place. This course covers{" "}
                  <span className="g-subText">Photoshop </span>,{" "}
                  <span className="g-subText">Illustrator </span>,{" "}
                  <span className="g-subText">InDesign </span>, and{" "}
                  <span className="g-subText">Fireworks </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="g-tabs">
        {/* <AppBar position="static"> */}
        <Tabs value={value} onChange={handleTabs}>
          <Tab label="Course Overview" />
          <Tab label="Course Content" />
          <Tab label="Pre-requisite" />
          <Tab label="Target-Audience" />
          <Tab label="Duration" />
          <Tab label="Course Fee" />
        </Tabs>
        {/* </AppBar> */}
        <TabPanel value={value} index={0}>
          <div className="g-tabContent">
            <div className="g-tabText">
              This course will introduce individuals to the creative world of
              graphics design- the art of visual communication through the use
              of text, images and symbols. When you think of graphic design,
              think of artistic advertisements, Eye-grabbing graphics on
              websites, stunningly arranged spreads in magazines. In this course
              you will acquire the professional skills required to design
              posters, business cards, book covers, product labels, logos,
              website layouts, mobile apps, software interfaces—the list goes
              on. This course will equip the individuals with the necessary
              skills and tool-set to become good graphic designers.
            </div>
            <div className="g-tabImage">
              <img src="../image/graphics-image.jpg" alt="unsplash-graphics" />
            </div>
          </div>

          <div className="review-sec1">
            <h3>Our Reviews & Testimonials</h3>
            <div classname="review-wrapper">
              <p className="review-text">
                It was a valuable training and I learnt a lot from the class.
                Graphics design class is very useful in my daily activities .It
                was a memorable experience and my teacher was the best.
              </p>
              <h5 className="review-name">Babajide Odufuwa</h5>
            </div>
            <div classname="review-wrapper">
              <p className="review-text">
                JAROY is the place to be, The members of staff are friendly and
                the learning environment is conducive.
              </p>
              <h5 className="review-name">Odekunle Oluwaseun</h5>
            </div>
          </div>

          <div className="review-sec2">
            <div classname="review-wrapper">
              <p className="review-text2">
                Jaroy is indeed a good citadel for learning. I enjoyed my stay
                here.
              </p>
              <h5 className="review-name">Ayooluwa Taiwo Olatunbosun</h5>
            </div>
            <div classname="review-wrapper">
              <p className="review-text3">
                Jaroy is precisely the best place to be because I really enjoyed
                both my training and the awesome atmosphere. I came to Jaroy
                with nothing but am practically learning with great potentials
                and my deepest respect and undiluted greetings goes to my
                instructor who was the catalyst that triggered the speed of my
                learning. I wish to thank all the staffs for their vital roles.
              </p>
              <h5 className="review-name">Kehinde Fadhullah Abiodun</h5>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="g-tabContent">
            <div className="g-tabImage">
              <img src="../image/g-courseContent.jpg" alt="unsplash-graphics" />
            </div>
            <div className="g-tabText">
              The courses that are covered in this program include;
              <ul>
                <li>Introduction</li>
                <li>Core concepts (Visual Arts, Page Layout, etc)</li>
                <li>Typography</li>
                <li>Color theory</li>
                <li>Planning Projects</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Photoshop</li>
                <li>Corel Draw</li>
                <li>Adobe Design</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="g-tabContent">
            <div className="g-tabText2">
              Candidates are expected to be computer literate. They should be
              comfortable using computers and have some experience drawing basic
              shapes in other software applications.
            </div>
            <div className="g-tabImage">
              <img src="../image/g-prequisite.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="g-tabContent">
            <div className="g-tabText">
              This course is designed for learners who are creative. Creativity
              is one of, if not the most important skill for graphic designers.
              <ul>
                <li> - Students</li>
                <li> - Entrepreneurs</li>
                <li> - Personal Assistants</li>
                <li> - Public Relation Officers</li>
                <li> - Digital Marketers</li>
                <li> - Social Media content managers</li>
                <li> - Web Designers</li>
                <li> - Anyone who wants to become a graphic designer</li>
              </ul>
            </div>
            <div className="g-tabImage">
              <img src="../image/g-targetAud.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="g-tabContent">
            <div className="g-tabImage">
              <img src="../image/g-time.jpg" alt="unsplash-graphics" />
            </div>
            <div className="g-tabText">
              <h4>Weekdays</h4>
              <ul>
                <li>
                  {" "}
                  - Duration: 2 Months (Mondays, Wednesdays, Fridays) Time: 9am
                  - 12 noon
                </li>
              </ul>
              <h4>Weekends</h4>
              <ul>
                <li> - Duration: Three (3) months Time: 10am – 2pm</li>
              </ul>
              <h4>Internship/ Mentorship</h4>
              <ul>
                <li> 3 months</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div className="g-tabContent">
            <div className="g-tabImage">
              <img src="../image/course-fee.jpg" alt="unsplash-graphics" />
            </div>
            <div className="g-tabText">
              <h5>
                Interested individuals can pay using the following methods:
              </h5>
              <ul>
                <li> - Pay at our centre</li>
                <li>
                  - Pay or Transfer to the bank using the following bank details
                </li>
              </ul>
              <h4>Course Fee</h4>
              <h5>Registration - 1,000</h5> <h5>Tuition - 30,000</h5>
              <h5>
                Account Number: <span className="g-subText">6120708018</span>
              </h5>
              <h5>
                Account Name:{" "}
                <span className="g-subText">
                  Jaroy School of Management and Technology
                </span>
              </h5>
              <h5>
                Bank Name:{" "}
                <span className="g-subText">First City Monument Bank</span>
              </h5>
            </div>
          </div>
        </TabPanel>
      </div>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <p>{children}</p>}</div>;
}

export default Graphics;
