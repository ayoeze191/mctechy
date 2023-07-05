import React from 'react'
import Header from '../../component/Header'
import { Footer } from '../../component/Footer'
import Hero from './Hero'
import HowToGetStarted from './HowToGetStarted'

const Faqpage = () => {
  return (
    <div className='mt-0'>
    <div className='bg-white pt-[22px] '>
      <div className=' mb-[14px]'>
    <Header color={'purple'}/>
    </div>
    <div>
      <Hero />
      <HowToGetStarted />
    </div>
    <Footer />
    </div>
    
</div>
  )
}

export default Faqpage