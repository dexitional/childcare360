import Image from "next/image";
import Bg from '../public/loginbg.svg'
import Header from "@/components/Header";
import DashMenuBox from "@/components/DashMenuBox";
import { FaChildren } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";


export default function Home() {

  const menus:any = [
     { title: 'Nursery Management', Icon: FaChildren, link:'/'},
     { title: 'Staff Management', Icon: null, link:'/'},
     { title: 'Student Management', Icon: null, link:'/'},
     { title: 'Payment Management', Icon: null, link:'/'},
     { title: 'Activity Management', Icon: GiTeacher, link:'/'},
     { title: 'Parent Management', Icon: null, link:'/'},

  ] 

  return (
    <main className="h-full bg-primarybg/70 flex flex-col">
      <div className="py-10 mx-auto w-full max-w-7xl min-h-screen flex flex-col space-y-20">
         <h1 className="text-3xl text-primary font-inter">DashBoard Page</h1>
         <div className="p-6 bg-white rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            { menus?.map((r:any) => (<DashMenuBox Icon={r?.Icon} title={r?.title} link={r?.link} />))}
         </div>
      </div>
      
    </main>
  );
}
