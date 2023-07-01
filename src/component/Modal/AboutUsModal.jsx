import React from 'react'

const AboutUsModal = () => {
  return (
    <div className='flex gap-[51px]'>
        <div className='flex flex-col gap-[23px]'>
            <h2 className='font-bold text-[24px] leading-[31.25px] text-text-black font-DmSansRegular'>About us</h2>
            <p className='font-DmSansRegular text-[20px] leading-[37.83px] text-text-black'>
            McTechy is a global leader in coding bootcamps and tech courses. Start your career in tech today.
            </p>
            <div>
                <p>Contact us</p> <div>
                    <img src={''} />
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-[23px]'>
            <h2 className='font-bold text-[24px] leading-[31.25px] text-text-black font-DmSansRegular'>Our Story</h2>
            <p className='font-DmSansRegular text-[20px] leading-[37.83px] text-text-black'>
            Learn who we are, our vision and
            how we are changing the future of
            work.
            </p>
        </div>
        <div className='flex flex-col gap-[23px]'>
            <h2 className='font-bold text-[24px] leading-[31.25px] text-text-black font-DmSansRegular'>Why McTechy</h2>
            <p className='font-DmSansRegular text-[20px] leading-[37.83px] text-text-black'>
            Learn why you should choose
            McTechy to start your career
            in Tech.
            </p>
        </div>
    </div>
  )
}

export default AboutUsModal