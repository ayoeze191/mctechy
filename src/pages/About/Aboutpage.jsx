import React from 'react'
import Header from '../../component/Header'
import Hero from './Hero'
import EMpowering from './EMpowering'
import WhyUs from './WhyUs'
import NotSure from '../Homepage/NotSure'
import { Footer } from '../../component/Footer'

const About = () => {
  return (
    <div className='mt-0'>
        <div className='bg-white pt-[22px] '>
          <div className=' mb-[14px]'>
        <Header color={'purple'}/>
        </div>
        <Hero />
        <div>
          <EMpowering />
          <WhyUs />
          <NotSure />
        </div>
        <Footer />
        </div>
        
    </div>
  )
}

export default About