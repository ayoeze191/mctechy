import React from 'react'



const HompagesHeader = ({text, left, after}) => {



  return (!left?
    <div className='flex flex-col  items-center w-fit mx-auto'>
        <p className={`after:content-[""] after:w-[85px] after:mt-[5px] after:h-[11px] after:bg-${after} after:rounded-[3px] after:block after:mx-auto text-center
        font-DmSansBold font-bold text-[24px] text-[inherit] leading-[31.25px] `}>
        {text}
        </p>
    </div>
    :
    <div className='flex flex-col w-fit '>
    <p className={`after:content-[""] after:w-[85px] after:mt-[5px] after:h-[11px] after:bg-${after}  after:rounded-[3px] after:block
    font-DmSansBold font-bold text-[24px] text-[inherit] leading-[31.25px]`}>
    {text}
    </p>
</div>
  )
}

export default HompagesHeader