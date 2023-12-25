import React from 'react'
import { BsCodeSlash } from 'react-icons/bs'
import { IoLogoDesignernews } from 'react-icons/io'
import { IoMdAnalytics } from 'react-icons/io'
import { LuStars } from 'react-icons/lu'

const Services = () => {
  return (
    <div id="services">
      <div className='services_icons'>
        <div className='services_icons_inner'>
          <div>
            <BsCodeSlash id='services_icon' />
            <p>Development</p>
          </div>
          <div>
            <IoLogoDesignernews id='services_icon' />
            <p>Web Designing</p>
          </div>
          <div>
            <IoMdAnalytics id='services_icon' />
            <p>Data Analytics</p>
          </div>
        </div>
      </div>
      <p className='my_offerings_header'><LuStars className='star' /> My Offerings <LuStars className='star' /></p>

      <div id="my_offerings">
        <div className='offerDiv'>
          <p className='skill'>Development</p>
        </div>
        <div className='offerDiv'>
          <p className='skill'>Web Designing</p>
        </div>
        <div className='offerDiv'>
          <p className='skill'>Data Analytics</p>
        </div>
      </div>
    </div>
  )
}

export default Services