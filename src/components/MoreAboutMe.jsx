import React, { useRef } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import myPhoto from '../assets/myPhoto1.jpg';
import Footer from './Home-components/Footer';

export const scrollFunction = (card) => {
  if (window.scrollY >= 2080 && card !== undefined) {
    card.classList.add('endOfScroll');
  }
  if (window.scrollY < 2080 && card !== undefined) {
    card.classList.remove('endOfScroll');
    card.classList.add('scroll');
  }
};

const MoreAboutMe = () => {
  const card = useRef();
  const wraper = useRef();
  if (window.innerWidth >= 768) {
    window.addEventListener('scroll', () => { scrollFunction(card.current); });
  }

  return (
    <>
      <div className="more-information-wraper" ref={wraper}>
        <div className="contact-card" data-aos="slide-up" ref={card}>
          <img src={myPhoto} alt="ahmed" className="more-photo" />
          <h2 className="name" id="cardName">Ahmed Salah</h2>
          <p className="userName">@AhmedSalah</p>
          <a href="https://www.linkedin.com/in/ahmed-salah-elkholy/" target="_blank" rel="noreferrer" className="cardCircle">
            <FaLinkedin className="linked-in-card" />
          </a>
          <a href="https://github.com/ahmed025566" target="_blank" rel="noreferrer" className="cardCircle">
            <BsGithub className="github-card" />
          </a>
          <NavLink to="/contact"><button type="button" className="contactMe">Contact Me</button></NavLink>
        </div>
        <div id="aboutMePara" data-aos="zoom-in">
          <p className="about-me-header">About me</p>
          <p className="about-me-paragraph">
            I can break down large problems into a clean plan, and I can work with your
            teammates to systematically find the right solution.
            I always approach my work with the mindset of the user and focus on their
            needs with everything I am building. I consider dissatisfaction to be a
            weakness of the product, not a weakness of the user.
            I’ve spent the last several months working remotely with people across five different
            time zones and built awesome full-stack applications using React and Ruby.
          </p>
          <p className="about-me-paragraph">
            I am passionate about using technology to create
            innovative and user-centered experiences. I am always up-to-date on the latest trends
            in front-end development and I am always eager to learn new things. I am also a strong
            communicator and I am able to translate technical concepts into clear and concise language.
          </p>
        </div>
        <div className="detailed-experience">
          <p className="experienceHeader" data-aos="zoom-in-left" data-aos-duration="400" data-aos-offset="100">
            Experience
          </p>
          <div className="Div" data-aos="zoom-in-left">
            <p className="duration" id="more">Dec 2022 - Present</p>
            <p className="frstRole">Full Stack Developer</p>
            <p className="entity more">Microverse</p>
            <ul className="job description">
              <li className="item">Developed and maintained user interfaces for a variety of web applications using HTML, CSS, Vanilla JavaScript, and React.</li>
              <li className="item">Worked with my teammates to create user-friendly and accessible interfaces.</li>
              <li className="item">Integrated interfaces with back-end systems using RESTful APIs.</li>
              <li className="item">Implemented responsive design and cross-browser compatibility.</li>
              <li className="item">Tested and debugged interfaces using automated and manual testing.</li>
              <li className="item">Developed and maintained server-side logic and databases for web applications using Ruby and RubyonRails</li>
              <li className="item">Collaborated with the front-end team to design and implement efficient and scalable APIs that interact with the client-side application.</li>
              <li className="item">Integrated backend systems with third-party services and APIs to enhance application functionality.</li>
              <li className="item">Ensured the security and integrity of data by implementing authentication, authorization, and data validation mechanisms.</li>
              <li className="item">Optimized database queries and server performance to improve the overall application responsiveness.</li>
            </ul>
          </div>
          <div className="experieceDiv" data-aos="zoom-in-left">
            <p className="duration" id="more">Dec 2022 - Dec 2023</p>
            <p className="frstRole"> Mentor For Junior Front-end Developers </p>
            <p className="entity more">Microverse</p>
            <ul className="job description">
              <li className="item">Mentored junior developers on a variety of topics, including HTML, CSS, JavaScript, and React,</li>
              <li className="item">Provided guidance and support to help junior developers learn new skills and improve their coding skills.</li>
              <li className="item">Encouraged junior developers to ask questions and take risks.</li>
              <li className="item">Helped junior developers build their portfolios and prepare for job interviews.</li>
            </ul>
          </div>
        </div>
        <div className="detailed-education">
          <p className="moreEducation" data-aos="zoom-in">Education</p>
          <div className="Div" data-aos="zoom-in-left">
            <p className="duration" id="more">2018 - 2022</p>
            <p className="frstRole">Bachelor Dgree in Business Administration</p>
            <p className="entity more">Tanta University</p>
            <ul className="job description">
              <li className="item">
                My studies in business administration have given me a strong understanding of
                the business side of web development. I have learned about the different types of businesses
                that use web applications, the different roles involved in web development, and the business
                goals that web applications are designed to achieve.
              </li>
              <li className="item">
                This knowledge has helped me to understand the needs of my clients and to
                design web applications that meet those needs. I have also been able to use my business
                knowledge to help businesses improve their marketing and sales strategies.
              </li>
              <li className="item">
                In addition to my business knowledge, I have also learned the technical skills necessary to
                be a successful Full Stack developer. I am proficient in HTML, CSS, and JavaScript, React, Ruby, RubyonRails.
              </li>
              <li className="item">
                I believe that my combination of business knowledge and technical skills makes me a valuable asset
                to any full stack team. I am confident that I can use my skills to help businesses achieve
                their goals and to create user-friendly and engaging web applications.
              </li>
            </ul>
          </div>
          <div className="Div" data-aos="zoom-in-left">
            <p className="duration" id="more">2022 - 2023</p>
            <p className="frstRole">Full Stack Development</p>
            <p className="entity more">Microverse</p>
            <ul className="job description">
              <li className="item">
                I recently completed a full stack boot camp, where
                I learned the skills necessary to become a full-stack web developer. I learned the basics
                of HTML, CSS, and JavaScript, as well as more advanced topics such as React, Node.js, Ruby, Postgres and RubyonRails
                . I also learned about the different aspects of web development, such as user
                experience design, front-end development, back-end development, and testing.
              </li>
              <li className="item">
                I am confident that my skills and knowledge from the boot camp will allow me to be successful
                as a full-stack web developer. I am a hard worker and I am eager to learn new things. I am also
                a team player and I am confident in my ability to work effectively with others.
              </li>
              <li className="item">
                I am excited to start my career as a full-stack web developer. I am confident that I can use
                my skills and knowledge to create user-friendly and engaging web applications.
              </li>
            </ul>
          </div>
        </div>
        <div className="skillsDiv">
          <p className="skills" data-aos="zoom-in">Skills</p>
          <div className="skillList">
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">100%</p>
              HTML
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">100%</p>
              CSS
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">90%</p>
              JavaScript
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">90%</p>
              React
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">85%</p>
              Redux
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">80%</p>
              Git
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">80%</p>
              Unit Testing
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">82%</p>
              postgreSql
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">80%</p>
              Ruby
            </p>
            <p className="skill" data-aos="zoom-in">
              <p className="percentage">85%</p>
              RubyonRails
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoreAboutMe;
