import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    title: string;
    Icon: IconType;
    link: string;
}

function DashMenuBox({ title, Icon, link }: Props) {
  return (
    <Link href={link} className="flex items-center ">
        <div className="z-10 w-16 h-14 md:w-40 md:h-28 bg-primarybg border rounded-full shadow-xl flex items-center justify-center">
           { Icon && <Icon className="h-7 w-7 md:h-14 md:w-14 text-primary/70"/> }
        </div>
        <div className="z-1 -ml-4 pl-8 pr-4 py-1 md:py-4 h-8 md:h-14 w-full shadow shadow-primary/30 rounded-r-full bg-secondary/40 text-primary/70 text-sm md:text-lg font-bold tracking-wider">{title}</div>
    </Link>
  )
}

export default DashMenuBox