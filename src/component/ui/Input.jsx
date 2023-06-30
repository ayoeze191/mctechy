import React from 'react'

const Input = ({inputtitle, type}) => {
  return (
    <div className='w-full font-DmSansRegular flex flex-col items-center'>
        <p className='font-medium text-[13.9px] text-text-black mb-[11.8px] w-full leading-[18.9px]'>
            {inputtitle}
        </p>
        <input type={!type?"text":type} placeholder='' className='outline-none border-ash border  bg-inherit border-solid w-full h-[48px] rounded-lg'/>
    </div>
  )
}

export default Input