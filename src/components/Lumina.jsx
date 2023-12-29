import React from 'react';
import Project from './Project';
import image1 from '../assets/grow/Lumina.png';
import image2 from '../assets/grow/Lumina2.png';
import image3 from '../assets/grow/Lumina3.png';
import image4 from '../assets/grow/Lumina4.png';
import image5 from '../assets/grow/Lumina5.png';

const Lumina = () => {
  const width = window.innerWidth <= 768;


  return(
    <>
    <Project
      projectName="Lumina"
      stack="Full Stack"
      title="Capture Life's Moments with Lumina – Where Inspiration Meets Expression!"
      img={image1}
      top={width ? '85px' : '30px'}
      topLumina="-20px"
      description="Lumina stands as an immersive Instagram clone that skillfully captures the essence
        of the popular social media platform, offering users a dynamic and engaging space to express
        themselves, connect with others, and explore a diverse range of content. With its sleek and intuitive
        interface coupled with a robust set of features, Lumina delivers a seamless and enjoyable user
        experience, reminiscent of its inspiration. Users can effortlessly share their posts, discover new
        and inspiring content, and engage with a vibrant community of creators and influencers. Whether you're
        a seasoned photographer sharing your latest captures, a passionate storyteller documenting life's
        moments, or someone seeking to connect with like-minded individuals, Lumina provides the perfect stage
        to showcase your creativity and build meaningful connections. Join Lumina today and embark on a captivating
        visual journey where every moment is an opportunity to shine."
      next=""
      image1={image2}
      image2={image3}
      image3={image4}
      image4={image5}
      repo="https://github.com/ahmed025566/Lumina"
      link="https://lumina-woo4.onrender.com/"
    />
  </>
  )
  
};

export default Lumina;
