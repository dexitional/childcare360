import ChildMenuBox from "@/components/ChildMenuBox";
import DashMenuBox from "@/components/DashMenuBox";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaChildren, FaHandsHoldingChild, FaPeopleGroup, FaPeopleRoof, FaRegMoneyBill1 } from "react-icons/fa6";
import { GiMedicines, GiTeacher } from "react-icons/gi";
import { MdCategory } from "react-icons/md";
import { TbLogs } from "react-icons/tb";


export default function Home() {

  const menus:any = [
     { title: 'Nursery Management', Icon: FaChildren, link:'/nurseries'},
     { title: 'Staff Management', Icon: FaPeopleGroup, link:'/staff'},
     { title: 'Child Management', Icon: FaHandsHoldingChild, link:'/child'},
     { title: 'Payment Management', Icon: FaRegMoneyBill1, link:'/payments'},
     { title: 'Activity Management', Icon: GiTeacher, link:'/activities'},
     { title: 'Parent Management', Icon: FaPeopleRoof, link:'/parents'},
     { title: 'Medical Records', Icon: GiMedicines, link:'/medicals'},
     { title: 'Attendance Records', Icon: TbLogs, link:'/attendance'},
     { title: 'Activity Categories', Icon: MdCategory, link:'/categories'},
     
  ] 

  const children:any = [
    { title: 'Nursery Management', Icon: FaMale, link:'/'},
    { title: 'Staff Management', Icon: FaFemale, link:'/'},
    { title: 'Staff Management', Icon: FaFemale, link:'/'},
  ] 

 

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
      
      {/* Parent Dashboard */}
      <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
        <PageTitle label="PARENT DASHBOARD" />
        <div className="p-3 md:p-6 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            { children?.map((r:any) => (<ChildMenuBox key={r} Icon={r?.Icon} title={r?.title} link={r?.link} />))}
        </div>
      </div>

     {/* Staff Dashboard */}
     <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="STAFF DASHBOARD">
            <Link href="/classroom" className="px-4 py-1 w-fit border-2 rounded text-sm bg-primary border-primary/40 text-secondary font-semibold font-inter tracking-widest">Goto Classroom</Link>
         </PageTitle>
         <div className="p-6 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            { menus?.map((r:any) => (<DashMenuBox key={r} Icon={r?.Icon} title={r?.title} link={r?.link} />))}
         </div>
      </div>

    </main>
  );
}
