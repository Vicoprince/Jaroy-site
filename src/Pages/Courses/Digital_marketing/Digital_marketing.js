import React from "react";
// import "./Graphics.css";
import { Tabs, Tab, AppBar } from "@mui/material";

const Digital_marketing = () => {
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
                <h2>Digital Marketing</h2>
                <p>
                  Are you ready to learn all about Digital Marketing? <br />{" "}
                  Learn best practices and techniques from experts with
                  real-world exprience. This course covers{" "}
                  <span className="g-subText">
                    Search Engine Optimization (SEO){" "}
                  </span>
                  , <span className="g-subText">Email Marketing </span>,{" "}
                  <span className="g-subText">Google Local Optimization </span>
                  <span className="g-subText">
                    Conversion Rate Optimization
                  </span>
                  , and{" "}
                  <span className="g-subText">
                    Content Optimization & Marketing
                  </span>
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
              This course designed to provide a one stop solution for anyone
              looking to learn all the important concepts and techniques for
              digital marketing. You will learn the importance of SEO and will
              learn about the major techniques essential for selling on the
              internet, Master the social media and learn all about optimizing
              your online ads. You will learn to create websites that are built
              to enable usability & sales, email Marketing, analytics and social
              media marketing.
            </div>
            <div className="g-tabImage">
              <img src="../image/digital-marketing.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="g-tabContent">
            <div className="g-tabImage">
              <img src="../image/social-media.jpg" alt="unsplash-graphics" />
            </div>
            <div className="g-tabText">
              The topics that are covered in this program include:
              <ul>
                <li>- Search Engine Optimization (SEO)</li>
                <li>- Pay-Per Click Management & Optimization</li>
                <li>- Social Media Marketing (SEM)</li>
                <li>- Website Design that impacts & Sells</li>
                <li>- Online Reputation Management</li>
                <li>- Conversion Rate Optimization</li>
                <li>- Email Marketing</li>
                <li>- Google Local Optimization</li>
                <li>- Content Optimization & Marketing</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="g-tabContent">
            <div className="g-tabText2">
              Candidates are expected to be confident with Windows Operating
              System environments, including creating, moving and deleting files
              and folders and use of web browsers. They must also be familiar
              with the common internet, website and web terminologies.
            </div>
            <div className="g-tabImage">
              <img src="../image/marketing.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="g-tabContent">
            <div className="g-tabText">
              This course is designed for learners who are creative.
              <ul>
                <li> - Web Designers</li>
                <li> - Fresh graduates</li>
                <li> - Business Owners</li>
                <li> - Web Developers</li>
                <li> - Online Marketers</li>
                <li> - Bloggers</li>
                <li> - Marketers who are interested in online Marketing</li>
                <li> - Web programmers</li>
              </ul>
              <div>
                <h4>Training Course Methodology</h4>
                <p>
                  Multiple training delivery methods are employed including
                  Lectures, Demonstrations, Practical, Self-Practice and
                  workshops using real-life case studies with particular
                  reference to Nigerian situations. The training is at least 90%
                  practical (Hands-on).
                </p>
              </div>
              <div>
                <h4>Benefits</h4>
                <p>
                  At the end of the training course, participants will have:
                </p>
                <ul>
                  <li>
                    - Mastered Digital Marketing Concepts such as SEO and SMM
                  </li>
                  <li>- Mastered creating better email marketing campaigns</li>
                  <li>- Understood the techniques of content optimization</li>
                  <li>- Used SEO and SMM techniques for their own projects</li>
                </ul>
              </div>
              <div>
                <h4>Entitlements</h4>
                <ul>
                  <li>- Course Completion Certificate</li>
                  <li>- Training materials</li>
                  <li>- One Month free Mentorship on Online Marketing</li>
                </ul>
              </div>
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
                  - 6 weeks. Three (3) hours on each day (Tuesdays & Thursdays)
                  - Time: 10 am – 1 pm (Tuesdays & Thursdays)
                </li>
              </ul>
              <h4>Weekends</h4>
              <ul>
                <li> - 1 month. Four (4) hours every Saturday (10 am -2 pm)</li>
                <li> - 1 month. Four (4) hours every Saturday (2pm – 5 pm)</li>
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
              <h3>Payment Types</h3>
              <ul>
                <li>- Full Payment (Attracts 5% discount of Course Fee)</li>
                <li>
                  {" "}
                  - Installment Payments (First Payment= 60% of Course Fee)
                </li>
              </ul>
              <h3>Course Fee</h3>
              <h5>
                Registration - <span className="g-subText"> 1,000</span>
              </h5>{" "}
              <h5>
                Tuition - <span className="g-subText">40,000</span>
              </h5>
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

export default Digital_marketing;
