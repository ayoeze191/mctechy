import React from 'react'
import upcomingImga from "./../../assets/Programs/upcomingImga.png"
import {GrNext} from "react-icons/gr"

const programs = [
    {
        title: "Upcoming Program",
        text: "Stay Ahead of the Curve: Explore Our Exciting Upcoming Programs"
    },
    {
        title: "Recurring Programs",
        text: "Consistent Growth: Engage in Our High-Value Recurring Programs"
    },{
        title: "Live Events",
        text: "Join the Thrilling Experience: Be Part of Our Live Events and Unleash Your Potential"
    },
]


const Upcoming = () => {
  return (
    <div className='mt-[59px] mb-[79px]'>
        <div className="container mx-auto flex flex-col gap-[23px] ">
            {programs.map((item) => {
                return <Program {...item} key={item.title}/>
            })}
        </div>
    </div>
  )
}


const Program = ({title, text}) => {
    return(
        <div className='flex gap-[10px] pl-[20px] pr-[81px] items-center mx-auto w-full max-w-[1147px] bg-white programs py-[26px]'>
            <div>
                <img src={upcomingImga} />
            </div>
            <div className='flex justify-between flex-1'>
            <div className='flex flex-col gap-[10px]'>
                <h2 className='text-[18px] leading-[23.44px] font-DmSansBold'>
                    {title}
                </h2>
                <p className='font-DmSansRegular text-[18px] leading-[23.44px] '>
                {text}
                </p>
            </div>
            <div>
                <GrNext />
            </div>
            </div>
        </div>
    )
}

export default Upcoming