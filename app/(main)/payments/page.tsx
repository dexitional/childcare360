import { fetcPayments } from "@/backend/controller";
import { mainPaymentColumns } from "@/components/columns/mainPaymentColumns";
import Create from "@/components/Create";
import PaymentForm from "@/components/forms/PaymentForm";
import GoHome from "@/components/GoHome";
import PageTitle from "@/components/PageTitle";
import SheetModal from "@/components/SheetModal";
import { DataTable } from "@/components/ui/datatable";

async function getData(){
  const data = await fetcPayments() ?? [];
  return data;
}

export default async function Home() {

  const payments:any = await getData();
  
  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
      <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
          <PageTitle label="PAYMENT MANAGEMENT">
            <SheetModal title="Add Payment" Trigger={<Create />}><PaymentForm /></SheetModal>
            <GoHome />
         </PageTitle>
          <div className="px-6 py-6 flex flex-col space-y-4 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl">
            {/* <div className="px-4 py-2 w-full md:w-fit rounded bg-primary/90 text-primarybg text-[0.65rem] md:text-sm font-bold tracking-widest">EBENEZERZER KWABENA BLAY ACKAH</div> */}
            <div>
              <DataTable columns={mainPaymentColumns} data={payments} />
            </div>
          </div>
      </div>
    </main>
  );
}
