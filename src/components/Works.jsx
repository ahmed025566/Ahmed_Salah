import React from 'react'
import Footer from './Home-components/Footer'
import { LuStars } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import GrowShot from '../assets/grow/grow3.png'
import EarthEstates from '../assets/grow/Earthestates.png'
import Lumina from '../assets/grow/Lumina.png'
import { BsArrowRightCircleFill } from 'react-icons/bs'


const Works = () => {
  const width = window.innerWidth <= 768

  return (
    <div className='works'>
      <p className='worksHeader' data-aos="fade-up-left"><LuStars className='star' />Highlighted Projects <LuStars className='star' /></p>
      <WorkCard img={GrowShot} stack="Front-End" projectName="Grow"  id="firstCard" />
      <WorkCard img={EarthEstates} stack="Full Stack" projectName="EarthEstates" top={width ? '' : '-390px'} left={width ? "-110px" : "" } id="secondCard" />
      <WorkCard img={Lumina} stack="Full Stack" projectName="Lumina" left={width ? "-143px" : "" } top={width ? '' : '-730px'} id="thirdCard" />
      <Footer top={width ? '' : "-700px"} left={width ? '' : '200px'} />  
    </div>
  )
}

export default Works



const WorkCard = ({ img, stack, projectName, left, id, top }) => {
  const width2 = (window.innerWidth <= 768)

  return (
    <Link to={projectName} ><div className='workCard' style={{position: 'relative', top: top}} data-aos="zoom-in" id={id}>
      <img src={img} alt="grow front" data-aos="slide-down" className='growshot' />
      <p className='stack'>{stack}</p>
      <p className='projectName' style={{left: left}}>{projectName}</p>
      <BsArrowRightCircleFill className='get-in' style={{top: -100, left: width2 ? '' : '330px' }}  />
    </div></Link>
  )
}

