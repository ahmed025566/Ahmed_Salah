import React from 'react';
import Project from './Project';
import image1 from '../assets/grow/Earthestates.png';
import image2 from '../assets/grow/Earthestates2.png';
import image3 from '../assets/grow/Earthestates3.png';
import image4 from '../assets/grow/Earthestates4.png';
import image5 from '../assets/grow/Earthestates5.png';

const EarthEstates = () => {
  const width = window.innerWidth <= 768;

  return(
    <>
    <Project
      projectName="EarthEstaes"
      stack="Full Stack"
      title="Discover Your Perfect Space with EarthEstates  Where Dreams Meet Reality!"
      img={image1}
      description="
       EarthEstates is a personal project that leverages cutting-edge technologies to provide
       a modern and efficient real estate platform. Built with a user-centric approach,
       the website offers a seamless browsing experience, thanks to its intuitive user
       interface. The platform is developed using industry-standard technologies such as HTML,
       CSS, and JavaScript for the frontend, ensuring compatibility with a wide range of
       devices and browsers. The backend is powered by Ruby on Rails, a robust and scalable
       framework that enables secure user authentication, listing management, and seamless
       database integration. EarthEstates also utilizes cloud hosting services to ensure high
       availability and performance, providing users with a reliable and responsive experience.
       With its blend of innovative features and solid technical foundation, EarthEstates is poised
       to redefine the real estate search experience."
      image1={image2}
      image2={image3}
      image3={image4}
      image4={image5}
      next="Lumina"
      repo="https://github.com/ahmed025566/EarthEstates"
      link="https://earthestates.onrender.com"
      top={width ? '85px' : '30px'}
    />
  </>
  )
};
 


export default EarthEstates;
