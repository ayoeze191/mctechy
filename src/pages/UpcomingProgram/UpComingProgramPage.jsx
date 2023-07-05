import React from 'react'
import Header from '../../component/Header'
import { Footer } from '../../component/Footer'
import upcomingImga from "./../../assets/Programs/upcomingImga.png"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import HompagesHeader from '../../component/ui/HompagesHeader'
import {FiClock} from "react-icons/fi"



const UpComingProgramPage = () => {
    return (
      <div className=' mt-0 '>
          <div className='bg-white pt-[22px] md:py-[17px] '>
            <div className=''>
          <Header color={'purple'} />
          </div>
                <Upcoming />
          </div>
          
          <Footer />
      </div>
    )
  }



  const programs = [
    {
        title: "Start and Build a Career in Frontend Development",
        Link: "https://meet.google.com/quc-nwaj-wgv",
        time: "12:00 pm - 2:00pm"
    },
    {
        title: "Start and Build a Career in Frontend Development",
        Link: "https://meet.google.com/quc-nwaj-wgv",
        time: "12:00 pm - 2:00pm"
    },    {
        title: "Start and Build a Career in Frontend Development",
        Link: "https://meet.google.com/quc-nwaj-wgv",
        time: "12:00 pm - 2:00pm"
    },    {
        title: "Start and Build a Career in Frontend Development",
        Link: "https://meet.google.com/quc-nwaj-wgv",
        time: "12:00 pm - 2:00pm"
    },
]



  const Program = ({title, Link, time}) => {
    return(
        <div className='flex gap-[10px] md:pl-[20px] md:pr-[81px] items-center mx-auto w-full max-w-[1147px] bg-white programs py-[26px] upcoming rounded-md px-[20px]'>
            <div>
                <img src={upcomingImga} className='w-[68px] h-[68px]'/>
            </div>
            <div className='flex justify-between flex-1 items-center'>
            <div className='flex flex-col md:gap-[10px]'>
                <h2 className='text-[18px] leading-[23.44px] font-DmSansBold'>
                    {title}
                </h2>
                <p className='font-DmSansRegular  leading-[23.44px] text-[#767070] text-[16px] flex md:gap-[25px] flex-col'>
                <span className='flex items-center gap-2 text-[#776E6E] '><FiClock  color='#776E6E' fontFamily={700}/> {time}</span> <span className='hidden md:block'> {Link} </span>
                </p>
            </div>
            <div>
                <MdOutlineArrowForwardIos color='#333333' />
            </div>
            </div>
        </div>  
    )
}


const Upcoming = () => {
    return (
      <div className='mt-[59px] mb-[79px] px-[20px] md:px-0'>
        <HompagesHeader text={'Upcoming Programs'} after={'purple'} />
          <div className="container mx-auto flex flex-col gap-[31px] mt-[58px]">
              {programs.map((item) => {
                  return <Program {...item} key={item.title}/>
              })}
          </div>
      </div>
    )
  }



export default UpComingProgramPage