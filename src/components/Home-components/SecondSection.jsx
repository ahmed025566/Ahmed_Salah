import React from 'react'
import blogLogo from '../../assets/blog.png'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { BsCodeSlash } from 'react-icons/bs'
import { IoLogoDesignernews } from 'react-icons/io'
import { IoMdAnalytics } from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

const SecondSection = () => {
    return (
        <section id="second-section">
            <NavLink id="BlogLink" to="blog">
                <div id="blog" data-aos="zoom-in">
                    <img src={blogLogo} alt="blog-logo" id="blogLogo" />
                    <p id="BLOG">BLOG</p>
                    <p id="AFonts">AFonts</p>
                    <BsArrowRightCircleFill className='get-in' id="blog-link" />
                </div>
            </NavLink>
            <NavLink  to="services">
                <div className='services' data-aos="zoom-in">
                    <div className='icons'>
                        <BsCodeSlash className='code' />
                        <IoLogoDesignernews className='designing' />
                        <IoMdAnalytics className='analytics' />
                    </div>
                    <p className='species'>Specializations</p>
                    <p className='offering'>Servies Offering</p>
                    <BsArrowRightCircleFill className='get-in' id="offers" />
                </div>
            </NavLink>
            <Profils />
        </section>
    )
}

export const Profils = () => {
    return (
        <div className='profiles' data-aos="zoom-in">
            <div className="innerDiv">
                <a href="https://www.linkedin.com/in/ahmed-salah-elkholy/" target='_blank' rel="noreferrer" className='circle'>
                    <FaLinkedin className='linked-in' />
                </a>
                <a href='https://github.com/ahmed025566' target="_blank" rel="noreferrer" className='circle'>
                    <BsGithub className='github' />
                </a>
            </div>
            <p className='stay-with-me'>Stay With me</p>
            <p id="para-profiles">Profiles</p>
            <NavLink to="/contact"><BsArrowRightCircleFill className='get-in' id="get-to-profiles" /></NavLink>
        </div>
    )
}
export default SecondSection
