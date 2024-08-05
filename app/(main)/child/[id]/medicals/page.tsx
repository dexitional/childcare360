import { fetcChild, fetcMedicalByChild } from "@/backend/controller";
import { medicColumns } from "@/components/columns/medicColumns";
import GoBack from "@/components/GoBack";
import PageTitle from "@/components/PageTitle";
import { DataTable } from "@/components/ui/datatable";

async function getData(id: string){
  const medicals = await fetcMedicalByChild(id) ?? [];
  const child = await fetcChild(id) ?? [];
  return { medicals,child };
}

export default async function Home({ params }:{ params: { id: string }}) {
  const { medicals, child }:any = await getData(params?.id);
  
  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
      <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="CHILD MEDICAL RECORDS">
           <GoBack />
         </PageTitle>
         <div className="px-10 py-6 flex flex-col space-y-4 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl">
            <div className="px-4 py-2 w-full md:w-fit rounded bg-primary/90 text-primarybg text-[0.65rem] md:text-sm font-bold tracking-widest">{child?.firstName.toUpperCase()} {child?.lastName.toUpperCase()}</div>
            <div>
              <DataTable columns={medicColumns} data={medicals} />
            </div>
         </div>
      </div>
    </main>
  );
}
