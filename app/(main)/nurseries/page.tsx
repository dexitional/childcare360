import { fetcNurseries } from "@/backend/controller";
import { nurseryColumns } from "@/components/columns/nurseryColumns";
import Create from "@/components/Create";
import NurseryForm from "@/components/forms/NurseryForm";
import GoHome from "@/components/GoHome";
import PageTitle from "@/components/PageTitle";
import SheetModal from "@/components/SheetModal";
import { DataTable } from "@/components/ui/datatable";

async function getData(){
    const data = await fetcNurseries() ?? [];
    return data;
}

export default async function Home() {

  const nurseries:any = await getData();

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
      <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="NURSERY MANAGEMENT">
           <SheetModal title="Add Nursery" Trigger={<Create />}><NurseryForm /></SheetModal>
           <GoHome />
         </PageTitle>
         <div className="px-6 py-6 flex flex-col space-y-4 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl">
            <div>
              <DataTable columns={nurseryColumns} data={nurseries} />
            </div>
         </div>
      </div>
    </main>
  );
}
