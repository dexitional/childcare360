import { fetcClassroom } from "@/backend/controller";
import { AttendanceChart } from "@/components/AttendanceChart";
import ClassMenuBox from "@/components/ClassMenuBox";
import { ClassSizeChart } from "@/components/ClassSizeChart";
import ActivityForm from "@/components/forms/ActivityForm";
import AttendanceForm from "@/components/forms/AttendanceForm";
import PageTitle from "@/components/PageTitle";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { FaChildren, FaPeopleGroup } from "react-icons/fa6";

async function getData(id:string){
  const data = await fetcClassroom(id) ?? [];
  console.log(data)
  return { data };
}


export default async function Home() {
  const session:any = await getServerSession(authOptions);
  const { user } = session;
  const { data }:any = await getData(user?.sub);

  const cmenus:any = [
    { title: 'Record Attendance', Icon: FaChildren, Intent: AttendanceForm, modal: true},
    //{ title: 'View Attendance', Icon: FaHandsHoldingChild, Intent:'/child', modal: false},
    { title: 'Record Activity', Icon: FaPeopleGroup, Intent: ActivityForm, modal: true},
    //{ title: 'View Activities', Icon: FaHandsHoldingChild, Intent:'/child', modal: false},
  ] 

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
      {/* Classroom Dashboard */}
      <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label={`${data?.staff?.nursery?.name} CLASSROOM`} />
         <div className="grid grid-cols-1 gap-4">
           <div className="col-span-2 p-6 md:h-fit bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
               <AttendanceChart data={data?.week} />  
               <ClassSizeChart count={data?.daily} />  
               <div className="p-6 md:h-fit bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-4">
                  { cmenus?.map((r:any) => (<ClassMenuBox key={r} Icon={r?.Icon} title={r?.title} Intent={r?.Intent} modal={r?.modal} />))}
              </div>
            
               {/* <AttendanceChart />   */}
            </div>
         </div>
      </div>
    </main>
  );
}
