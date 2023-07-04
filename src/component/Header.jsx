import { useContext } from 'react'
import hamburger from "./../assets/header/hamburger.png" 
import Logo from "./../assets/header/Logo.png" 
import LogoPurple from "./../assets/header/LogoPurple.png" 
import {BsList} from "react-icons/bs"
import arrowdown from "./../assets/header/arrowdown.png"
import { ModalContext } from '../App'
import { Navigate, useNavigate } from 'react-router-dom'


const Header = ({color}) => {
  return (
    <div className=''>
    <div className='flex justify-between w-full bg-[inherit] container mx-auto px-[20px] md:px-0 h-[37px] '>
        <div className='h-full flex items-center  '>
          <img src={color=="white"?Logo:LogoPurple} className='w-[140px] h-[24px] md:w-[initial] md:h-[initial]' />
        </div>
        
        <div className='h-full flex items-center md:hidden'>
            <BsList color={color=='white'?'white':'black'} width={'24px'} height={'24px'}/>
        </div>
        <Nav color={color}/>
        <div className='hidden md:flex gap-[34px] font-Poppins text-[13px]'>
          <button className={`text-${color}`}>
            Login
          </button>
          <button className= {`bg-${color=="white"?"white":"purple"} text-${color=="white"?"black":"white"}  w-[82.5px] h-[38.47px] rounded-md color-[#460482]`}>
            Signup
          </button>
          </div>
    </div>
    </div>
  )
}


const NavItem = ({text, dropdown, onclick, link}) => {
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
        {dropdown?<img src={arrowdown} />: null}
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
    dropdown: true,
    modal: "about",
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
    dropdown: false,
    link: "/programs"
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
        {NavItemText.map(item => <NavItem {...item} key={item.text} onclick={() => handlefunction(item.dropdown, item.modal)}/>)}
    </div>
  )
}


export default Header