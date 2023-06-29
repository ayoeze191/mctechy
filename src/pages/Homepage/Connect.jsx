import React from 'react'
import HompagesHeader from '../../component/ui/HompagesHeader'
import cisco from "./../../assets/homepage/connect/cisco.png"
import github from "./../../assets/homepage/connect/github.png"
import google from "./../../assets/homepage/connect/google.png"
import indeed from "./../../assets/homepage/connect/indeed.png"
import logo from "./../../assets/homepage/connect/company'slogo.png"

import Linkedln from "./../../assets/homepage/connect/Linkedln.png"

const Connect = () => {
  return (
    <div className=' py-[86px] text-text-black px-[20px] md:px-0'>
    <div className=' container mx-auto'>
        <HompagesHeader text={'Connect With Our 50+ Hiring Partners'}/>
        <p className='font-normal text-[20px] leading-[26.04px] text-center text-text-black font-DmSansRegular mt-[22px]  md:px-[44px]'>
        McTechy’s coding bootcamps students benefit from an industry-leading network of hiring partners, featuring over 1,500 innovative partners looking to hire emerging talent.
        </p>
        <div className='md:flex grid grid-cols-2 gap-x-[28px] gap-y-[53px]  md:flex-row mx-auto items-center gap-[33px] mt-[53px] '>
            <div>
                <img src={indeed} />
            </div>
            <div>
                <img src={Linkedln} />
            </div>
            <div>
                <img src={logo} />
            </div>
            <div>
                <img src={github} />
            </div>
            <div>
                <img src={google} />
            </div>
            <div>
                <img src={cisco} />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Connect