import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineRadar } from 'react-icons/md';
import Footer from './Home-components/Footer';
import star from '../assets/star-2.png'

const Project = ({
  mainFocus, title, img, top, topLumina, projectName, stack, intro, description, image1, image2, image3, image4, repo, link, next, techs, 
}) => {
  const width = window.innerWidth <= 768;

  return (
    <div className="projectDiv">
      <p className="main-focus">{mainFocus}</p>
      <p className="title">
        <img src={star} alt="star" />
        <span style={{ textAlign: 'center' }}>
          {' '}
          {title}
          {' '}
        </span>
        {' '}
        <img src={star} alt="star" />
      </p>
      <img src={img} alt="Grow scrren shot" className="projectImage" />
      <div className="projectDescription">
        <div className="projectMetaData">
          <div className="line" style={{ left: width ? 333 : 400 }}><span id="star-togather" style={{ top: '24px', left: width ? '-19.8px' : '-19.8px' }}>&#10022;</span></div>
          <div className="information">
            <p className="question">Year</p>
            <p className="answer">2023</p>
          </div>
          <div className="information">
            <p className="question">Client</p>
            <p className="answer">Ahmed Salah</p>
          </div>
          <div className="information">
            <p className="question">Stack</p>
            <p className="answer">{stack}</p>
          </div>
          <div className="information">
            <p className="question">Name</p>
            <p className="answer">{projectName}</p>
          </div>
        </div>
        <div className="descriptionDiv">
          <h3
            className="description"
            style={{
              position: 'relative', top, left: '30px', fontSize: '25px',
            }}
          >
            Description
          </h3>
          <p className="descriptionPara">
            <strong style={{ fontSize: '15px', color: '#bcbcbc' }}>{intro}</strong>
            <p style={{ position: 'relative', top: topLumina }}>{description}</p>
          </p>
        </div>
      </div>
      <div className="stackList">
        <p className='built'>Built With : </p>
        <div className='techs'>
        {techs.map((item, index) => (
          <p className='tech' key={index}>{item}</p>
        ))}
         
        </div>  
      </div>
      <img src={image1} alt="screen shot 1" className="screenshot" />
      <img src={image2} alt="screen shot 2" className="screenshot" />
      <img src={image3} alt="screen shot 3" className="screenshot" />
      <img src={image4} alt="screen shot 4" className="screenshot" />
      <a href={repo} target="_blank" className="projectLink">
        Github
        <FaGithub style={{ position: 'relative', top: '5px', fontSize: '25px' }} />
      </a>
      <a href={link} target="_blank" className="projectLink">
        Live
        <MdOutlineRadar style={{
          position: 'relative', top: '5px', fontSize: '25px', marginLeft: '5px',
        }}
        />
      </a>
      <Link to={`/works/${next}`}><div className="nextButton">Next Project</div></Link>
      <Footer />
    </div>
  );
};

export default Project;
