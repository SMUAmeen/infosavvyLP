import React from 'react'
import AOSWrapper from '../Components/AOSWrapper'
import Hero from '../Components/Hero'
import Compass from '../Components/Compass'
import Stats from '../Components/Stats'
import Features from '../Components/Features'
import FAQ from '../Components/Footer'

const Homepage = () => {
  return (
    /* <AOSWrapper> */
      <div className='bg-white dark:bg-[#171717] min-h-screen'>
        <Hero />
        <Stats />
        <Features />
        <Compass />
        <FAQ />
      </div>
    /* </AOSWrapper> */
  )
}

export default Homepage
