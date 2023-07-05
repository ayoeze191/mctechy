import React from 'react'

const CoursesModal = () => {
  return (
    <div className='flex justify-start flex-col md:flex-row'>
        <div className='flex flex-col gap-[23px] md:mr-[51px] md:w-[45%]'>
            <h2 className='text-[24px] leading-[31.25px] text-text-black font-bold font-MulishRegular'>Courses</h2>
            <p className='font-DmSansRegular text-[20px] leading-[40px] text-text-black'>
                Learn a new digital skill by taking one of our certificate courses in-person or online. Our courses are part-time and can take anywhere from 5 to 10 weeks to complete.
            </p>
            <div>
                <p>View Testimonials</p> <div>
                    <img src={''} />
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-[23px] mr-[84px]' >
            <h2 className=' text-[18px] leading-[22.59px] text-text-black font-semibold font-MulishRegular'>Development</h2>
            <p className='font-DmSansRegular text-[14.27px] leading-[37.83px] text-text-black'>
            Frontend Development Course
            </p>
            <p className='font-DmSansRegular text-[14.27px] leading-[25.42px] text-text-black'>
            Backend Development Course
            </p>
        </div>
        <div className='flex flex-col gap-[23px]'>
            <h2 className='text-[18px] leading-[22.59px] text-text-black font-semibold font-MulishRegular'>Product & Design</h2>
            <p className='font-DmSansRegular text-[14.27px] leading-[25.42px] text-text-black'>
            Product Management Course
            </p>
            <p className='font-DmSansRegular text-[14.27px] leading-[25.42px] text-text-black'>
           Ui/UX Design Course
            </p>
        </div>
    </div>
  )
}

export default CoursesModal