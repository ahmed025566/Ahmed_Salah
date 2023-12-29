import React, { useRef, useState } from 'react';
import { CgMail } from 'react-icons/cg';
import { IoIosCall } from 'react-icons/io';
import { FaLocationDot, FaLinkedin } from 'react-icons/fa6';

import { BsGithub } from 'react-icons/bs';
import axios from 'axios';
import Footer from './Home-components/Footer';

const Contact = () => {
  const Name = useRef();
  const Email = useRef();
  const Subject = useRef();
  const Message = useRef();

  const [error, setError] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = Name.current.value;
    const emailValue = Email.current.value;
    const subjectValue = Subject.current.value;
    const messageValue = Message.current.value;

    if (Name.current.value !== '' && emailValue !== '' && subjectValue !== '' && messageValue !== '') {
      axios.post('https://formspree.io/f/xbjelnrl', {
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
      }).then((res) => {
        if (res.data.ok) { setSuccessful(true); }
        setError(false);
        Name.current.value = ''; Subject.current.value = ''; Email.current.value = ''; Message.current.value = '';
      }).catch((err) => {
        setError(true);
        setSuccessful(false);
        console.log(err.message);
      });
    }
  };

  return (
    <div className="contact-route">
      <div className="conatcWrapper">
        <div className="contactInfo">
          <p className="contactInfoHeader">Contact Info</p>
          <div className="contactMethod">
            <div className="icon"><CgMail className="contactIcon" /></div>
            <div id="ContactInfoDiv">
              <p className="contactPhrase">Mail Us</p>
              <p id="info">ahmedsalah025566@gmail.com</p>
            </div>
          </div>
          <div className="contactMethod">
            <div className="icon"><IoIosCall className="contactIcon" /></div>
            <div id="ContactInfoDiv">
              <p className="contactPhrase">Contact Us</p>
              <p id="info">+201095121880</p>
            </div>
          </div>
          <div className="contactMethod">
            <div className="icon"><FaLocationDot className="contactIcon" /></div>
            <div id="ContactInfoDiv">
              <p className="contactPhrase">Location</p>
              <p id="info">
                Tanta, Gharbya
                <br />
                {' '}
                Egypt
              </p>
            </div>
          </div>
        </div>
        <div className="socialInfo">
          <p className="socialInfoHeader">Social Info</p>
          <a href="https://www.linkedin.com/in/ahmed-salah-elkholy/" target="_blank" rel="noreferrer" className="smallCircle">
            <FaLinkedin className="linked-in move" />
          </a>
          <a href="https://github.com/ahmed025566" target="_blank" rel="noreferrer" className="smallCircle">
            <BsGithub className="github move" />
          </a>
        </div>
        <form className="conatctForm" onSubmit={handleSubmit}>
          <h2 className="formHeader">
            Let's work
            <span className="together">together</span>
          </h2>
          <input type="text" ref={Name} name="user_name" placeholder="Name *" className="formItem" required />
          <input type="email" ref={Email} name="user_mail" placeholder="Email *" className="formItem" required />
          <input type="text" ref={Subject} name="user_message" placeholder="Your Subject *" className="formItem" required />
          <textarea placeholder="Your Message" ref={Message} className="textArea formItem" required rows="8" maxLength="1000" />
          <button type="submit" className="formItem submit">Send Message</button>
          {successful ? <p className="succesfulMessage">Thank you for your message. It has been sent</p> : ''}
          {error ? <p className="errorMessage">Please make sure you have entered a vaild email</p> : ''}
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
