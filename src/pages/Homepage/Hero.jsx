// import React from 'react'
import forward from "./../../assets/homepage/hero/forward.png"
// import icon from "./../../assets/homepage/hero/icon.png"
import people from "./../../assets/homepage/hero/1.png"
import herobg from "./../../assets/homepage/hero/herobg.png"
import herobgdesk from "./../../assets/homepage/hero/herobgDesktop.png"
const Hero = () => {
  return (
    <div className=''>
        <div className="container mx-auto px-[20px] md:px-0 mt-[42px] flex flex-col gap-[30.1px]  sm:flex-row sm:min-h-[75vh]">
        <div className='flex gap-[26px] flex-col sm:w-1/2'>
            <h1 className="font-MulishRegular font-bold text-[32px] leading-[50px] text-white sm:hidden">
            Transition into tech in 12 weeks?
            </h1>
            <h1 className="font-MulishRegular font-bold text-[32px] leading-[50px] text-white hidden sm:block">
            Transition from any career into tech in 12 weeks?
            </h1>
            <p className='font-medium text-[20px] leading-[38.5px] text-white font-DmSansRegular opacity-80'>
            Learn the most on demand skills needed by businesses and employers world wide.
            </p>
            <button className='text-white sm:text-purple sm:bg-white w-fit rounded-lg font-[500] text-[14.32px] leading-[21.34px] flex gap-[10.69px] font-DmSansRegular items-center py-[17.04px] px-[16.95px] '>
                Get Started <div className='sm:hidden'><img src={forward} alt="" /></div>
                {/* <div className='hidden sm:block'><img src={icon} alt="" /></div> */}
            </button>
            <div className='flex flex-col gap-[16.75px] sm:flex-row'>
                <div>
            <img src={people} className='w-[120.53px] h-[53.81px]'/>
            </div>
            <div className='flex  items-center'>
                <p className='flex flex-col gap-[2.02px] mr-[11.72px]'>
                    <h1 className='font-DmSansRegular font-bold text-[26.67px] leading-[37.34px] text-gray-6'>500+</h1>
                    <p className='font-normal font-DmSansRegular text-[14.23px] leading-[21.34px] text-white opacity-60'>
                        Graduates
                    </p>
                </p>
                <div className=' h-10 w-[2px] bg-white '>
                </div>
                <p className='flex flex-col gap-[2.02px] ml-[23.12px]'>
                    <h1 className='font-DmSansRegular font-bold text-[26.67px] leading-[37.34px] text-gray-6'>93+</h1>
                    <p className='font-normal font-DmSansRegular text-[14.23px] leading-[21.34px] text-white opacity-60'>
                        Employment rate
                    </p>
                </p>
            </div>
            </div>
        </div>
        <div className='w-full md:max-w-none mx-auto sm:w-1/2  object-center flex-1 h-[373px]'>
            <img src={herobg} alt=""  className='w-full block md:hidden h-full'/>
            <img src={herobgdesk} alt="" className='hidden md:block w-full h-full '/>
        </div>
        </div>
    </div>
  )
}

export default Hero