import React from 'react'
import herobg from "./../../assets/aboutpage/herobg.png"
import useQuery from '../../assets/hooks/useQuery'
const Hero = () => {
    const {width} = useQuery()

  return (
    <div className='bg-center bg-cover bg-no-repeat bg-frontendherobgmobile md:bg-frontendHero sm:h-[416px] w-full relative text-white pb-[40px]'>
    <div className='bg-black w-full absolute h-full opacity-40'>
    </div>
    <div className='container px-[20px] lg:px-[0]  flex flex-col gap-[18px] mx-auto z-40 relative justify-center h-full'>
    <p className='text-white text-[20px] font-DmSansBold mt-[34px] md:mt-0 leading-[49px]'>
    Professional Certification
    </p>
    <h1 className='font-bold text-[40px] leading-[49px] font-DmSansBold '>
    Tailored Learning Experience
    </h1>
    <p className=' text-[20px] leading-[49px] font-DmSansRegular tracking-[0.4px]'>
        Choose from our diverse selection of tech courses designed to match your interests and {width > 564?<br/>:null}
        career aspirations. Whether you're seeking to boost your professional skills, explore new horizons,
        {width > 564?<br/>:null}
        or embark on a tech-focused career, McTechy offers a tailored learning
        {width > 564?<br/>:null}experience to suit your needs.
    </p>
    </div>
</div>
  )
}

export default Hero