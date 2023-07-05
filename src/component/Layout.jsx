import Header from "./Header"
import React, { useEffect, useState } from "react"
import Topbar from "./Topbar"
import ModalWrapper from "./Modal/ModalWrapper"
import AboutUsModal from "./Modal/AboutUsModal"
import { useContext } from "react"
import { ModalContext } from "../App"
import CoursesModal from "./Modal/CoursesModal"
import { Outlet } from "react-router-dom"
import Sidebar from "./ui/Sidebar"


const Layout = ({ children }) => {
    const {showModal, modalHandler, modalContent, sideBar, sidebarHandler} = useContext(ModalContext)

    useEffect(() => {

        const handleClickChange = (e) => {
            console.log("event listener")
            const clickedElemnt = e.target;
            const excludedElement = document.querySelector('.modalWrapper');
            console.log("event listener")
            if(!excludedElement.classList.contains(clickedElemnt)) {
                modalHandler()
            }
            }
        
        if(showModal) {
            document.addEventListener('click', handleClickChange);
        }
        return () => { 
        document.removeEventListener('click', handleClickChange);
        }
},[])



    return (    
        <div className="h-fit px-0">
            <Topbar />
            {sideBar && <Sidebar onClose={sidebarHandler}/>}
            <div>
            <Outlet />
            <ModalWrapper showWrapper={showModal}>
                { modalContent == "courses"?<CoursesModal />
                :modalContent == "about"?<AboutUsModal />:"empty"}
            </ModalWrapper>
            </div>
        </div>
    )
}

export default Layout