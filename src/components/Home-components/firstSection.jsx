import React from 'react'
import myPhoto from '../../assets/myPhoto1.jpg'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom';
import sign from '../../assets/signuture.png'
import sample from '../../assets/e-commerce.png'

const FirstSection = () => {
  return (
    <section className='first-section'>
        <NavLink to="About">
          <div className='about-me' data-aos="zoom-in">
            <img src={myPhoto} alt="Ahmed Salah" className='photo' />
            <div className='info'>
              <p className='role-intro'>A WEB DEVELOPER</p>
              <p className='name'>Ahmed Salah</p>
              <p className='some-info'>I am a Full-stack devloper based in Egypt</p>
              <NavLink to="About"><BsArrowRightCircleFill className='get-in' /></NavLink>
            </div>
          </div>
        </NavLink>
        <div className='ticker' data-aos="flip-down">
          <div class="hwrap"><div class="hmove">
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
            <div className='hitem'><span>&#9899;</span>Latest work and futured</div>
          </div></div>
        </div>
        <MoreAbout />
        <NavLink to="works"><div className='show-them-projects' data-aos="zoom-in">
          <p id='my-works'>My Works</p>
          <img src={sample} alt='sample' id="sample"/>
          <p id="show-case">Show case</p>
          <p id="projects">Projects</p>
          <BsArrowRightCircleFill className='get-in' id='projects-link'/>
        </div></NavLink>
      </section>
  )
}

export const MoreAbout = ({id}) => {
  return (
    <NavLink to="/more-about-me" ><div className="more-about-me" data-aos="zoom-in" id={id}>
          <img src={sign} alt='sign' className='signuture' />
          <p className='moreAboutMe'>More About Me</p>
          <p className='credentials'>Credentials</p>
          <BsArrowRightCircleFill className='get-in' id='get-in' />
        </div></NavLink>
  )
}
export default FirstSection
