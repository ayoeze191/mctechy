import React from 'react'
import herobg from "./../../assets/aboutpage/herobg.png"
import useQuery from '../../assets/hooks/useQuery'
const Hero = () => {
    const {width} = useQuery()

  return (
    <div className='bg-center bg-cover bg-no-repeat bg-aboutHero h-[489px] sm:h-[416px] w-full relative text-white bg-aboutHeroMobile'>
        <div className='bg-black w-full absolute h-full opacity-40'>
        </div>
        <div className='container px-[20px] lg:px-[0]  flex flex-col gap-[18px] mx-auto z-40 relative justify-center h-full'>
        <h1 className='font-bold text-[40px] leading-[49px] font-DmSansBold '>
            Forge Your Path to Success
        </h1>
        <p className=' text-[20px] leading-[49px] font-DmSansBold tracking-[0.4px]'>
            Experience the Transformational Journey of {width > 564?<br/>:null} McTechy Bootcamp
        </p>
        </div>
    </div>
  )
}

export default Hero