import React from "react";
// import "./Graphics.css";
import { Tabs, Tab, AppBar } from "@mui/material";

const Network_plus = () => {
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
                <h5>CompTIA N+</h5>
                <p>
                  This course is intended for entry-level computer support
                  professionals with a basic knowledge of computer hardware,
                  software, and operating systems who wish to increase their
                  knowledge and understanding of networking concepts and acquire
                  the required skills to prepare for a career in network support
                  or administration, or who wish to prepare for the CompTIA
                  Network+ certification.
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
              Network+ (Network Plus) is a mid-level certification for network
              technicians. This certification is designed to test the competency
              of a mid-level network technician in supporting and configuring
              TCP/IP clients in terms of network design, cabling, hardware
              setup, configuration, installation, support, and troubleshooting.
            </div>
            <div className="g-tabImage">
              <img src="../image/net-cables.jpg" alt="unsplash-graphics" />
            </div>
          </div>

          <div className="review-sec1">
            <h3>Our Reviews & Testimonials</h3>
            <div classname="review-wrapper">
              <p className="review-text">
                The training instructor was good, practical was good. The
                environment was good, interaction in the class was awesome and
                the instructor was out of this world.
              </p>
              <h5 className="review-name">Patrick Nwofor</h5>
            </div>
            <div classname="review-wrapper">
              <p className="review-text">
                It was interesting and an eye opener to the core of networking.{" "}
              </p>
              <h5 className="review-name">Femi Onakoya</h5>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="g-tabContent">
            <div className="g-tabImage">
              <img src="../image/network.jpg" alt="unsplash-graphics" />
            </div>
            <div className="g-tabText">
              The courses that are covered in this program include:
              <ul>
                <li>- Network Fundamentals</li>
                <li>- The OSI and TCP/IP Models</li>
                <li>- Network Operating Systems</li>
                <li>- Properties of Network Traffic</li>
                <li>- Installing and Configuring Switched Networks</li>
                <li>- Configuring IP Networks</li>
                <li>- Installing and Configuring Routed Networks</li>
                <li>- Explaining Network Application and Storage Services</li>
                <li>- Monitoring and Troubleshooting Networks</li>
                <li>- Networking Attacks and Mitigations</li>
                <li>- Installing and Configuring Security Devices</li>
                <li>- Authentication and Access Controls</li>
                <li>- Deploying and Troubleshooting Cabling Solutions</li>
                <li>
                  - Implementing and Troubleshooting Wireless Technologies
                </li>
                <li>- Using Remote Access Methods</li>
                <li>- Identifying Site Policies and Best Practices</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="g-tabContent">
            <div className="g-tabText2">
              A typical student taking the CompTIA Network+ course should have a
              minimum of six months of professional computer support experience
              as a PC or help desk technician. To ensure your success in this
              course, you should possess basic Windows® and Linux® user skills
              and a fundamental understanding of computer and networking
              concepts. Previous knowledge of compTIA A+ is an advantage.
            </div>
            <div className="g-tabImage">
              <img src="../image/network-wiring.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="g-tabContent">
            <div className="g-tabText">
              <ul>
                <li>- Students</li>
                <li>- Job Seekers</li>
                <li>
                  - Anyone that is required to work with Computer Networks.
                </li>
                <li>
                  - Individuals who want to pursue a professional career in
                  Computer Networking and Maintenance.
                </li>
              </ul>
              <div>
                <h4>Benefits</h4>
                <p>
                  At the end of the programme, a participant will be issued a
                  Certificate of attendance. In addition to this, he will
                  acquire the skills and knowledge to:
                </p>
                <ul>
                  <li>- Network and fix Computer Systems.</li>
                  <li>- Work on Computer Access and Security</li>
                  <li>
                    - Have individual confidence and security in being a part of
                    today’s IT world.
                  </li>
                  <li>- Be able to sit for and pass CompTIA N+ exams.</li>
                  <li>- Prepared for CompTIA N+ Professional exams</li>
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
                <li>- 54 hours over</li>
                <li>- Six (6) weeks</li>
                <li>- Three (3) hours Mondays, Wednesdays & Fridays.</li>
                <li>- Time: 9am – 12pm</li>
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
                Tuition - <span className="g-subText">60,000</span>
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

export default Network_plus;
