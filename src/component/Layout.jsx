import Header from "./Header"
import React from "react"
import Topbar from "./Topbar"

const Layout = ({children }) => {
    return (    
        <div className="h-fit px-0">
            <Topbar />
            <div>
            {children}
            </div>
        </div>
    )
}

export default Layout