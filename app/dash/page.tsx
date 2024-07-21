import Image from "next/image";
import Bg from '../public/loginbg.svg'
import Header from "@/components/Header";
import DashMenuBox from "@/components/DashMenuBox";
import { FaChildren, FaHandsHoldingChild, FaPeopleGroup, FaPeopleRoof, FaRegMoneyBill1 } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import ChildMenuBox from "@/components/ChildMenuBox";


export default function Home() {

  const menus:any = [
     { title: 'Nursery Management', Icon: FaChildren, link:'/'},
     { title: 'Staff Management', Icon: FaPeopleGroup, link:'/'},
     { title: 'Student Management', Icon: FaHandsHoldingChild, link:'/'},
     { title: 'Payment Management', Icon: FaRegMoneyBill1, link:'/'},
     { title: 'Activity Management', Icon: GiTeacher, link:'/'},
     { title: 'Parent Management', Icon: FaPeopleRoof, link:'/'},

  ] 

  return (
    <main className="h-full bg-primarybg/70 flex flex-col justify-center">
      {/* Staff Dashboard */}
      <div className="py-10 mx-auto w-full max-w-7xl  flex flex-col space-y-14">
         <h1 className="px-6 py-1 w-fit border-2 rounded-full text-lg bg-white border-primary/40 text-primary/40 font-semibold font-inter tracking-widest">STAFF DASHBOARD</h1>
         <div className="p-6 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            { menus?.map((r:any) => (<DashMenuBox key={r} Icon={r?.Icon} title={r?.title} link={r?.link} />))}
         </div>
      </div>

      {/* Parent Dashboard */}
      <div className="py-10 mx-auto w-full max-w-7xl  flex flex-col space-y-14">
         <h1 className="px-6 py-1 w-fit border-2 rounded-full text-lg bg-white border-primary/40 text-primary/40 font-semibold font-inter tracking-widest">PARENT DASHBOARD</h1>
         <div className="p-6 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            { menus?.map((r:any) => (<ChildMenuBox key={r} Icon={r?.Icon} title={r?.title} link={r?.link} />))}
         </div>
      </div>
      
    </main>
  );
}
