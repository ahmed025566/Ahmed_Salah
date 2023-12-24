import React from 'react'
import { CgMail } from 'react-icons/cg'
import { IoIosCall } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { BsGithub } from 'react-icons/bs'
import Footer from './Home-components/Footer'

export default class Contact extends React.Component {
    render() {
        return (
            <div className='contact-route'>
                <div className='conatcWrapper'>
                    <div className='contactInfo'>
                        <p className='contactInfoHeader'>Contact Info</p>
                        <div className='contactMethod'>
                            <div className='icon'><CgMail className='contactIcon' /></div>
                            <div id="ContactInfoDiv">
                                <p className='contactPhrase'>Mail Us</p>
                                <p id='info'>ahmedsalah025566@gmail.com</p>
                            </div>
                        </div>
                        <div className='contactMethod'>
                            <div className='icon'><IoIosCall className='contactIcon' /></div>
                            <div id="ContactInfoDiv">
                                <p className='contactPhrase'>Contact Us</p>
                                <p id='info'>+201095121880</p>
                            </div>
                        </div>
                        <div className='contactMethod'>
                            <div className='icon'><FaLocationDot className='contactIcon' /></div>
                            <div id="ContactInfoDiv">
                                <p className='contactPhrase'>Location</p>
                                <p id='info'>Tanta, Gharbya <br /> Egypt</p>
                            </div>
                        </div>
                    </div>
                    <div className='socialInfo'>
                        <p className='socialInfoHeader'>Social Info</p>
                        <a href="https://www.linkedin.com/in/ahmed-salah-elkholy/" target='_blank' rel="noreferrer" className='smallCircle'>
                            <FaLinkedin className='linked-in move' />
                        </a>
                        <a href='https://github.com/ahmed025566' target="_blank" rel="noreferrer" className='smallCircle'>
                            <BsGithub className='github move' />
                        </a>
                    </div>
                    <form className='conatctForm' action="https://formspree.io/f/xbjelnrl" method="post">
                        <h2 className='formHeader'>Let's work <span Name='together'>together</span></h2>
                        <input type='text' name="user_name" placeholder='Name *' className='formItem' required></input>
                        <input type="email" name="user_mail" placeholder='Email *' className='formItem' required></input>
                        <input type='text' name="user_message" placeholder='Your Subject *' className='formItem' required></input>
                        <textarea placeholder='Your Message' className='textArea formItem' required rows="8" maxLength="1000"></textarea>
                        <button type='submit' className='formItem submit'>Send Message</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
