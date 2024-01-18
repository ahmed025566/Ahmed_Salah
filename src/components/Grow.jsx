import React from 'react';
import Project from './Project';
import GrowImage from '../assets/grow/grow2.png';
import screenshot1 from '../assets/grow/grow.png';
import screenshot2 from '../assets/grow/grow3.png';
import screenshot3 from '../assets/grow/grow4.png';
import screenshot4 from '../assets/grow/grow5.png';

const Grow = () => {
  const width = window.innerWidth <= 768;

  return (
    <>
      <Project
        mainFocus="CRM - Business Dashboard"
        title="Grow is a tool to manage small business data"
        img={screenshot1}
        projectName="Grow"
        techs = {["React", "Redux", "JavaScript", "JQuery", "HTML", "CSS"]}
        stack="Front End"
        intro="Empowering Small Businesses with Data Management and Visualization"
        image1={GrowImage}
        image2={screenshot2}
        image3={screenshot3}
        image4={screenshot4}
        repo="https://github.com/ahmed025566/Grow"
        link="https://grow-lqwz.onrender.com/"
        next="EarthEstates"
        top={width ? '85px' : '30px'}
        description="Grow is a comprehensive web platform designed for small businesses, offering powerful tools for
        data management and insights. It enables businesses to organize and track essential information
        such as employee details, customer profiles, orders, and inventory. With features like centralized
        data management, employee and customer relationship management, and data visualization using customizable
        dashboards and analytics tools, Grow empowers businesses to make informed decisions based on real-time
        data. The platform is scalable, accommodating evolving needs, and accessible from anywhere via the cloud.
        Grow is positioned as a strategic ally for small businesses seeking efficiency, insights, and growth in
        a competitive market."
      />
    </>
  );
};

export default Grow;
