import React from 'react'
import { MdOutlineAddCircle } from 'react-icons/md'

type Props = {
  title?: string
}

function Create({ title = 'ADD'}: Props) {
  return (
    <button className="pl-2 pr-3 py-0.5 w-fit flex items-center space-x-1 border-2 rounded-xl text-sm bg-primary border-primary/40 text-secondary font-medium font-inter ">
        <MdOutlineAddCircle className="h-4 w-4 md:h-6 md:w-6" />
        <span className="font-bold tracking-widest text-xs md:text-sm">{title}</span>
    </button> 
  )
}

export default Create