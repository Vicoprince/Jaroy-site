import React from "react";
// import "./Graphics.css";
import { Tabs, Tab, AppBar } from "@mui/material";

const Digital_Literacy = () => {
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
                <h1>Digital Literacy</h1>
                <p>
                  Are you ready to learn all about graphic design? <br /> Learn
                  best practices and techniques from experts with real-world
                  exprience, then you are at the right place. This course covers{" "}
                  <span className="g-subText">Microsoft Office Word </span>,{" "}
                  <span className="g-subText">Microsoft Office Word </span>,{" "}
                  <span className="g-subText">
                    Microsoft Office PowerPoint{" "}
                  </span>
                  <span className="g-subText">Microsoft Office Access </span>,
                  and <span className="g-subText">Digital Lifestyle </span>
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
              Digital literacy is the ability to navigate our digital world
              using reading, writing, technical skills, and critical thinking.
              It’s using technology—like a smartphone, PC, e-reader, and more—to
              find, evaluate, and communicate information. With Microsoft
              Digital Literacy classes, you can gain skills needed to
              effectively explore the Internet. Digital literacy can play a
              powerful role in helping people connect, learn, engage with their
              community, and create more promising futures. Simply reading
              articles online does not address digital literacy, so it is
              important for everyone to understand the variety of content and
              possibilities that are accessible online. This digital literacy
              course can help individuals gain the digital skills necessary to
              engage in a digital economy and improve livelihoods. The digital
              literacy program is used by individuals, nonprofits, schools, and
              governments all over the world.
            </div>
            <div className="g-tabImage">
              <img src="../image/do-more.jpg" alt="unsplash-graphics" />
            </div>
          </div>

          <div className="review-sec1">
            <h3>Our Reviews & Testimonials</h3>
            <div classname="review-wrapper">
              <p className="review-text">
                Jaroy is a great place to be because the staffs are very social,
                hospitable and down to earth and our teacher was a great person
                to be around because he tries as much as possible to explain to
                the least possible detail for easy understanding, He was very
                good.
              </p>
              <h5 className="review-name">AJIGBOTOSO Daniel </h5>
            </div>
            <div classname="review-wrapper">
              <p className="review-text">
                I love how they train, the tutor is friendly, he makes sure you
                understand what he is teaching. I am very grateful, Jaroy is the
                best Computer training institute in Abeokuta. Jaroy you are the
                best!
              </p>
              <h5 className="review-name">Onilede Victoria</h5>
            </div>
          </div>

          <div className="review-sec2">
            <div classname="review-wrapper">
              <p className="review-text2">
                Jaroy is a good organization with well cultured workers and a
                very clean environment. I am impressed with the certificate in
                digital literacy program, the teacher was nice, and he was
                always ready to impact knowledge irrespective of any challenges.
                Thanks to all, It was a pleasure all through my days.
              </p>
              <h5 className="review-name">Ogunbona Ebenezer</h5>
            </div>
            <div classname="review-wrapper">
              <p className="review-text3">
                The instructor was much focused and always ready to impact
                knowledge, Jaroy is a lovely place.
              </p>
              <h5 className="review-name">Gbadamosi Zainab</h5>
            </div>
          </div>
          <div className="review-sec2">
            <div classname="review-wrapper">
              <p className="review-text2">
                The training was cool and we had a nice teacher who is always
                ready to for us, I loved the class and I am going to tell my
                friends at home to come for the training.
              </p>
              <h5 className="review-name">Ayotunde Wuraola</h5>
            </div>
            <div classname="review-wrapper">
              <p className="review-text3">
                This training was very nice and conducive and I am so glad on
                how we were being treated in this training centre. More power to
                your elbows.
              </p>
              <h5 className="review-name">Ajala Olayinka</h5>
            </div>
            <div classname="review-wrapper">
              <p className="review-text3">
                Infact am so happy with this computer program, Why? because I
                can now operate computers and I can do a lot in the office
                without any problems I give thanks to the management for their
                understanding and cooperation.
              </p>
              <h5 className="review-name">Sosanya Praise Peter</h5>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="g-tabContent">
            <div className="g-tabImage">
              <img src="../image/microsoft.jpg" alt="unsplash-graphics" />
            </div>
            <div className="g-tabText">
              The courses that are covered in this program include:
              <ul>
                <li>- Computer and Device Basics</li>
                <li>- Typing Basics</li>
                <li>- Internet Basics</li>
                <li>- Computer Security and Privacy Settings</li>
                <li>- Microsoft Windows</li>
                <li>- Microsoft Office Word</li>
                <li>- Microsoft Office Excel</li>
                <li>- Microsoft Office PowerPoint</li>
                <li>- Microsoft Office Access</li>
                <li>- Microsoft Office Publisher</li>
                <li>- Digital Lifestyle</li>
              </ul>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="g-tabContent">
            <div className="g-tabText2">
              No knowledge of computer and/or IT is required to attend this
              program.
            </div>
            <div className="g-tabImage">
              <img src="../image/live-work.jpg" alt="unsplash-graphics" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="g-tabContent">
            <div className="g-tabText">
              This course is designed for learners who are creative.
              <ul>
                <li> - Students</li>
                <li> - Entrepreneurs</li>
                <li> - Personal Assistants</li>
                <li> - Public Relation Officers</li>
                <li> - Anyone who wants to become computer literate</li>
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
              <ul>
                <li>- Eight (8) weeks.</li>
                <li>- Three (3) hours daily </li>
                <li>- Mondays - Fridays.</li>
                <li>- Mondays - Fridays.</li>
              </ul>
              <h4>Class-time:</h4>
              <ul>
                <li>- 9:00am- 12:noon</li>
                <li>- 1:00pm – 4:00pm</li>
                <li>- 4:00pm – 7:00pm</li>
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
                  <li> - Installment Payments (First Payment= 60% of Course Fee)</li> 
              </ul>
              <h3>Course Fee</h3>
              <h5>
                Registration - <span className="g-subText"> 1,000</span>
              </h5>{" "}
              <h5>
                Tuition - <span className="g-subText">30,000</span>
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

export default Digital_Literacy;
