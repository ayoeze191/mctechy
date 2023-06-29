import React from 'react'
import HompagesHeader from '../../component/ui/HompagesHeader'
import benefitbg from "./../../assets/homepage/benefit/benefitbg.png"

import benefitbgmob from "./../../assets/homepage/benefit/benefitbgmob.png"



const Benefits = () => {
  return (
    <div className=' bg-purple'>
    <div className='text-white container flex items-center flex-col md:flex-row px-[20px] md:px-0 gap-[23px] md:gap-[68px] py-[25px] mx-auto'>
        <div className='w-full'>
        <img src={benefitbgmob} className='w-full md:hidden block'/>

            <img src={benefitbg} className='w-full hidden md:block'/>
        </div>
        <div>
            <div>
                <div className='hidden md:block'>
        <HompagesHeader text={'Benefits of McTechy'} left={true}/>
        </div>
        <div className='flex gap-[24.9px] flex-col mt-[36px]'>
        <div className='flex flex-col gap-[1.09px]'>
            <h2 className='font-medium tex-[20px] font-DmSansRegular leading-[47px]'>
                Become a tech pro in 3/6 months
            </h2>
        <p className='font-DmSansRegular text-[16px] font-normal leading-[37px] text-white opacity-90'>
        Our (McGeorge) tech boot camp is designed to be intensive and fast-paced, allowing you to learn a variety of technology skills in a short amount of time.
        </p>
        </div>

        <div className='flex flex-col gap-[1.09px]'>
        <h2 className='font-medium tex-[20px] font-DmSansRegular leading-[47px]'>
                Boost your employability and earning potential
            </h2>
        <p className='font-DmSansRegular text-[1rem] font-normal leading-[37px] text-white opacity-90'>
        By gaining the technical skills that are in high demand in the job market, you will become more attractive to potential employers, increasing your chances of finding a job and earning a higher salary.
        </p>
        </div>
        <div className='flex flex-col gap-[1.09px]'>
        <h2 className='font-medium tex-[20px] font-DmSansRegular leading-[47px] '>
            Learn from industries leaders
            </h2>
        <p className='font-DmSansRegular text-[1rem] font-normal leading-[37px] text-white opacity-90'>
        McGeorge Tech boot camps is led by experienced professionals who have worked in the industry and have real-world experience. This means that you will be learning from those who have a deep understanding of the field and can provide valuable insights and advice.
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

export default Benefits