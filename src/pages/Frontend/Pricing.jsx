import React from 'react'
import HompagesHeader from '../../component/ui/HompagesHeader'
import pricingbg from "./../../assets/frontendpage/pricingbg.png"


const Pricing = () => {
  return (
    <div>
        <div className="container mx-auto px-[20px] md:px-0">
            <HompagesHeader text={'Pricing'} after={'purple'}/>
            <div className='flex flex-col gap-[29px] md:flex-row md:mt-[23px] md:mb-[40px]'>
                <div className=' flex flex-col md:justify-center h-full mt-[20px] flex-1'>
                    <h2 className='font-DmSansRegular font-medium text-[24px] leading-[31px] mb-[15px]'>
                        Basic Plan
                    </h2>
                    <div className='font-DmSansRegular font-[500] text-[16px] leading-[50px]'>
                        <li className='list-disc'>Price: N90,000</li>
                        <li className='list-disc'>Includes access to all course materials for 2 programs of choice</li>
                        <li className='list-disc'>Access to online support community</li>
                        <li className='list-disc'>Certificate of completion upon finishing program(s)</li>
                        <li className='list-disc'>Duration: 12 weeks</li>
                        <div className='text-[14.27px] text-purple leading-[25.42px] font-MulishRegular font-semibold'>
                            Get started
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-[576px] md:h-[373px] '>
                    <img src={pricingbg} className='w-full h-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing