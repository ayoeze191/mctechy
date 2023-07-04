import React from 'react'
import desktopWhyus from "./../../assets/aboutpage/desktopWhyus.png"
import MobileWhyus from "./../../assets/aboutpage/MobileWhyus.png"
import HompagesHeader from '../../component/ui/HompagesHeader'
import benefitbg from "./../../assets/homepage/benefit/benefitbg.png"
import benefitbgmob from "./../../assets/homepage/benefit/benefitbgmob.png"


const WhyUs = () => {
  return (
    <div className=' bg-purple mt-[31px] md:mt-[111px]'>
    <div className='text-white container flex items-center flex-col md:flex-row px-[20px] md:px-0 gap-[23px] md:gap-[68px] py-[25px] mx-auto'>
        <div className='w-full'>
        <img src={benefitbgmob} className='w-full md:hidden block'/>

            <img src={benefitbg} className='w-full hidden md:block'/>
        </div>
        <div>
            <div>
                <div className='hidden md:block'>
        <HompagesHeader text={'Why McTechy'} left={true} after={'white'}/>
        </div>
        <div className='flex gap-[24.9px] flex-col mt-[36px]'>
        <div className='flex flex-col gap-[1.09px]'>
            <h2 className='font-medium tex-[20px] font-DmSansRegular leading-[47px]'>
                Industry-Leading Instructors
            </h2>
        <p className='font-DmSansRegular text-[16px] font-normal leading-[37px] text-white opacity-90'>
        At McTechy, we believe that learning from the best is the key to success. Our instructors are industry professionals with extensive experience and expertise in their respective fields.
        </p>
        </div>

        <div className='flex flex-col gap-[1.09px]'>
        <h2 className='font-medium tex-[20px] font-DmSansRegular leading-[47px]'>
        Cutting-Edge Learning Platform
            </h2>
        <p className='font-DmSansRegular text-[1rem] font-normal leading-[37px] text-white opacity-90'>
        Our custom-built learning platform, powered by advanced technology, offers a data-driven approach to education.
        </p>
        </div>
        <div className='flex flex-col gap-[1.09px]'>
        <h2 className='font-medium tex-[20px] font-DmSansRegular leading-[47px] '>
        Stay Ahead with McTechy
            </h2>
        <p className='font-DmSansRegular text-[1rem] font-normal leading-[37px] text-white opacity-90'>
        McTechy equips you with the skills and knowledge needed to navigate the ever-evolving technology industry.
        </p>
        </div>
        <div className='flex flex-col gap-[1.09px]'>
        <h2 className='font-medium tex-[20px] font-DmSansRegular leading-[47px]'>
            Get widely recognized certificates
            </h2>
        <p className='font-DmSansRegular text-[1rem] font-normal leading-[37px] text-white opacity-90'>
            Upon conclusion of training you will receive a well recognized certificate of completion. This certificate is well recognized, and its an amazing way to impress potential employers.
        </p>
        </div>
        </div>
        </div>
    
        </div>
    </div>
    </div>
  )
}

export default WhyUs