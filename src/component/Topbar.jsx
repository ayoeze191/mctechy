import React from 'react'
import partypopper from "./../assets/topbar/partypopper.png"


const Topbar = () => {
  return (
    <div className='bg-orange h-fit'>
    <div className='py-[15.75px] h-fit w-full px-[31.91px] text-center text-white font-medium gap-1 text-[12px]  md:text-[15px] leading-[18.83px] flex justify-center items-center container font-MulishRegular'>
      <div className='h-full '>
        <img src={partypopper} alt="" className='w-[12px] h-[14px] md:w-[initial] md:h-[initial]' />
      </div>
      <p className='h-full flex items-center'> Web Development Class starts May 12, 2023</p>
    </div>
    </div>
  )
}

export default Topbar