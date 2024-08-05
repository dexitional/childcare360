import { fetcAttendances } from "@/backend/controller";
import { mainAttendColumns } from "@/components/columns/mainAttendColumns";
import Create from "@/components/Create";
import AttendanceForm from "@/components/forms/AttendanceForm";
import GoHome from "@/components/GoHome";
import PageTitle from "@/components/PageTitle";
import SheetModal from "@/components/SheetModal";
import { DataTable } from "@/components/ui/datatable";

async function getData(){
  const data = await fetcAttendances() ?? [];
  return data;
}
export default async function Home() {

  const attendance:any = await getData();


  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
       <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="ATTENDANCE RECORDS">
            <SheetModal title="Add Attendance" Trigger={<Create />}><AttendanceForm /></SheetModal>
            <GoHome />
         </PageTitle>
         <div className="px-6 py-6 flex flex-col space-y-4 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl">
            <div>
              <DataTable columns={mainAttendColumns} data={attendance} />
            </div>
         </div>
      </div>
    </main>
  );
}
