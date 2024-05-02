import React from 'react'
import IndexBanner from '../components/indexComponent/IndexBanner'
import IndexAbout from '../components/indexComponent/IndexAbout'
import IndexProperty from '../components/indexComponent/IndexProperty'
import LatestProperties from '../components/indexComponent/LatestProperties'
import Quote from '../components/indexComponent/Quote'
import NewsLetter from '../components/indexComponent/NewsLetter'
import Testimonial from '../components/indexComponent/Testimonial'
import CounterThree from '../components/indexComponent/CounterThree'
import Faq from '../components/indexComponent/Faq'
import Blog from '../components/indexComponent/Blog'

const Index = () => {
  return (
    <div>
      <IndexBanner />
      <IndexAbout />
      <IndexProperty />
      <LatestProperties />
      <Quote />
      <NewsLetter />
      <Testimonial />
      <CounterThree />
      <Faq />
      <Blog />
    </div>
  )
}

export default Index
