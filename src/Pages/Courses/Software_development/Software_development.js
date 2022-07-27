import React from "react";
// import "./Graphics.css";
import { Tabs, Tab, AppBar } from "@mui/material";

const Software_development = () => {
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
                <h3>Software Development</h3>
                <p>
                  Do you enjoy solving complex problems, would you love to
                  create beautiful and user-friendly softwares? You are at the
                  write place to boost up your skills in software development
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
              This beautifully designed, hands-on course, covers the
              fundamentals of software engineering. Instead of overwhelming
              students with unnecessary details, the course aims to focus on the
              fundamentals, and to instill solid software engineering principles
              in beginners. The course utilizing C#, starts slowly with the very
              basics but quickly picks up steam, leading up to object oriented
              programming.
              <h4>What you'll learn</h4>
              <ul>
                <li>To use the Visual Studio IDE.</li>
                <li>To write, compile and run basic programs using C#.</li>
                <li>To declare and use variables.</li>
                <li>To use value types and reference types.</li>
                <li>To use relevant data structures.</li>
                <li>To use relevant control structures.</li>
                <li>To use classes, methods and properties.</li>
                <li>To apply basic object-oriented programming principles.</li>
              </ul>
            </div>
            <div className="g-tabImage">
              <img src="../image/soft1.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="g-tabContent">
            <div className="g-tabImage">
              <img src="../image/soft2.jpg" alt="unsplash-graphics" />
            </div>
            <div className="g-tabText">
              The courses that are covered in this program include:
              <ul>
                <li>- Introduction</li>
                <li>
                  - Setting up and using an IDE to compile and run basic
                  programs.
                </li>
                <li>- Data Types and Variables</li>
                <li>- Value Types and Reference Types</li>
                <li>- Access modifiers</li>
                <li>- Data Structures</li>
                <li>- Control structures</li>
                <li>- Classes</li>
                <li>- Object Oriented Programming</li>
                <li>- Conclusion</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="g-tabContent">
            <div className="g-tabText2">
              <ul>
                <li>- Computer literacy.</li>
                <li>- Interest in programming.</li>
                <li>
                  - Ideally a Windows PC or Mac, however the course can be
                  completed with just a modern browser.
                </li>
              </ul>
            </div>
            <div className="g-tabImage">
              <img src="../image/soft3.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="g-tabContent">
            <div className="g-tabText">
              <ul>
                <li>- Beginner programmers.</li>
                <li>
                  - Anyone who has a strong interest and desire to learn
                  software engineering fundamentals.
                </li>
                <li>
                  - Those who want to find out if they will enjoy programming
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

export default Software_development;
