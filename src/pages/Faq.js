import React from 'react'
import { useLocation } from 'react-router-dom'
import FaqSection from '../components/faqComponent/FaqSection'
import ContactUs from '../components/faqComponent/ContactUs'
import CounterSection from '../components/faqComponent/CounterSection'
import Breadcrumbs from '../components/Breadcrumbs'

const Faq = () => {
  console.log("Sabil",useLocation())
  return (
    <div>
      <Breadcrumbs title={"FAQ"}/>
      <FaqSection />
      <ContactUs />
      <CounterSection />
    </div>
  )
}

export default Faq
