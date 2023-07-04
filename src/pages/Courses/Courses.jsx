import React from 'react'
import courseFrame from "./../../assets/Course/courseFrame.png"
import stars from "./../../assets/Course/stars.png"
import HompagesHeader from '../../component/ui/HompagesHeader'

const all_courses = [
 {
  title: "The Complete Python Bootcamp from beginner to professional",
  teacher: "Joshua A",
  price: "N50,000"
 },
 {
  title: "The Complete Python Bootcamp from beginner to professional",
  teacher: "Joshua A",
  price: "N50,000"
 },{
  title: "The Complete Python Bootcamp from beginner to professional",
  teacher: "Joshua A",
  price: "N50,000"
 },{
  title: "The Complete Python Bootcamp from beginner to professional",
  teacher: "Joshua A",
  price: "N50,000"
 },
 
]


const Courses = () => {
  return (
    <div>
        <div className="container mx-auto mt-[43px] mb-[79px]">
          <HompagesHeader text={'Courses'} after={'purple'}/>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-x-[21px] gap-y-[40px] mt-[50px]'>
          {all_courses.map((item) => <Course {...item}/>)}
          </div>
        </div>
    </div>
  )
}

export default Courses



const Course = ({title, teacher, price}) => {
  return (
    <div className=' bg-[#FBF8FF] py-[17px]'>
        <div className='px-[31px]'>
          <div className='border-[1px] border-[#D1B7E8] rounded-[10px] px-[96px] py-[29px]'><img src={courseFrame} className='w-full'/></div>
          </div>
        <div className='px-[25px] flex flex-col gap-[5px] mt-[23px]'>
          <h1 className='font-medium text-[20px] leading-[31px] font-DmSansBold text-black'>
          {title}
          </h1>
          <p className='text-base leading-[31px] font-DmSansRegular'>
          {teacher}
          </p>
          <div>
            <img src={stars} />
          </div>
          <p className='font-DmSansBold leading-[31px]'>
            {price}
          </p>
        </div>
    </div>
  )
}
