import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import AboutUs from '../components/aboutComponent/AboutUs'
import Property from '../components/aboutComponent/Property'
import Team from '../components/aboutComponent/Team'
import CtaSection from '../components/aboutComponent/CtaSection'

const About = () => {
  return (
    <div>
      <Breadcrumbs title={"About Us"}/>
      <AboutUs />
      <Property />
      <Team />
      <CtaSection />
    </div>
  )
}

export default About
