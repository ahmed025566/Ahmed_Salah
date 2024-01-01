import React from 'react';
import star from '../assets/star-2.png'
import { Link } from 'react-router-dom';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Footer from './Home-components/Footer';
import GrowShot from '../assets/grow/grow3.png';
import EarthEstates from '../assets/grow/Earthestates.png';
import Lumina from '../assets/grow/Lumina.png';

const Works = () => {
  const width = window.innerWidth <= 768;

  return (
    <div className="works">
      <p className="worksHeader" data-aos="fade-up-left">
      <img src={star} alt="star" />

        Highlighted Projects
        {' '}
        <img src={star} alt="star" />
      </p>
      <WorkCard img={GrowShot} stack="Front-End" projectName="Grow" id="firstCard" />
      <WorkCard img={EarthEstates} stack="Full Stack" projectName="EarthEstates" top={width ? '' : '-390px'} left={width ? '20px' : ''} id="secondCard" />
      <WorkCard img={Lumina} stack="Full Stack" projectName="Lumina" left={width ? '20px' : ''} top={width ? '' : '-730px'} id="thirdCard" />
      <Footer top={width ? '' : '-700px'} left={width ? '' : '200px'} />
    </div>
  );
};

export default Works;

const WorkCard = ({
  img, stack, projectName, left, id, top,
}) => {
  const width2 = (window.innerWidth <= 768);

  return (
    <Link to={projectName}>
      <div className="workCard" style={{ position: 'relative', top }} data-aos="zoom-in" id={id}>
        <img src={img} alt="grow front" data-aos="slide-down" className="growshot" />
        <p className="stack">{stack}</p>
        <p className="projectName" style={{ left }}>{projectName}</p>
        <BsArrowRightCircleFill className="get-in"  style={{ position: width2 ? "absolute" : "", top: width2 ?  '250px' : "-80px", left: width2 ? '90%' : '330px' }} />
      </div>
    </Link>
  );
};
