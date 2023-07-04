import React from 'react'
import HompagesHeader from '../../component/ui/HompagesHeader'
import empowerbg from "./../../assets/aboutpage/empowerbg.png"


const EMpowering = () => {
  return (
    <div>
        <div className="container mx-auto px-[20px] md:px-0 flex gap-[52px] mt-[29px] md:mt-[68px] md:h-[471px] ">
            <div className='md:w-[50%] '>
        <HompagesHeader text={'Empowering Digital Transformation in the Modern Era'} left={true} after={'purple'}/>
        <p className='font-[400] text-[18px] leading-[50px] font-DmSansRegular mt-[29px] md:mt-[18px] '>
        McTechy is a leading provider of digital skills training, dedicated to equipping individuals and organizations with the tools they need to thrive in the rapidly evolving digital landscape.
McTechy has collaborated with top industry professionals and thought leaders to develop dynamic and practical digital education programs. Our comprehensive curriculum is designed to empower individuals with the skills and knowledge necessary to excel in today's technology-driven world.
        </p>
        </div>
        <div className='h-full bg-red-200 md:w-[50%] hidden md:block'>
            <img src={empowerbg} alt="" className='h-full w-full' />
        </div>
        </div>
    </div>
  )
}

export default EMpowering