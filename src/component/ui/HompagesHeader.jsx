import React from 'react'



const HompagesHeader = ({text, left}) => {



  return (!left?
    <div className='flex flex-col  items-center w-fit mx-auto'>
        <p className=' after:content-[""] after:w-[85px] after:mt-[22px] md:after:mt-[5px] after:h-[11px] after:bg-purple after:rounded-[3px] after:block after:mx-auto
        font-DmSansBold font-bold text-[24px] text-[inherit] leading-[31.25px] '>
        {text}
        </p>
    </div>
    :
    <div className='flex flex-col  items-start w-fit '>
        <p className=' after:content-[""] after:w-[85px] after:mt-[22px] md:after:mt-[5px] after:h-[11px] after:bg-purple after:rounded-[3px] after:block after:mx-auto
        font-DmSansBold font-bold text-[24px] text-[inherit] leading-[31.25px] '>
        {text}
        </p>
    </div>
  )
}

export default HompagesHeader