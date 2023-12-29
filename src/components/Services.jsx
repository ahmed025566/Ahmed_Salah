import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { IoLogoDesignernews, IoMdAnalytics } from 'react-icons/io';

import { LuStars } from 'react-icons/lu';
import { Profils } from './Home-components/SecondSection';
import { Collaboration } from './Home-components/ThirdSection';
import { MoreAbout } from './Home-components/firstSection';
import Footer from './Home-components/Footer';

const Services = () => {
  const width = window.innerWidth <= 768;

  return (
    <div id="services">
      <div className="services_icons" data-aos="zoom-in-left">
        <div className="services_icons_inner">
          <div>
            <BsCodeSlash id="services_icon" />
            <p>Development</p>
          </div>
          <div>
            <IoLogoDesignernews id="services_icon" />
            <p>Web Designing</p>
          </div>
          <div>
            <IoMdAnalytics id="services_icon" />
            <p>Data Analytics</p>
          </div>
        </div>
      </div>
      <p className="my_offerings_header" data-aos="zoom-in-right">
        <LuStars className="star" />
        {' '}
        My Offerings
        {' '}
        <LuStars className="star" />
      </p>

      <div id="my_offerings" data-aos="zoom-out">
        <div className="offerDiv" data-aos="zoom-in-left">
          <p className="skillheader">Development</p>
          <p className="skillDescription">
            As a web developer, I specialize in creating tailored web applications using the
            latest technologies. I design responsive websites that offer seamless experiences
            across devices, covering areas like e-commerce, content management, and custom
            solutions. By working closely with clients, I ensure the end product exceeds expectations.
            My focus on clean code, scalability, and security guarantees visually appealing,
            reliable, and adaptable websites.
          </p>
        </div>
        <div className="offerDiv" data-aos="zoom-in-right">
          <p className="skillheader">Web Designing</p>
          <p className="skillDescription">
            As a web designer, I specialize in creating visually appealing and user-friendly websites.
            My designs engage audiences with creativity and technical expertise, ensuring intuitive navigation
            and accessibility. I focus on every detail, from layout to imagery, to deliver websites that look
            great and work well on all devices. By understanding my clients' needs and brand identity, I create
            unique designs that leave a lasting impression.
          </p>
        </div>
        <div className="offerDiv" data-aos="zoom-in-left">
          <p className="skillheader">Data Analytics</p>
          <p className="skillDescription">
            In data analytics, I excel at extracting valuable insights from complex data using advanced tools.
            I uncover patterns and trends to inform decisions in areas like customer behavior and market trends.
            I go beyond analysis, translating findings into actionable insights that align with strategic goals.
            With my analytical skills and business understanding, I help organizations gain a competitive edge
            through data leverage.
          </p>
        </div>
      </div>
      <Profils id="servicesProfiles" getin_services={width ? '364px' : '230px'} />
      <Collaboration position="absolute" top="-59px" left={width ? '37px' : ''} topServices={width ? '1875px' : '750px'} leftServices={width ? '' : '360px'} width={width ? '100%' : ''} />
      <MoreAbout top={width ? '50px' : '750px'} width={width ? '100%' : ''} left={width ? '0' : '950px'} GetInLeft={width ? '364px' : ''} />
      <Footer top={width ? '120px' : ''} marginTop={width ? '210px' : '-850px'} />
    </div>
  );
};

export default Services;
