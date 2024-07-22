"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoChevronBackCircle } from 'react-icons/io5';
import { MdHomeFilled } from 'react-icons/md'

type Props = {
    link?: string;
}

function GoBack({ link = '/dash' }: Props) {
  const router = useRouter()
  return (
    <button onClick={() => router.back()} className="px-4 py-0.5 w-fit flex items-center space-x-2 border-2 rounded-xl text-sm bg-primary border-primary/40 text-secondary font-medium font-inter ">
       <IoChevronBackCircle className="h-4 w-4 md:h-6 md:w-6" />
    </button>
  )
}

export default GoBack