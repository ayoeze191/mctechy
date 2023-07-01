import Header from "./Header"
import React, { useEffect, useState } from "react"
import Topbar from "./Topbar"
import ModalWrapper from "./Modal/ModalWrapper"
import AboutUsModal from "./Modal/AboutUsModal"
import { useContext } from "react"
import { ModalContext } from "../App"
import CoursesModal from "./Modal/CoursesModal"


const Layout = ({ children }) => {
    const {showModal, modalHandler, modalContent} = useContext(ModalContext)
    
    useEffect(() => {
        const handleClickChange = (e) => {
            console.log("event listener")
            const clickedElemnt = e.target;
            const excludedElement = document.querySelector('.modalWrapper');
            console.log("event listener")
            if(!excludedElement.contains(clickedElemnt)) {
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
            <div>
            {children}
            <ModalWrapper showWrapper={showModal}>
                { modalContent == "courses"?<CoursesModal />
                :modalContent == "about"?<AboutUsModal />:"empty"}
            </ModalWrapper>
            </div>
        </div>
    )
}

export default Layout