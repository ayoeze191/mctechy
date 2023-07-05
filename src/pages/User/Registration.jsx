import React from 'react'
import { Footer } from '../../component/Footer'
import Header from '../../component/Header'
import RegistrationForm from './RegistrationForm'
import {AiOutlineArrowRight} from "react-icons/ai"


const Registration = () => {
  return (
    <div>
        <div className='pt-[22px] md:py-[17px] '>
          <div className='md:mb-[98px]'>
        <Header color={'purple'} />
        </div>
        <div className='container mx-auto flex flex-col md:flex-row px-[20px] md:px-0 mt-[29px] md:mt-0 mb-[47px] md:mb-0'>
            <RegistrationStory /> <RegistrationForm />
        </div>
        </div>
        <Footer />
    </div>
  )
}


const steps = [{
    step: "Step 1",
    title: "Speak to a course advisor",
    text: "The first step is to speak with one of our expert course advisors. Our advisors will work with you to determine which program is right for you based on your goals, experience, and interests."
},
{
    step: "Step 2",
    title: "Complete cohort registration",
    text: "The first step is to speak with one of our expert course advisors. Our advisors will work with you to determine which program is right for you based on your goals, experience, and interests."
},{
    step: "Step 3",
    title: "Receive a confirmation",
    text: "The first step is to speak with one of our expert course advisors. Our advisors will work with you to determine which program is right for you based on your goals, experience, and interests."
},]



const RegistrationStory = () => {
    return (
        <div className='md:w-[50%]'>
            <h2 className='font-DmSansBold text-[24px] leadig-[31.25px] text-text-black mb-[29px] '>Your journey starts here: Register for McTechy's Career-Focused Tech Training Today!</h2>
            <div>
                <p className='font-DmSansRegular font-medium mb-[15px] leading-[40px] '>How to get started</p>
            </div>
            <div className='flex flex-col gap-[38px] '>
                {steps.map((item) => <Step {...item} key={item.step}/> )}
            </div>
        </div>
    )
}


const Step = ({step, title, text}) => {
    return (
        <div className='leading-[50px] text-[18px] font-DmSansRegular'>
            <p className='flex font-medium gap-2'>
                <span>
                    {step}:
                </span>
                <span className=''>
                    {title}
                </span>
            </p>
            <p>
                {text}
            </p>
            <p className='mt-[15px] text-purple flex items-center gap-[3.83px]'>
                Speak to your course advisor
                <span>
                    <AiOutlineArrowRight width={'20.51px'} height={'20.51px'}/>
                </span>
            </p>
        </div>
    )
}



export default Registration



