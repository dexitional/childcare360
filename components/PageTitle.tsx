import React from 'react'

type Props = {
    label: string;
    children?: React.ReactNode;
}

function PageTitle({ label,children }: Props) {
  return (
    <div className="px-4 md:px-0 flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0 text-center">
        <h1 className="px-3 md:px-6 py-1 w-full md:w-fit border-2 rounded-full text-xs md:text-lg bg-white border-primary/40 text-primary/40 font-semibold font-inter tracking-widest">{label}</h1>
        <div className="flex items-center justify-center space-x-3">
            {children}
        </div>
    </div>
  )
}

export default PageTitle