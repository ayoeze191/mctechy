import React from 'react'
import Header from '../../component/Header'
import Hero from './Hero'
import CoursesAvailable from './CoursesAvailable'
import Connect from './Connect'
import Benefits from './Benefits'
import NotSure from './NotSure'
import WhatGraduateHasTosay from '../../assets/homepage/WhatGraduateHasTosay/WhatGraduateHasTosay'
import { Footer } from '../../component/Footer'
const Hompage = () => {
  return (
    <div className=' mt-0 '>
        <div className='bg-purple pt-[22px] md:py-[17px] '>
          <div className='md:mb-[98px]'>
        <Header color={'white'} />
        </div>
        <Hero />
        </div>
        <CoursesAvailable />
        <Connect />
        <Benefits />
        <NotSure />
        <WhatGraduateHasTosay />
        <Footer />
    </div>
  )
}

export default Hompage