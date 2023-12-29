import React from 'react';
import myPicture from '../../assets/myPhoto1.jpg';
import star from '../../assets/star-2.png'

const FirstSection = () => (
  <section className="about-first-section">
    <div className="about-image" data-aos="slide-up">
      <img src={myPicture} alt="Ahmed Salah" className="about-picture" />
    </div>
    <div className="short-summary" data-aos="zoom-out">
      <h2 className="self-summary">
        <img src={star} alt="star" />
        {' '}
        Self-Summary
        {' '}
        <img src={star} alt="star" />
      </h2>
      <div className="summary-text">
        <div id="line_self_summary" className="line">
          <span id="star">&#10022;</span>
        </div>
        <h2 id="name">Ahmed Salah</h2>
        <p className="about-paragraph">
          I am a highly motivated and experienced Full Stack developer with a passion for
          creating innovative and user-friendly web applications. I have a strong understanding
          of the latest web development technologies and best practices, and I am always eager
          to learn new things. I am also a team player and I am always willing to go the extra
          mile to get the job done.
        </p>
      </div>
    </div>
  </section>
);

export default FirstSection;
