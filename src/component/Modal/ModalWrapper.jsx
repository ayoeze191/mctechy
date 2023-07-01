import React, { Children, useContext } from 'react'
import { ModalContext } from '../../App'

const ModalWrapper = ({showWrapper, children}) => {
  const {modalHandler} = useContext(ModalContext)
  return (
    <div className='h-[100vh] fixed bottom-0 modalWrapper flex items-end' style={{
      transform: showWrapper?'translateY(0px)':'translateY(100%)',
      transition: "0.3s all"
  }}
  onClick={() => modalHandler()}
  >
    <div className='w-full h-[80vh] bg-white relative'>
    <div className=' before:content-[""] before:rounded before:ml-[475px]  before:mt-[6px] before:absolute before:top-0 before:block before:w-[85px] before:h-[7px] before:bg-purple'>
        <div className='px-[104px] mt-[63px]'>
            {children}
        </div>
    </div>
    </div>
    </div>
  )
}

export default ModalWrapper