import Link from 'next/link'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'

type Props = {
    link?: string;
}

function GoHome({ link = '/dash' }: Props) {
  return (
    <Link href={link} className="px-4 py-0.5 w-fit flex items-center space-x-2 border-2 rounded-xl text-sm bg-primary border-primary/40 text-secondary font-medium font-inter ">
       <MdHomeFilled className="h-4 w-4 md:h-6 md:w-6" />
    </Link>
  )
}

export default GoHome