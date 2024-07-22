import { DataTable } from "@/components/ui/datatable";
import PageTitle from "@/components/PageTitle";
import GoHome from "@/components/GoHome";
import Create from "@/components/Create";
import { parentColumns } from "@/components/columns/parentColumns";


export default function Home() {

  const parents:any = [
    { reference:'41329276', fname: 'Ebenezer Kwabena Blay', lname: 'Ackah', children:'2', gender:'Male', phone:'0277675089', email:'ebenezerkb@gmail.com', address: 'MIS Section, USA', action: 'test'},
  ] 

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
       {/* Staff - Child Module */}
       <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="PARENT MANAGEMENT">
           <Create /><GoHome />
         </PageTitle>
         <div className="px-6 py-6 flex flex-col space-y-4 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl">
            {/* <div className="px-4 py-2 w-full md:w-fit rounded bg-primary/90 text-primarybg text-[0.65rem] md:text-sm font-bold tracking-widest">EBENEZERZER KWABENA BLAY ACKAH</div> */}
            <div>
              <DataTable columns={parentColumns} data={parents} />
            </div>
         </div>
      </div>
    </main>
    
  );
}
