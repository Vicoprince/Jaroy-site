import React from "react";
import "./Graphics.css";

const Graphics = () => {
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
                  <span className="g-subText">Photoshop </span>, <span className="g-subText">Illustrator </span>,{" "}
                  <span className="g-subText">InDesign </span>, and <span className="g-subText">Fireworks </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>lorem</p>
      </div>
    </>
  );
};

export default Graphics;
