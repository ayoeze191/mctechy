import React from 'react'
import hamburger from "./../assets/header/hamburger.png" 
import Logo from "./../assets/header/Logo.png" 
import arrowdown from "./../assets/header/arrowdown.png"


const Header = () => {
  return (
    <div className=''>
    <div className='flex justify-between w-full bg-[inherit] container mx-auto px-[20px] md:px-0 h-[37px] '>
        <div className='h-full flex items-center  '>
          <img src={Logo} className='w-[140px] h-[24px] md:w-[initial] md:h-[initial]' />
        </div>
        <div className='md:hidden h-full flex items-center'> 
          <img src={hamburger} />
        </div>
        <Nav />
        <div className='hidden md:flex gap-[34px] font-Poppins text-[13px]'>
          <button className='text-white'>
            Login
          </button>
          <button className='bg-white w-[82.5px] h-[38.47px] rounded-md color-[#460482] '>
            Signup
          </button>
          </div>
    </div>
    </div>
  )
}


const NavItem = ({text, dropdown}) => {
  return (
    <div className='flex items-center gap-[13px] text-white font-DmSansRegular font-medium leading-[17.58px] text-[13.5px]'>
      <p>{text}</p>
      <div>
        {dropdown?<img src={arrowdown} />: null}
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
    dropdown: false,
  },
  {
    text: "Courses",
    dropdown: true,
  },
  {
    text: "Bootcamps",
    dropdown: true,
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


const Nav = () => {
  return (
    <div className='md:flex gap-[40px] items-center hidden '>
        {NavItemText.map(item => <NavItem {...item} key={item.text}/>)}
    </div>
  )
}


export default Header