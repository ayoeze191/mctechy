import React, {useState, useEffect} from 'react'
import HompagesHeader from '../../component/ui/HompagesHeader';
import bullet from "./../../assets/homepage/courses/bullet.png";
import Vector from "./../../assets/homepage/courses/Vector.png";
import backend from "./../../assets/homepage/courses/backend.png"
import frontend from "./../../assets/homepage/courses/frontend.png"
import businessAnalyst from "./../../assets/homepage/courses/businessAnalyst.png"
import productdesign from "./../../assets/homepage/courses/productdesign.png"
import projectmanagement from "./../../assets/homepage/courses/projectmanagement.png"


const allCourses = [
  {
    image:  backend,
    title: "Backend Development",
    text: "We believe that hands-on learning is the fastest way to mastery. Work on real projects, learn from industry experts, and get experience working with clients."
  },
  {
    image: frontend,
    title: "Frontend Development",
    text: "Interested in creativity, problem-solving, and working with the latest technologies? Front end development could be an excellent choice"
  },
  {
    image: productdesign,
    title: "Product Design",
    text: "If you're curious about creating products that make a real difference in people's lives, then product design is the perfect career for you."
  },{
    image: projectmanagement,
    title: "Project Management",
    text: "In the current business environment, project management is a highly valued skill that offers opportunities to lead successful projects and impact organizations"
  },
  {
    image: businessAnalyst,
    title: "Business Analyst",
    text: "Becoming a business analyst is an excellent choice for individuals who enjoy solving problems, collaborating with others, and leveraging tech to drive business success"
  },
]

const CoursesAvailable = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

  return (
    <div className='w-full'>
    <div className='py-[78px] md:py-[37px] container px-[20px] md:px-0 mx-auto text-text-black'>
        <HompagesHeader text={width<768?'Best courses available':'Hot courses available'}/>
        <p className='font-normal text-[20px] leading-[26.04px] text-center text-text-black font-DmSansRegular mt-[22px]'>
        50-hour programs that have helped thousands of students launch new careers in tech.
        </p>
        <div className='flex justify-between gap-[10px] mt-10 w-fit mx-auto md:mb-[48px]'>
          {["50 hours", "Onsite/Online", "Flexibility"].map((item) => {
            return( <div className='flex gap-[12px]' key={item}>
            <div>
              <img src={bullet} />
            </div>
            <p className='text-text-black font-medium text-[15px] leading-[19.53px] font-DmSansRegular '>
            {item}
            </p>
          </div>)
          })
            
            }
        </div>

        {/* courses */}

            <div className='flex flex-col gap-[56px] md:grid md:grid-cols-3 md:gap-x-[55px] md:gap-y-[56.28px]'>
              {allCourses.map((item, index) => <Course {...item} key={index}/> )}
            </div>

    </div>
    </div>
  )
}

export default CoursesAvailable


const Course = ({image, title, text}) => {
  return ( 
    <div className='py-[24.8px] bg-white shadow-2xl font-MulishRegular px-[26px]
    '>
      <div><img src={image} alt="" className='md:w-full' /></div>
      <h1 className='text-purple  font-semibold text-[21.4px] leading-[28.86px] mt-[23.89px]'>{title}</h1>
      <p className='font-medium text-[14.27px] leading-[26.75px] mt-[15.32px] '>{text}</p>
      <button className='flex gap-[7.25px] font-semibold text-[14.27px]  items-center mt-[10.53px] leading-[25.42px] text-purple'>
        Explore Field <div><img src={Vector} alt="" /></div>
      </button>
    </div>
  )
}