import React from 'react'
import herobg from "./../../assets/aboutpage/herobg.png"
import useQuery from '../../assets/hooks/useQuery'


const Hero = () => {
    const {width} = useQuery()

  return (
    <div className='bg-center bg-cover bg-no-repeat bg-frontendherobgmobile md:bg-frontendHero h-[90vh] w-full relative text-white '>
        <div className='bg-black w-full absolute h-full opacity-40'>
        </div>

        <div className='container px-[20px] lg:px-[0]  flex flex-col gap-[18px] mx-auto z-40 relative h-full  mb-[130px]'>
            <p className='text-[20px] leading-[49px] font-DmSansBold tracking-[0.4px] mt-20'>Professional Certification</p>
        <h1 className='font-bold text-[40px] leading-[49px] font-DmSansBold '>
            Frontend Development
        </h1>
        <p className=' text-[20px] leading-[49px] font-DmSansBold tracking-[0.4px]'>
            Experience the Transformational Journey of {width > 564?<br/>:null} McTechy Bootcamp
            Learn to create professional, responsive websites using HTML, 
            {width > 564?<br/>:null}
            CSS, and more. Develop a real-world Web Developer portfolio {width > 564?<br/>:null}
            project.
        </p>
        </div>
    </div>
  )
}

export default Hero