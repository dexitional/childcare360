import { fetcDashboard } from "@/backend/controller";
import { AttendanceChart } from "@/components/AttendanceChart";
import ChildMenuBox from "@/components/ChildMenuBox";
import ClassMenuBox from "@/components/ClassMenuBox";
import { ClassSizeChart } from "@/components/ClassSizeChart";
import DashMenuBox from "@/components/DashMenuBox";
import ActivityForm from "@/components/forms/ActivityForm";
import AttendanceForm from "@/components/forms/AttendanceForm";
import PageTitle from "@/components/PageTitle";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaChildren, FaHandsHoldingChild, FaPeopleGroup, FaPeopleRoof, FaRegMoneyBill1 } from "react-icons/fa6";
import { GiMedicines, GiTeacher } from "react-icons/gi";
import { MdCategory } from "react-icons/md";
import { TbLogs } from "react-icons/tb";

async function getData(id:string){
  const data = await fetcDashboard(id) ?? [];
  return { data };
}

export default async function Home() {
  const session:any = await getServerSession(authOptions);
  const { user } = session;
  const { data }:any = await getData(user?.sub);
 
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

  const cmenus:any = [
    { title: 'Record Attendance', Icon: FaChildren, Intent: AttendanceForm, modal: true},
    //{ title: 'View Attendance', Icon: FaHandsHoldingChild, Intent:'/child', modal: false},
    { title: 'Record Activity', Icon: FaPeopleGroup, Intent: ActivityForm, modal: true},
    //{ title: 'View Activities', Icon: FaHandsHoldingChild, Intent:'/child', modal: false},
  ] 

 

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
      
      {/* Parent Dashboard */}
      { user?.picture == 'parent' &&
      <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
        <PageTitle label="PARENT DASHBOARD" />
        <div className="p-3 md:p-6 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            { data?.child?.map((r:any) => (<ChildMenuBox key={r} data={r} />))}
        </div>
      </div>
      }

     {/* Staff Dashboard */}
     { user?.picture == 'admin' &&
     <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="STAFF DASHBOARD">
            <Link href="/classroom" className="px-4 py-1 w-fit border-2 rounded text-sm bg-primary border-primary/40 text-secondary font-semibold font-inter tracking-widest">Goto Classroom</Link>
         </PageTitle>
         <div className="p-6 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            { menus?.map((r:any) => (<DashMenuBox key={r} Icon={r?.Icon} title={r?.title} link={r?.link} />))}
         </div>
      </div>
     }

     {/* Classroom Dashboard */}
     { user?.picture == 'tutor' &&
     <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label={`${data?.staff?.nursery?.name} CLASSROOM`} />
         <div className="grid grid-cols-1 gap-4">
            <div className="col-span-2 p-6 md:h-fit bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
                { cmenus?.map((r:any) => (<ClassMenuBox key={r} Icon={r?.Icon} title={r?.title} Intent={r?.Intent} modal={r?.modal} />))}
            </div>
            <div className="col-span-2 p-6 md:h-fit bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
               <AttendanceChart data={data?.week} />  
               <ClassSizeChart count={data?.daily} /> 
               {/* <AttendanceChart />   */}
            </div>
         </div>
      </div>
      }

    </main>
  );
}
