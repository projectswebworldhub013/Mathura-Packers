import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import Testimonials from '../Components/Testimonials'
import OwnerInfo from '../Components/OwnerInfo'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <OwnerInfo/>
    </div>
  )
}

export default Home
