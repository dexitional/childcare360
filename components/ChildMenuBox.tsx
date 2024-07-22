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
    <div className="py-6 px-6 border-4 md:border-8 transition-all hover:border-primary/30 border-primary/10 rounded-2xl flex flex-col items-center space-y-10 bg-primarybg">
        <div className="z-10 w-16 h-14 md:w-40 md:h-28 bg-primarybg border rounded-xl shadow-xl flex items-center justify-center">
           { Icon && <Icon className="h-7 w-7 md:h-14 md:w-14 text-primary/70"/> }
        </div>
        <div className="px-4 py-3 rounded-lg flex flex-col items-center justify-center text-center bg-white">
            <span className="font-semibold text-sm md:text-base text-primary tracking-wide">Ebenezer Kwabena Blay Ackah</span>
            <span className="font-semibold text-xs md:text-sm italic tracking-wider text-[#f69320]">Kingergaten 2</span>
        </div>
        <div className="px-2 py-3 w-full rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 bg-white ">
            <Link href={`/child/4/activities`} className="z-1 px-3 py-1 md:py-1 w-full shadow shadow-primary/30 rounded-full bg-secondary/40 text-primary/70 text-sm md:text-sm text-center font-bold tracking-wider">Activities</Link>
            <Link href={`/child/4/payments`} className="z-1 px-3 py-1 md:py-1 w-full shadow shadow-primary/30 rounded-full bg-secondary/40 text-primary/70 text-sm md:text-sm text-center font-bold tracking-wider">Payments</Link>
            <Link href={`/child/4/attendance`} className="z-1 px-3 py-1 md:py-1 w-full shadow shadow-primary/30 rounded-full bg-secondary/40 text-primary/70 text-sm md:text-sm text-center font-bold tracking-wider">Attendance</Link>
            <Link href={`/child/4/observations`} className="z-1 px-3 py-1 md:py-1 w-full shadow shadow-primary/30 rounded-full bg-secondary/40 text-primary/70 text-sm md:text-sm text-center font-bold tracking-wider">Observations</Link>
        </div>
    </div>
  )
}

export default ChildMenuBox