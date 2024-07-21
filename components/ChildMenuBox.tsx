import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    title: string;
    Icon: IconType;
    link: string;
}

function ChildMenuBox({ title, Icon, link }: Props) {
  return (
    <div className="py-6 px-6 border-8 transition-all hover:border-primary/30 border-primary/10 rounded-2xl flex flex-col items-center space-y-10 bg-primarybg">
        <div className="z-10 w-16 h-14 md:w-40 md:h-28 bg-primarybg border rounded-xl shadow-xl flex items-center justify-center">
           { Icon && <Icon className="h-7 w-7 md:h-14 md:w-14 text-primary/70"/> }
        </div>
        <div className="px-4 py-3 rounded-lg flex flex-col items-center justify-center text-center bg-white">
            <span className="font-semibold text-primary tracking-wide">Ebenezer Kwabena Blay Ackah</span>
            <span className="font-semibold italic tracking-wider text-[#f69320]">Kingergaten 2</span>
        </div>
        <div className="px-2 py-3 rounded-xl flex space-x-3 bg-white ">
            <div className="z-1 px-3 py-1 md:py-1 w-full shadow shadow-primary/30 rounded-full bg-secondary/40 text-primary/70 text-sm md:text-sm font-bold tracking-wider">Activities</div>
            <div className="z-1 px-3 py-1 md:py-1 w-full shadow shadow-primary/30 rounded-full bg-secondary/40 text-primary/70 text-sm md:text-sm font-bold tracking-wider">Payments</div>
            <div className="z-1 px-3 py-1 md:py-1 w-full shadow shadow-primary/30 rounded-full bg-secondary/40 text-primary/70 text-sm md:text-sm font-bold tracking-wider">Suggestions</div>
        </div>
    </div>
  )
}

export default ChildMenuBox