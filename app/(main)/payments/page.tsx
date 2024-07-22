import Image from "next/image";
import Bg from '../public/loginbg.svg'
import Header from "@/components/Header";
import DashMenuBox from "@/components/DashMenuBox";
import { FaChildren, FaHandsHoldingChild, FaPeopleGroup, FaPeopleRoof, FaRegMoneyBill1 } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import ChildMenuBox from "@/components/ChildMenuBox";
import { FaFemale, FaMale } from "react-icons/fa";
import { DataTable } from "@/components/ui/datatable";
import { paymentColumns } from "@/components/columns/paymentColumns";
import { MdHomeFilled, MdPersonAdd } from "react-icons/md";
import { activityColumns } from "@/components/columns/activityColumns";
import { observeColumns } from "@/components/columns/observeColumns";
import PageTitle from "@/components/PageTitle";
import GoHome from "@/components/GoHome";
import Create from "@/components/Create";
import { childColumns } from "@/components/columns/childColumns";
import { mainPaymentColumns } from "@/components/columns/mainPaymentColumns";


export default function Home() {

  
  const payments:any = [
    {
      id: "728ed52f",
      title: "Payment of Tuition Fees",
      reference: "GTS123654",
      child: 'Ebenezer Ackah',
      paidAt: "Aug 03, 2024",
      amount: 100,
    },
    {
      id: "728ed52f",
      title: "Payment of Feeding Fees",
      reference: "MS435566",
      child: 'Cynthia Gbedebu',
      paidAt: "Jul 21, 2024",
      amount: 230,
    },
    {
      id: "728ed52f",
      title: "Payment of PTA Fees",
      reference: "KJ3443434",
      child: 'Johnson Ackerson',
      paidAt: "Jul 23, 2024",
      amount: 500,
    }
  ]

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
      <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
          <PageTitle label="PAYMENT MANAGEMENT">
            <Create /><GoHome />
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