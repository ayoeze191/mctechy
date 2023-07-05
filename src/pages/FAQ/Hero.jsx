import React from 'react'

const Hero = () => {
  return (
    <div className='bg-center bg-cover bg-no-repeat bg-faqherobgmobile md:bg-faqherobgdesktop h-[489px] sm:h-[416px] w-full relative text-white pb-[40px] '>
    <div className='bg-black w-full absolute h-full opacity-40'>
    </div>
    <div className='container px-[20px] lg:px-[0]  flex flex-col  mx-auto z-40 relative h-full py-[104px] items-center gap-[13px] md:gap-[31px]'>
    <p className='text-white text-[30px] md:text-[40px] font-DmSansBold text-center leading-[49px]'>
    Frequently Asked Questions
    </p>
    <div className='flex px-[32px] w-full max-w-[517px] mx-auto'>
        <input type="text" name="" placeholder='Search by keyword ' id="" className='h-[50px] w-full  px-[15.6px]  rounded-l-[5px] bg-[#D9D9D9] text-[#615E5E] font-[18px] font-DmSansRegular  leading-[49px]' />
        <button className='bg-purple text-[18px] leading-[49px] font-DmSansRegular px-[8.55px] w-[74.58px] h-[50px] rounded-r-[5px]'>Search</button>
        </div>
    </div>
</div>
  )
}

export default Hero