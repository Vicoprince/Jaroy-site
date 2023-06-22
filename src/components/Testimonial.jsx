import React from 'react';
import './Testimonial.css';

const Testimonial = () => {

  return (
    <>
      <div>
        <div className="testimonial-wrapper">
          <h5 className="testimonial-header">Testimonials</h5>
          <hr />
          <h2 className="testimonial-text">What They Say</h2>
        </div>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <p>
            Jaroy ICT have been providing us with great IT support for several
            years, They deliver an excelent service and any issues are dealt
            with quickly and effectively.
          </p>
          <h4>IT Student</h4>
          <img src="../image/testy1.jpg" alt="ayodele moses" />
        </div>
        <div className="testimonial-card">
          <p>
            We have been incredibly impressed and pleased with the service Jaroy
            ICT have provided us with. Their expertise, support and flexibility
            have been of immerse value.
          </p>
          <h4>B.Tech</h4>
          <img src="../image/testy3.jpg" alt="Gabriel Chukwu" />
        </div>
        <div className="testimonial-card">
          <p>
            Jaroy is a place to be and also a place to acquire new skills, i
            never regret attending this institution, will definitely want all my
            siblings to be here.
          </p>
          <h4>B.Tech</h4>
          <img src="../image/testy4.jpg" alt="Ademola Oluwaseun" />
        </div>
        <div className="testimonial-card">
          <p>
            Jaroy ICT helped me greatly in tailoring me towards my career path. The lessons are very efficient and organized
          </p>
          <h4>Abubakar Hassan - ND,Computer Science</h4>
          <img src="../image/testy2.jpg" alt="Abubakar Hassan" />
        </div>
      </div>
    </>
  );
}

export default Testimonial