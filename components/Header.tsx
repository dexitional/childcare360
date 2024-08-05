
"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { MdOutlineChildCare, MdPersonPin } from "react-icons/md";

type Props = {}

function Header({}: Props) {
  
  const { data: session }:any = useSession();
  const user:any = session?.user;

  return (
    <header className="z-10 w-full bg-white border-b-2 border-primarybg">
        <div className="px-4 md:mx-auto md:max-w-7xl min-h-14 md:min-h-24 flex items-center justify-between space-x-5">
            <div className="px-2 py-0.5 md:px-6 md:py-3 bg-secondary/30 shadow shadow-primary/40 rounded-full font-black font-kalam md:text-3xl tracking-widest flex items-center space-x-2">
               <MdOutlineChildCare className="h-8 w-8 md:h-12 md:w-12 text-primary"/>
               <h1>
                 <span className="text-primary">ChildCare</span>
                 <span className="text-[#F69320]">360<sup>&reg;</sup></span>
               </h1>
            </div>
             
            { session && session.user &&
                <div className="px-4 py-0.5 md:max-w-96 shadow rounded-full bg-primarybg flex items-center space-x-2">
                    <Link href="/dash" className="md:w-56 flex items-center">
                        <div className="p-1 w-fit">
                            <MdPersonPin className="h-6 w-6 md:h-10 md:w-10 text-primary"/>
                        </div>
                        <span className="hidden md:block w-52 text-primary font-inter font-medium truncate">{user?.name}</span>
                    </Link>
                    <button onClick={()=> signOut() } className="px-2 md:px-4 py-0.5 rounded md:border-b-4 border-primary/20 focus-visible:border-primary/40 bg-secondary text-xs md:text-lg text-primary md:font-bold">
                        Logout
                    </button>
                    {/* <Link href="/" className="px-2 md:px-4 py-0.5 rounded md:border-b-4 border-primary/20 focus-visible:border-primary/40 bg-secondary text-xs md:text-lg text-primary md:font-bold">
                        Logout
                    </Link> */}
                </div>
            }
        </div>
    </header>
  )
}

export default Header