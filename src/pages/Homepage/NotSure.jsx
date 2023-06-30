import React from 'react'
import HompagesHeader from '../../component/ui/HompagesHeader'
import Program from "./../../assets/homepage/notsure/Program.png"
import play from "./../../assets/homepage/notsure/play-button.png"
import useQuery from '../../assets/hooks/useQuery'



const NotSure = () => {
    const {width} = useQuery()
  return (
    <div className='w-full py-[31px]'>
    <div className='container px-[20px] md:px-0 mx-auto'>
        <HompagesHeader  text={width<768?'Watch a  quick intro':'Not sure what program, watch this quick guide'}/>
        <div className='mt-[21px] flex justify-center items-center'>
            <img src={play} alt=""  className='absolute '/>
        <img src={Program} />
    </div>
    </div>
    
    </div>
  )
}

export default NotSure