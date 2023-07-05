import React from 'react'

const Input = ({inputtitle, type, dropDownelement}) => {
  return (
    type == "address"?
    <div className='w-full font-DmSansRegular flex flex-col items-center'>
     <p className='font-medium text-[13.9px] text-text-black mb-[11.8px] w-full leading-[18.9px]'>
            {inputtitle}
        </p>
    <textarea name="address" id="" cols="30" rows="5" className='outline-none border-ash border  bg-inherit border-solid w-full rounded-lg'>
    </textarea>
    </div>
    :type === "dropdown"?
    <div className='w-full font-DmSansRegular flex flex-col items-center'>
      <p className='font-medium text-[13.9px] text-text-black mb-[11.8px] w-full leading-[18.9px]'>
            {inputtitle}
        </p>
    <select name="devices" id="" className='outline-none border-ash border  bg-inherit border-solid w-full rounded-lg h-[48px]'>
              {dropDownelement.map((item) => <option value={item.value} key={item.value}> {item.value} </option> )}
    </select>
    </div>
    :
    <div className='w-full font-DmSansRegular flex flex-col items-center'>
        <p className='font-medium text-[13.9px] text-text-black mb-[11.8px] w-full leading-[18.9px]'>
            {inputtitle}
        </p>
        <input type={!type?"text":type} placeholder='' className='outline-none border-ash border  bg-inherit border-solid w-full h-[48px] rounded-lg'/>
    </div>
 
  )
}

export default Input