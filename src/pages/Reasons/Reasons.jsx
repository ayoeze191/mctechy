import React from 'react'

const questions = [
    {
        question: "Why go the front-end way?",
        answer: "A survey conducted by Glassdoor in 2021 found that front-end developers were among the top 10 highest paying tech jobs, with a median base salary of $90,000 per year in the United States."
    },
    {
        question: "Who else is on the frontend ship?",
        answer: "According to a report by Course Report, a website that tracks coding boot camps, front-end web development is one of the most popular specializations in coding boot camps. In 2019, 42% of boot camp graduates studied front-end development."
    },
]

const benefits = [
    {
        text: "Creativity:",
        title: "Front-end development involves a high level of creativity and design ability. As a front end expert, you have the opportunity to design visually stunning websites while remaining functional and engaging."
    },
    {
        text: "High income potential:",
        title: "Due to the high demand of front end experts, you can earn a high salary. In addition, the more experience and skills you have, the higher your income.."
    }
]


const Reasons = () => {
  return (
    <div>
        <div className="container mx-auto px-[20px] md:px-0 flex flex-col gap-[46px] ">
            {questions.map((question) => <Question {...question} key={question}/>)}
            <p className='text-text-black font-DmSansBold text-[24px] leading-[31.25px]'>
            Benefits of becoming a Frontend Developer
            </p>
            {benefits.map((question) => <Benefits {...question} key={question}/>)}
        </div>
    </div>
  )
}


const Question = ({question, answer}) => {
    return (
        <div className='flex flex-col gap-[25px]'>
            <h1 className='text-text-black font-DmSansBold text-[24px] leading-[31.25px]'>
                {question}
            </h1>
            <p className='text-text-black font-DmSansRegular text-[18px] leading-[50px]'>
                {answer}
            </p>
        </div>
    )
}

const Benefits = ({title, text}) => {
    return (
        <div className='flex flex-col gap-[25px]'>
            <p className='text-text-black font-DmSansRegular text-[18px] leading-[50px]'>
               <p className='font-[500]'> {title} </p>
                {text}
            </p>
        </div>
    )
}


export default Reasons