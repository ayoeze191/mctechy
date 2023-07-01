import React from 'react'
import { Button, DoubleButtonColumn } from '../../component/ui/button'
import forward from "./../../assets/frontendpage/forward.png"
const Build = () => {
  return (
    <div className='px-[20px] md:px-0'>
        <div className="container mx-auto flex  items-center  bg-white py-[26px] rounded-[10px] relative -mt-10 mb-11 shadow-lg justify-center gap-[24px] xl:px-0 px-[24px]">
            <button className="bg-purple  text-white w-[68px] md:w-[78.89px] h-[68px] flex items-center flex-col rounded-md text-[14px] font-medium leading-[21.34px] py-[14px] px-[16px] md:px-0  text-center justify-center font-DmSansRegular">
         <p className='font-medium font-DmSansRegular text-[14px] leading-[18.3px] '>   May </p>
            <p className=' text-[28px] leading-[36.46px] font-DmSansBold'>
              20
            </p>
        </button>
        <div className='flex gap-[24px] flex-col md:flex-row items-left md:items-center'>
            <h2 className='text-text-black font-DmSansBold md:leading-[31.25px] text-[18px] leading-[23.44px] md:text-[22px]'> 
            Start and Build a Career in Frontend Development
            </h2>
            <p className='text-[#767070] font-normal text-[16px] md:text-[15.52px] leading-[20.83px] md:leading-[22.82px] font-DmSansRegular'>
           12:00 pm - 2:00pm
           </p>
            <p className='text-text-black font-normal text-[15.52px] leading-[22.82px] font-DmSansRegular gap-2 hidden md:flex'>
            Price: <span className='font-DmSansBold'>N90,000</span>
            </p>
           
           <button className="hidden md:flex bg-purple w-[104.5px] h-[39.47px] text-white items-center rounded-lg text-[14px] font-medium leading-[21.34px] py-[9px]  text-center justify-center font-DmSansRegular">
           {'Enroll Now'}
        </button>
        </div>
        <div className='md:hidden'>
                <img src={forward} />
        </div>
        </div>
    </div>
  )
}

export default Build