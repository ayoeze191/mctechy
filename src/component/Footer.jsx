import React from 'react'
import Vector from "./../assets/footer/Vector.png"
import Input from './ui/Input'
import { Button } from './ui/button'
import Footerlogo from "./../assets/footer/Footerlogo.png"
import facebook from "./../assets/footer/socials/facebook.png"
import insta from "./../assets/footer/socials/inta.png"
import twitter from "./../assets/footer/socials/twitter.png"
import useQuery from '../assets/hooks/useQuery'
import FooterAboutDesktopView from './ui/FooterAboutDesktopView'

export const Footer = () => {
  return (
    <div className='bg-purple pt-[54px] '>
        <div className="container mx-auto px-[20px] md:px-0">
            <div className='flex gap-[87px] flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
                <h2 className='font-bold text-[24px] leading-[31.5px] font-DmSansBold text-white mb-[18px] '>How to get started</h2>
                <p className='font-normal text-[20px] leading-[40px] font-DmSansRegular text-white mb-[29px]'>
                Join a network of over 250,000 professionals who are transforming and accelerating their careers through cutting edge tech skills. Speak with a Learning Advisor, who can help answer any of your questions.
                </p>
                <div className='flex flex-col gap-[30px] '>
                    {questions.map(ques => {
                        return( <div className='flex items-center text-white gap-[40px] text-[20px] font-DmSansBold font-[700]' key={ques}>
                        <img src={Vector} alt="" /> <p>{ques}</p>
                    </div>)
                    })}
                    
                </div>
            </div>

                <FooterForm />

            </div>
            <FooterAbout />
            <div className='w-full border-t-solid border-t-white border-t text-[12.61px] font-normal leading-[36.03px] font-DmSansRegular text-white text-center py-[5px] md:mt-[42px]'>
            All Content © McTechy Inc. 2015-2023. "McTechy" and the McTechy Logo are trademarks of McGeorge Consulting Ltd. All Rights Reserved.
            </div>
        </div>
    </div>
  )
}


const questions = [
    "Pick a program of choice",
    "Select a program schedule",
    "Enter your contact details",
    "speak to a professional",
    "Make full payment or installment",
    "Begin classes",
    "We offer a range of high demand training courses"
]






const FooterForm = () => {
    return (
        <div className='w-full md:w-1/2 bg-white px-[10px] md:px-[42px] rounded-lg py-[31px]'>
            <h1 className='font-bold text-2xl leading-[31px] text-text-black font-DmSansBold mb-[14px]'>
                Speak to a career adviser
            </h1>
            <p className=' text-[1rem] leading-[20.83px]  font-[500] text-text-black font-DmSansRegular mb-[14px]'>
            Select a date and time and a career Advisor will be in touch
            </p>
            <div className='flex flex-col items-center mx-auto gap-[14.82px] mb-[21.82px] '>
               { ["Name", "Email address", "Phone number", "Date", "Time"].map((item) => {
                return (
                    <Input inputtitle={item}/>
                )
               }) }
            </div>
            <Button text="Speak to a career advisor" color={'purple'} fullwidth />
        </div>
    )
}



const FooterAbout = () => {
    const {width} = useQuery()
    return (
        <div className='flex flex-col gap-[29px] md:gap-[68px] md:flex-row md:mt-[98px]'>
            <div className='font-DmSansRegular md:w-[30%]'>
                <div className='mb-[19px] mt-[25px] md:mt-0'><img src={Footerlogo} /></div>
                <h3 className='text-white text-[20px] font-medium leading-[37.83px] mb-[29px] '>McTechy is a global leader in coding bootcamps and tech courses. Start your career in tech today.</h3>
                <p className='text-[12px] leading-[26px] font-normal text-white mb-[29px]'>
                Subscribe for career Tips and Cutting-Edge Tech News to Launch Your Path to Success!"
                </p>
                <input type={'text'} placeholder='Email Address' className='w-full outline-none border border-solid border-ash py-[15.6px] px-[14.87px] rounded-lg bg-inherit mb-[29px]'/>
               <button className={`bg-white w-fit px-[35.14px] text-purple flex items-center rounded-lg text-[14px] font-medium leading-[21.34px] py-[14px]  text-center justify-center font-DmSansBold`}>
               {'Subscribe'}
                </button>
                <div className='flex gap-[30.93px] items-center mt-[32px]'>
                    {[twitter, facebook, insta].map((social, index) => {
                        return <div key={index}>
                            <img src={social} />
                        </div>
                    })}
                </div>
            </div>
           {width < 768 ?footerNavItems.map((items, index) => <FooterNav {...items} key={index} />) : 
           <FooterAboutDesktopView />
           }
            
        </div>
    )
}


const footerNavItems = [
    {
        header: "Certificate Courses",
        values: [
            "Frontend Development",
            "Backend Development",
            "Product Design",
            "Business Analysis",
            "Project Management"
        ]
    },
    {
        header: "Policies",
        values: [
            "Terms and condition",
            "Privacy Policy",
            "Payment Policy",
        ]
    },
    {
        header: "About us",
        values: [
            "Our Story",
            "Our Mission",
            "Testimonials",
        ]
    },
    {
        header: "Resources",
        values: [
            "Blog",
            "Ebooks",
            "FAQs",
        ]
    },
    {
        header: "Help",
        values: [
            "Courses",
            "Register",
            "About",
        ]
    },
    {
        header: "Address",
        values: [
            "Ilorin, Nigeria.",
        ]
    }
]




export const FooterNav = ({header, values}) => {
    return (
        <div className='flex flex-col gap-[7px]  '>
            <p className='text-white leading-[21.62px] font-bold text-[14.41px] font-jakarta'>{header}</p>
            <div className='flex-col flex gap-[7px]'>
            {values.map((item, index) => {
                return (
                    <p key={index} className='text-white leading-[36.03px] font-normal text-[12.61px] font-jakarta'>
                        {item}
                    </p>
                )
            })}
            </div>
        </div>
    )
}