import React from 'react'
import Header from '../../component/Header'
import { Footer } from '../../component/Footer'
import Hero from './Hero'
import Build from './Build'
import Testimony from './Testimony'
import Reasons from '../Reasons/Reasons'
import NotSure from '../Homepage/NotSure'
import WhatYouWillLearn from './whatYouWillLearn'
import Pricing from './Pricing'
import Become from './Become'

const Frontendpage = () => {
  return (
    <div className='mt-0'>
        <div className='bg-white pt-[22px] '>
          <div className=' mb-[14px]'>
        <Header color={'purple'}/>
        </div>
        <Hero />
        <Build />
        <div className='px-[10px] md:px-0'>
        <Testimony />
        </div>
        <Reasons />
        <WhatYouWillLearn />
        <Pricing />
        <NotSure />
        
        <Become />
        <div>
        </div>
        <Footer />
        </div>
    </div>
  )
}

export default Frontendpage