import React from 'react';

const SecondSection = () => (
  <section className="about-second-section">
    <div className="experience" data-aos="zoom-in">
      <p className="experienceHead">Experience</p>
      <p className="duration">Jan 2023 - Present</p>
      <p className="role">Full Stack Developer</p>
      <p className="entity">Self Employed</p>
      <div className="second-role">
        <p className="duration">Dec 2022 - Dec 2023</p>
        <p className="role">Mentor for Junior front-end Developers</p>
        <p className="entity">Microverse</p>
      </div>
    </div>
    <div className="education" data-aos="zoom-in">
      <p className="educationHead">Education</p>
      <p className="duration">2018 - 2022</p>
      <p className="role">Bachelor Dgree in Business Administration</p>
      <p className="entity">Tanta University</p>
      <div className="second-role">
        <p className="duration">2022 - 2023</p>
        <p className="role">Full Stack Development</p>
        <p className="entity">Microverse</p>
      </div>
    </div>
  </section>
);

export default SecondSection;
