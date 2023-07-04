import HompagesHeader from "../../component/ui/HompagesHeader"

const lessons = [
  {
    unit: "Unit 1",
    courseTitle: "Introduction to Front-End Development",
    list: ["HTML tags and syntax", "Semantic HTML", "CSS selectors and properties", "Box model and layout", "Responsive design principles"]
  },
  {
    unit: "Unit 2",
    courseTitle: "Introduction to Front-End Development",
    list: ["HTML tags and syntax", "Semantic HTML", "CSS selectors and properties", "Box model and layout", "Responsive design principles"]
  },
  {
    unit: "Unit 3",
    courseTitle: "Introduction to Front-End Development",
    list: ["HTML tags and syntax", "Semantic HTML", "CSS selectors and properties", "Box model and layout", "Responsive design principles"]
  },
  {
    unit: "Unit 4",
    courseTitle: "Introduction to Front-End Development",
    list: ["HTML tags and syntax", "Semantic HTML", "CSS selectors and properties", "Box model and layout", "Responsive design principles"]
  }
]


const WhatYouWillLearn = () => {
  return (
    <div>
        <div className="container mx-auto px-[20px] md:px-0 font-DmSansRegular">
          <HompagesHeader text={'What You Will Learn'} after={'purple'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full mt-[20px] mb-[40px]">
          {lessons.map((item) => <Lesson {...item} key={item}/>)}
          </div>
        </div>

    </div>
  )
}

const Lesson = ({unit, courseTitle, list}) => {
    return (
        <div className='bg-[#FBF8FF] flex gap-[10px] py-[46px] px-[28px] '>
        <div className='bg-purple w-[58px] h-[58px] text-white text-center md:flex hidden items-center justify-center rounded-[4px] font-DmSansBold text-[1rem] leading-[20.83px] '>    
                {unit}
        </div>
        <div>
          <h1 className='font-DmSansBold text-[20px] leading-[26.04px] text-text-black flex gap-4 mb-[12px]'>
          <div className='bg-purple w-[58px] h-[58px] text-white text-center items-center justify-center rounded-[4px] font-DmSansBold text-[1rem] leading-[20.83px] flex md:hidden'>    
                {unit}
        </div>
            {courseTitle}</h1>
          <div>
            {list.map((item) => {
              return (
              <li className="list-disc text-[20px] leading-[31px] ">
                {item}
              </li>)
            })}
          </div>
        </div>
        </div>
    )
}
export default WhatYouWillLearn