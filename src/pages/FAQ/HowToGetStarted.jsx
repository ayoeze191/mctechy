import React, { useState } from 'react'
import {IoIosArrowForward} from "react-icons/io"


const HowToGetStarted = () => {
    const [questions, setQuestion] = useState([
        {   
            id: 0,
            question : "How do I get started?",
            answer: "To get started, select your program of choice, give us your contact and a career advisor will reach out to you via an email or a call.",
            showDetail: true
        },
        {
            id: 1,
            question : "Are there online classes too?",
            answer: "To get started, select your program of choice, give us your contact and a career advisor will reach out to you via an email or a call.",
            showDetail: false
        },
        {
            id: 2,
            question : "Are the classes online or onsite?",
            answer: "To get started, select your program of choice, give us your contact and a career advisor will reach out to you via an email or a call.",
            showDetail: false
        },
        {
            id: 3,
            question : "Where is the tech boot camp located?",
            answer: "To get started, select your program of choice, give us your contact and a career advisor will reach out to you via an email or a call.",
            showDetail: false
        },
        {
            id: 4,
            question : "Can I make installment payment?",
            answer: "To get started, select your program of choice, give us your contact and a career advisor will reach out to you via an email or a call.",
            showDetail: false
        },
        {
            id: 5,
            question : "Do I get a certificate?",
            answer: "To get started, select your program of choice, give us your contact and a career advisor will reach out to you via an email or a call.",
            showDetail: false
        },
        {
            id: 6,
            question : "How do I know what courses to choose?",
            answer: "To get started, select your program of choice, give us your contact and a career advisor will reach out to you via an email or a call.",
            showDetail: false
        }
    ])

    
const OnclickHandler = (id) => {
    const newquestions = questions.map((item) => item.id == id? {...item, showDetail: !item.showDetail}:{...item, showDetail: item.showDetail} )
    setQuestion(newquestions)
}

  return (
    <div className='px-[20px] md:px-0'>
        <div className='container mx-auto flex gap-[46px] flex-col py-[33px] px-[20px]'>
                {questions.map((item, index) => <Question key={index} {...item} onclick={() => OnclickHandler(item.id)}/>)}
        </div>
    </div>
  )
}



const Question =  ({question, answer, showDetail, onclick}) => {
    return(
        <div className={`${showDetail?'h-[173px] md:h-[70px]':'h-[25.25px]'} overflow-hidden`} onClick={onclick}
        style={{
            transition: "0.5s all",
            
        }}
        
        >
            <div className='flex justify-between w-full'>
                <p className={`font-medium text-[18px] leading-[21.6px] `}>{question}</p>
                <IoIosArrowForward color='#460482' size={30} 
                style={{
                    transition: "0.5s all",
                    transform: showDetail?"rotate(90deg)":"rotate(0deg)"
                }}

                />
            </div>
            <p className='font-normal font-DmSansRegular text-[18px] leading-[32.58px] text-[#3C3C43]'>
                {answer}
            </p>
        </div>
    )
}

export default HowToGetStarted