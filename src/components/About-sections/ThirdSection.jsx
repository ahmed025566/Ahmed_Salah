import React from 'react'
import { Profils} from '../Home-components/SecondSection'
import { Collaboration } from '../Home-components/ThirdSection'
import { MoreAbout } from '../Home-components/firstSection'

const ThirdSection = () => {
  return (
    <section className='about-third-section'>
      <Profils />
      <Collaboration position="relative" />
      <MoreAbout id="more-about"/>
    </section>
  )
}

export default ThirdSection
