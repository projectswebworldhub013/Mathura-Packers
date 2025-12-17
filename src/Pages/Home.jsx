import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import Testimonials from '../Components/Testimonials'
import OwnerInfo from '../Components/OwnerInfo'
import MovingServices from '../Components/MovingServices'
import RateChart from '../Components/RateChart'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <WhyChooseUs/>
      <MovingServices/>
      <RateChart/>
      <Testimonials/>
      <OwnerInfo/>
    </div>
  )
}

export default Home
