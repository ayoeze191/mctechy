import React from 'react'
import Logo from "./../../assets/header/LogoPurple.png"


const Sidebar = ({onClose }) => {
  return (
    <div className='fixed md:hidden w-[90vw] bg-white h-[95vh] overflow-y-scroll top-[2.5vh] z-50 py-10 left-[5vw]'>
            <div className="container mx-auto px-[20px] md:px-0 flex flex-col gap-10">
                <div className='flex justify-between items-center'>
                    <div><img src={Logo} /></div>
                    <button className='bg-purple text-white font-DmSansRegular font-normal px-4 py-2 rounded-md' onClick={onClose}>
                        Close
                    </button>
                </div>
                <div className='flex gap-4 flex-col'>
                    <Nav />
                    <div className='flex flex-col gap-10'>
                    <button className='bg-white text-purple font-DmSansRegular font-normal px-6 py-2 rounded-md border-purple border-[1px] border-solid w-fit'>
                        Login
                    </button>
                        <button className='bg-purple text-white font-DmSansRegular font-normal px-6 py-2 rounded-md w-fit'>
                        Signup
                    </button>
                    </div>
                </div>
            </div>
    </div>
  )
}






const NavItemText = [
  {
    text: "Home",
    dropdown: false,
  },
  {
    text: "About",
    dropdown: true,
    modal: "about"
  },
  {
    text: "Courses",
    dropdown: true,
    modal: "courses"
  },
  {
    text: "Bootcamps",
    dropdown: true,
    modal: "courses"
  },
  {
    text: "Programs",
    dropdown: false
  },
  {
    text: "FAQ",
    dropdown: false,
  },
  {
    text: "Blogs",
    dropdown: false,
  }
]

const Nav = ({}) => {
    return (
        <div className='flex gap-9 flex-col mb-4'>
            
                {NavItemText.map((item) => <NavItem {...item}/> )}
        </div>
    )
}


const NavItem = ({text, dropdown, onclick}) => {
  

    return (
      <div className=' font-MulishRegular font-normal leading-[17.58px] text-[13.5px] cursor-pointer' >
        <p>{text}</p>
        <div onClick={onclick}>
        </div>
      </div>
    )
  }

export default Sidebar