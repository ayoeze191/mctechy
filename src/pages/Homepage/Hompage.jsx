import React from 'react'
import Header from '../../component/Header'
import Hero from './Hero'
import CoursesAvailable from './CoursesAvailable'
import Connect from './Connect'
import Benefits from './Benefits'
import NotSure from './NotSure'
const Hompage = () => {
  return (
    <div className=' mt-0 '>
        <div className='bg-purple pt-[22px] md:py-[17px] '>
          <div className='md:mb-[98px]'>
        <Header />
        </div>
        <Hero />
        </div>
        <CoursesAvailable />
        <Connect />
        <Benefits />
        <NotSure />
    </div>
  )
}

export default Hompage