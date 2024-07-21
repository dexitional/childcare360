import React from 'react'
import { MdOutlineChildCare } from "react-icons/md";

type Props = {}

function Header({}: Props) {
  return (
    <header className="z-10 w-full bg-white border-b-2 border-primarybg">
        <div className="md:mx-auto md:max-w-7xl min-h-24 flex items-center space-x-5">
            <div className="px-6 py-4 bg-secondary/30  rounded-full font-black font-kalam text-3xl tracking-widest flex items-center space-x-2">
               <MdOutlineChildCare className="h-12 w-12 text-primary"/>
               <h1>
                 <span className="text-primary">ChildCare</span>
                 <span className="text-[#F69320]">360<sup>&reg;</sup></span>
               </h1>
              
            </div>
            {/* <div className="font-black font-kalam text-5xl">ChildCare<span>360</span></div>
            <div className="font-black font-inter text-5xl">ChildCare360</div> */}
            <nav></nav>
        </div>
    </header>
  )
}

export default Header