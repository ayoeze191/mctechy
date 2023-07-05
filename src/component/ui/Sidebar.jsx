import React, { useContext } from 'react'
import Logo from "./../../assets/header/LogoPurple.png"
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../../App'

const Sidebar = ({ onClose }) => {
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

const Nav = () => {
  const {modalHandler, setModalContentAction} = useContext(ModalContext)

  const handlefunction = (dropdown, modalcontent) => {
    if(dropdown) {
      console.log("clicked") 
      setModalContentAction(modalcontent)
      modalHandler()
    }
  }

    return (
        <div className='flex gap-9 flex-col mb-4'>
                {NavItemText.map((item, index) => <NavItem {...item} onclick={() => handlefunction(item.dropdown, item.modal)} key={index}/> )}
        </div>
    )
}


const NavItem = ({text, dropdown, onclick, link, color}) => {
  const navigate = useNavigate()
  const {sidebarHandler} = useContext(ModalContext)
  const runFunction = () => {
    console.log("runn", link)
    if(link) {
      navigate(link)
      
    }
    else {
      // onclick()
      window.alert("no mobile view yet")
    }
    sidebarHandler()
  }  

    return (
      <div className=' font-MulishRegular font-normal leading-[17.58px] text-[13.5px] cursor-pointer' onClick={runFunction}>
        <p>{text}</p>
        <div >
        </div>
      </div>
    )
  }

export default Sidebar