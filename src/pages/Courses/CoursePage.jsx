import React from 'react'
import Header from '../../component/Header'
import { Footer } from '../../component/Footer'
import Hero from './Hero'
import Courses from './Courses'



export const Course = () => {
  return (
    <div className='mt-0'>
        <div className='bg-white pt-[22px] '>
          <div className=' mb-[14px]'>
        <Header color={'purple'}/>
        </div>
        <Hero />
        <Courses />
        <div>
        </div>
        <Footer />
        </div>
        
    </div>
  )
}
