import React from 'react'
import { FooterNav } from '../Footer'


const navitems1 = [ 
    { 
    header: "Bootcamps",
     values: ["Frontend Development", "Backend Development", "Product Design", "Project Management", "Business Analysis"]
    },
    {
        header: "Certificate Courses",
        values: [
            "Frontend Development",
            "Backend Development",
            "Product Design",
            "Business Analysis",
            "Project Management"
        ]
    },

]

const FooterAboutDesktopView = () => {
  return (
    <div className='flex gap-[79px]'>
        {navitems1.map((item) => <FooterNav {...item} key={item}/>)}
        <div className='flex flex-col gap-[31px]'>
        {
            <FooterNav {...{header: "Resources",
                values: [
                    "Blog",
                    "Ebooks",
                    "FAQs",
                ]
            }}/>
        }

        {
           <FooterNav {...{
            header: "Policies",
            values: [
                "Terms and condition",
                "Privacy Policy",
                "Payment Policy",
            ]
        }}/> 
        }
        </div>
        <div className='flex flex-col gap-[31px]'>

        <div>
        {
            <FooterNav {...{
                header: "About us",
                values: [
                    "Our Story",
                    "Our Mission",
                    "Testimonials",
                ]
            }}/>
        }

        {
           <FooterNav {...{
            header: "Help",
            values: [
                "Courses",
                "Register",
                "About",
            ]
        }}/> 
        }
        
        </div>
        </div>
    </div>
  )
}

export default FooterAboutDesktopView