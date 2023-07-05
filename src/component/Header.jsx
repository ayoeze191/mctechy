import { useContext, useEffect, useState } from 'react'
import hamburger from "./../assets/header/hamburger.png" 
import Logo from "./../assets/header/Logo.png" 
import LogoPurple from "./../assets/header/LogoPurple.png" 

import arrowdown from "./../assets/header/arrowdown.png"
import { ModalContext } from '../App'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import {VscListFlat} from "react-icons/vsc"
import {IoMdArrowDropdown } from "react-icons/io"


const Header = ({color}) => {
  const { sidebarHandler} = useContext(ModalContext)

  const [fix, setFix] = useState(false)

  window.addEventListener('scroll', () => {
    if(window.scrollY > 57.75) {
      setFix(true)
    }
    else if(window.scrollY < 57.75) {
      setFix(false)
    }
  })
  useEffect(() => {
  
  }, [])


  return (
    <div className={fix?`fixed w-full top-0 shadow-lg bg-${color=='white'?'purple':'white'}`:'relative'} style={{'transition': 'all 1s'}}>
    <div className={`flex justify-between w-full bg-[inherit] container mx-auto px-[20px] md:px-0 h-full items-center ${fix?'py-2':'py-0'}`}>
        <Link className='h-full flex items-center' to={'/'}>
          <img src={color=="white"?Logo:LogoPurple} className='w-[140px] h-[24px] md:w-[initial] md:h-[initial]' />
        </Link>
        <div className='h-full flex items-center md:hidden ' onClick = {sidebarHandler}>
            <VscListFlat color={color=='white'?'white':'black'} Size={100} fontWeight={900}  />
        </div>
        <Nav color={color}/>
        <div className='hidden md:flex gap-[34px] font-Poppins text-[13px]'>
          <button className={`text-${color}`}>
            Login
          </button>
          <Link to={'/registration'}>
            <button className= {`bg-${color=="white"?"white":"purple"} text-${color=="white"?"black":"white"}  w-[82.5px] h-[38.47px] rounded-md color-[#460482]`} >
            Signup
            </button>
          </Link>
          </div>
    </div>
    </div>
  )
}


const NavItem = ({text, dropdown, onclick, link, color}) => {
  const navigate = useNavigate()
  const runFunction = () => {
    console.log("runn". link)
    if(link) {
      navigate(link)
    }
    else {
      onclick()
    }
  }

  return (
    <div className='flex items-center gap-[13px] font-DmSansRegular font-medium leading-[17.58px] text-[13.5px] cursor-pointer' onClick={runFunction}>
      <p>{text}</p>
      <div >
        {dropdown?<IoMdArrowDropdown color={color}/>: null}
      </div>
    </div>
  )
}

const NavItemText = [
  {
    text: "Home",
    dropdown: false,
    link: "/"
  },
  {
    text: "About",
    dropdown: false,
    link: "/about",
  },
  {
    text: "Courses",
    dropdown: true,
    modal: "courses"
  },
  {
    text: "Bootcamps",
    dropdown: true,
    modal: "about"
  },
  {
    text: "Programs",
    dropdown: false,
    link: "/programs"
  },
  {
    text: "FAQ",
    dropdown: false,
    link: "/faq"
  },
  {
    text: "Blogs",
    dropdown: false,
  }
]


const Nav = ({color}) => {
  const {modalHandler, setModalContentAction} = useContext(ModalContext)

  const handlefunction = (dropdown, modalcontent) => {
    if(dropdown) {
      console.log("clicked") 
      setModalContentAction(modalcontent)
      modalHandler()
    }
  }

  return (
    <div className={`md:flex gap-[40px] items-center hidden text-${[color]}`}>
        {NavItemText.map(item => <NavItem {...item} color={color} key={item.text} onclick={() => handlefunction(item.dropdown, item.modal)}/>)}
    </div>
  )
}


export default Header