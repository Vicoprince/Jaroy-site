import React from "react";
// import "./Graphics.css";
import { Tabs, Tab, AppBar } from "@mui/material";

const Comptia = () => {
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
                <h4>Hardware Engineering (CompTIA A+)</h4>
                <p>
                  Want to learn how to troubleshoot a wide range of devices,
                  from computers to smartphones. CompTIA A+ is the best starting
                  point for any career in IT – it can help you get your first
                  job in IT, and set you on a path to IT success. In this
                  course, you will install, configure, optimize, troubleshoot,
                  repair, upgrade, and perform preventive maintenance on
                  personal computers, digital devices, and operating systems.
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
              The CompTIA A+ Certification is an internationally recognized
              testing program sponsored by the Computing Technology Industry
              Association (CompTIA) that certifies the competency of entry-level
              service technicians in the computer industry. It lets employers
              know your achievement level and that you have the ability to do
              the job right because you have the knowledge, technical skills,
              and customer relations skills necessary for a successful computer
              service technician career. CompTIA A+ certified professionals are
              proven problem solvers. They support today’s core technologies
              from security to cloud to data management and more. CompTIA A+ is
              the industry standard for launching IT careers into today’s
              digital world. It is the only industry recognized credential with
              performance-based items to prove pros can think on their feet to
              perform critical IT support tasks in the moment. It is trusted by
              employers around the world to identify the go-to person in end
              point management and technical support roles. CompTIA A+ is
              regularly re-invented by IT experts to ensure that it validates
              core skills and abilities demanded in the workplace.
            </div>
            <div className="g-tabImage">
              <img src="../image/comptia1.jpg" alt="unsplash-graphics" />
            </div>
          </div>

          <div className="review-sec1">
            <h3>Our Reviews & Testimonials</h3>
            <div classname="review-wrapper">
              <p className="review-text">
                The training was fine, very interactive and a conducive
                environment. The instructor is highly knowledgeable in the
                curriculum of CompTIA A+ and he is ready to dispatch answers to
                every questions asked by us. All the staff are wonderful. Kudos
                to Jaroy.
              </p>
              <h5 className="review-name">Adedamilola Kolapo</h5>
            </div>
            <div classname="review-wrapper">
              <p className="review-text">Conducive classroom/environment</p>
              <h5 className="review-name">Job Ibu</h5>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="g-tabContent">
            <div className="g-tabImage">
              <img src="../image/comptia2.jpg" alt="unsplash-graphics" />
            </div>
            <div className="g-tabText">
              The CompTIA A+ Certification is divided into two parts:
              <span className="g-subText">Core Hardware </span> and{" "}
              <span className="g-subText">
                Operational Systems Technologies.{" "}
              </span>
              Our CompTIA A+ Certification Training Program matches the
              requisites of both modules.
              <ul>
                <li>- Basic Components of PC</li>
                <li>- Operating Systems Technology</li>
                <li>- Installing and Configuring PC components</li>
                <li>
                  - Installing, Configuring, and Troubleshooting Display and
                  Multimedia devices
                </li>
                <li>
                  - Installing, Configuring, and Troubleshooting storage devices
                </li>
                <li>
                  - Installing, Configuring, and Troubleshooting Internal System
                  Components
                </li>
                <li>
                  - Installing, Configuring, and Maintaining Operating Systems
                </li>
                <li>- Hacking of System Passwords</li>
                <li>- PC Problems and Solution</li>
                <li>- PC Assembly, Upgrading and Maintenance</li>
                <li>- Maintaining and Troubleshooting Microsoft Windows</li>
                <li>- Network Infrastructure Concepts</li>
                <li>- Configuring and Troubleshooting Networks</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="g-tabContent">
            <div className="g-tabText2">
              This course is designed for individuals who have basic computer
              user skills and who are interested in obtaining a job as an
              entry-level IT technician. This course is also designed for
              students who are seeking the CompTIA A+ certification
            </div>
            <div className="g-tabImage">
              <img src="../image/comptia3.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="g-tabContent">
            <div className="g-tabText">
              <ul>
                <li> - Computer technicians</li>
                <li> - Students</li>
                <li> - Job Seekers</li>
                <li> - System Administrators</li>
                <li> - Administrative Officers/Managers</li>
                <li> - Bloggers</li>
                <li>
                  - Individuals who are interested in developing a professional
                  career in Computer Networking and Computer Maintenance
                </li>
              </ul>
              <div>
                <h4>Training Course Methodology</h4>
                <p>
                  Multiple training delivery methods are employed including
                  Lectures, Demonstrations, Practical, Self - Practice and
                  workshop using real life case study with particular reference
                  to Nigerian situations. The training is at least 80%
                  practical.
                </p>
              </div>
              <div>
                <h4>Benefits</h4>
                <ul>
                  <li>- Fix computer hardware problems.</li>
                  <li>- To start his own computer repair business.</li>
                  <li>
                    - Have individual confidence and security in being a part of
                    today’s IT world.
                  </li>
                  <li>
                    - Be able to sit for and pass CompTIA A+ Professional exams.
                  </li>
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

export default Comptia;
