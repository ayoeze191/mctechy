import React from 'react'
import Input from '../../component/ui/Input'



const input =  [
    {inputtitle: "Name"},
    {inputtitle: "Email Address", type: "email"},
    {inputtitle: "Phone number"},
    {inputtitle: "Address", type: "address"},
    {inputtitle: "Course of interest", "type":"dropdown", 
    dropDownelement: [
        {value: "Frontend Development"},
        {value: "Backend Development"},
        {value: "Product Design"},
    ]
},
{inputtitle: "Program Types", "type":"dropdown", 
    dropDownelement: [
        {value: "Frontend Development"},
        {value: "Backend Development"},
        {value: "Product Design"},
    ]
},
{inputtitle: "Payment Method", "type":"dropdown", 
    dropDownelement: [
        {value: "Frontend Development"},
        {value: "Backend Development"},
        {value: "Product Design"},
    ]
}
]





const RegistrationForm = () => {
  return (
    <div className='md:w-[50%] md:px-[42px] w-full py-[39.6px] md:py-0'>
        <div className='flex flex-col gap-[24px]'>
            <h2 className='font-DmSansBold text-[24px] leading-[31.25px] text-text-black'>Registration Form</h2>
            <p className=' font-medium  leading-[20.83px] text-text-black'>
            Select a date and time and a career Advisor will be in touch
            </p>
            
            {input.map((item) => <Input {...item} key={item.inputtitle}/>)}
            <button className='font-DmSansRegular text-white bg-purple py-2 rounded-md  '>
                Submit details
            </button>
        </div>
    </div>
  )
}

export default RegistrationForm