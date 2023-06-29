import React from 'react'
import HompagesHeader from '../../component/ui/HompagesHeader'
import benefitbg from "./../../assets/homepage/benefit/benefitbg.png"



const Benefits = () => {
  return (
    <div className='text-white bg-purple'>
        <div>
            <img src={benefitbg} />
        </div>
        <HompagesHeader text={'Benefits of McTechy'} left={true}/>

    </div>
  )
}

export default Benefits