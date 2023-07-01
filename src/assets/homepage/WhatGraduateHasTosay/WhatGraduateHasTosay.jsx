import React from 'react'
import HompagesHeader from '../../../component/ui/HompagesHeader'
import graduates from "./../../../assets/homepage/graduates/graduates.png"
import dammy from "./../../../assets/homepage/graduates/dammy.png"
import olamide from "./../../../assets/homepage/graduates/olamide.png"
import victor from "./../../../assets/homepage/graduates/victor.png"
import useQuery from '../../hooks/useQuery'


const WhatGraduateHasTosay = () => {
    const {width} = useQuery()

  return (
    <div className='mb-[144px]'>
    <div className='container mx-auto mt-[48px] md:mt-[80px] text-text-black px-[20px] md:px-0'>
        <div>
            <div className='mb-[46.9px]'>
        <HompagesHeader text={width<768?"Hear from our graduates":'What graduates have to say'} after={'purple'}/>
        </div>
        <div className='flex flex-col md:flex-row gap-[40px] md:gap-[132px]'>
            <div className={`w-full md:w-1/2 ${width < 768?"order-2":"order-1"}`}>       
            <h2 className='font-bold text-[20px] leading-[26.4px] font-DmSansRegular text-grey md:text-text-black'>Featured Stories</h2>
            <p className='font-medium text-[16px] md:text-[24px] leading-[37px] md:leading-[47px]  font-DmSansRegular after:content after:content-[""] after:w-[85px] after:mt-[22px] md:after:mt-[23px] after:h-[11px] after:bg-purple after:rounded-[3px] after:block'>
            One of the difficulties that I had when I was studying web development on my own was that even though I could grasp the material and understand the concepts in an abstract format, I didn't always understand how it could be applied in real life. Getting the opportunity to learn from the Head Instructor for my course was really eye-opening for me.
            </p>
            <div className='mt-[33px] md:mt-[35px]'>
                <h2 className='font-medium text-[24px] leading-[47px] font-DmSansRegular text-text-black'>Favour Stephen</h2>
                <p className='font-normal text-[18px] leading-[47px] font-DmSansRegular'>
                Web Developer at McGeorge Consulting Ltd
                </p>

            </div>
            </div>
            <div className='w-full md:w-1/2'><img src={graduates} alt="" className='w-full' /></div>
            
        </div>
        </div>
        <div className='mt-[43.1px] hidden md:block'>
        <Graduates />
        </div>
    </div>
    </div>
  )
}

export default WhatGraduateHasTosay


const Graduates = () => {
    const gradautes = [{
        image: victor,
        name: "Victor",
        job: "Software Engineer at Upwork"
    },
    {
        image: olamide,
        name: "Olamide",
        job: "Business Analyst at McGeorge"
    },{
        image: dammy,
        name: "Dammy",
        job: "Project Manager at McGeorge"
    },
    ]

    return (
        <div className='flex justify-between'>
            {gradautes.map((item) => <Graduate {...item} key={item.name}/>)}
        </div>
    )
}



const Graduate = ({image, name, job, social}) => {
    return (
        <div className='flex flex-col gap-[32.39px]'>
            <div>
                <img src={image} />
            </div>

            <div className='font-MulishRegular'>
                <p className=' font-semibold text-[21.4px] leading-[26.86px]  text-purple'>{name}</p>
                <p className='text-text-black font-medium text-[14.27px] leading-[26.75px] mt-[9.56px] '>{job}</p>
            </div>
            <div>
                <img src={social} alt="" />
            </div>
        </div>
    )
}