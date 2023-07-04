import React from 'react'
import useQuery from '../../assets/hooks/useQuery'

const Hero = () => {
    const {width} = useQuery()
  return (
    <div className='bg-center bg-cover bg-no-repeat md:bg-aboutHero bg-aboutHeroMobile h-[90vh] w-full relative text-white '>
        <div className='bg-black w-full absolute h-full opacity-40'>
        </div>

        <div className='container px-[20px] lg:px-[0]  flex flex-col justify-center gap-[18px] mx-auto z-40 relative h-full  mb-[130px]'>
           
        <h1 className='font-bold text-[40px] leading-[49px] font-DmSansBold'>
        Upcoming Events in Ilorin
        </h1>
        <p className=' text-[20px] leading-[49px] font-DmSansBold tracking-[0.4px]'>
        Built by Industry Experts in your city
        </p>
        </div>
    </div>
  )
}

export default Hero