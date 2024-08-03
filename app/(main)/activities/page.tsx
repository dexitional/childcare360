import { fetcActivities } from "@/backend/controller";
import { mainActivityColumns } from "@/components/columns/mainActivityColumns";
import Create from "@/components/Create";
import ActivityForm from "@/components/forms/ActivityForm";
import GoHome from "@/components/GoHome";
import PageTitle from "@/components/PageTitle";
import SheetModal from "@/components/SheetModal";
import { DataTable } from "@/components/ui/datatable";

async function getData(){
  const data = await fetcActivities() ?? [];
  return data;
}

export default async function Home() {
  
  const activities:any = await getData(); 

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
       {/* Staff - Child Module */}
       <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="ACITIVITIES MANAGEMENT">
           <SheetModal title="Add Activity" Trigger={<Create />}><ActivityForm /></SheetModal>
           <GoHome />
        </PageTitle>
         <div className="px-6 py-6 flex flex-col space-y-4 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl">
            {/* <div className="px-4 py-2 w-full md:w-fit rounded bg-primary/90 text-primarybg text-[0.65rem] md:text-sm font-bold tracking-widest">EBENEZERZER KWABENA BLAY ACKAH</div> */}
            <div>
              <DataTable columns={mainActivityColumns} data={activities} />
            </div>
         </div>
      </div>
    </main>
    
  );
}
