import React from 'react'
import { MdOutlineChildCare, MdPersonPin } from "react-icons/md";

type Props = {}

function Header({}: Props) {
  return (
    <header className="z-10 w-full bg-white border-b-2 border-primarybg">
        <div className="md:mx-auto md:max-w-7xl min-h-24 flex items-center justify-between space-x-5">
            <div className="px-6 py-3 bg-secondary/30 shadow shadow-primary/40 rounded-full font-black font-kalam text-3xl tracking-widest flex items-center space-x-2">
               <MdOutlineChildCare className="h-12 w-12 text-primary"/>
               <h1>
                 <span className="text-primary">ChildCare</span>
                 <span className="text-[#F69320]">360<sup>&reg;</sup></span>
               </h1>
              
            </div>

            <div className="px-4 py-0.5 max-w-96 shadow rounded-full bg-primarybg flex items-center space-x-2">
                <div className="w-56 flex items-center">
                    <div className="p-1 w-fit">
                        <MdPersonPin className="h-10 w-10 text-primary"/>
                    </div>
                    <span className="w-52 text-primary font-inter font-medium truncate">Ebenezer Kwabena Blay Ackah  </span>
                </div>
                <button className="px-4 py-0.5 rounded border-b-4 border-primary/20 focus-visible:border-primary/40 bg-secondary text-primary font-bold">
                    Logout
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header