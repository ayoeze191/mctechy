import React from 'react'
import HompagesHeader from '../../component/ui/HompagesHeader'
import testimony from "./../../assets/frontendpage/testimony.png"


const Testimony = () => {
  return (
    <div className='bg-purple rounded-[10px] md:container mx-auto md:mb-[51px] md:h-[331px]'>
        <div className="container mx-auto flex flex-col md:flex-row h-full ">
          <div className='md:order-2 md:w-[35%] h-full '><img src={testimony} alt="" className='w-full h-full'/></div>
          <div className='px-[20px] md:px-[21px] py-[21px] md:py-[32px] md:w-[65%]'>
    <p className={`after:content-[""] after:w-[85px] after:mt-[36px] after:h-[11px] after:bg-white  after:rounded-[3px] after:block
     font-DmSansRegular font-medium text-[24px] text-white leading-[47px]  lg:w-[85%] `}>
    I decided that attending MCTechy classes would be great for my development.
    </p>
    <div>
      <h1 className='font-DmSansRegular font-medium text-[20px] leading-[47px] text-white mt-[20px]'>David</h1>
      <p className='font-DmSansRegular font-normal text-[20px] leading-[47px] text-white'>
        Software Engineer at McGeorge
      </p>
    </div>
    </div>
</div>
    </div>
  )
}

export default Testimony