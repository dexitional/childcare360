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
import GoBack from "@/components/GoBack";


export default function Home() {

  const menus:any = [
     { title: 'Nursery Management', Icon: FaChildren, link:'/'},
     { title: 'Staff Management', Icon: FaPeopleGroup, link:'/'},
     { title: 'Child Management', Icon: FaHandsHoldingChild, link:'/'},
     { title: 'Payment Management', Icon: FaRegMoneyBill1, link:'/'},
     { title: 'Activity Management', Icon: GiTeacher, link:'/'},
     { title: 'Parent Management', Icon: FaPeopleRoof, link:'/'},
  ] 

  const children:any = [
    { title: 'Nursery Management', Icon: FaMale, link:'/'},
    { title: 'Staff Management', Icon: FaFemale, link:'/'},
    { title: 'Staff Management', Icon: FaFemale, link:'/'},
  ] 

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

  const activities:any = [
    {
      id: "1",
      period: "Jul 23, 2024 11:00",
      type: "Nap",
      note: "An hour sleeptime for all children.",
    },
    {
      id: "2",
      period: "Jul 23, 2024 13:00",
      type: "Lunch",
      note: "Potato and Gravery Stew was served for lunch",
    },
    {
      id: "3",
      period: "Jul 23, 2024 11:00",
      type: "Depart",
      note: "Child departs after close of activities.",
    },
  ]

  const observations:any = [
    {
      id: "1",
      period: "Jul 23, 2024 11:00",
      observation: "Sleeps during activity time",
      recommendation: "Should be allowed decent amount of sleep at home.",
    },
    {
      id: "1",
      period: "Jul 23, 2024 11:00",
      observation: "Bully",
      recommendation: "Must be counselled more by loved ones.",
    },
  ]

  const mchildren:any = [
    { reference:'41329276', fname: 'Ebenezer Kwabena Blay', lname: 'Ackah', nursery:'Creche', gender:'Male', birthDate:'Feb 28, 2019', age: '4', action: 'test'},
    { reference:'32323222', fname: 'Solomon', lname: 'Odame',nursery:'Nursery II', gender:'Male',  birthDate:'Feb 28, 2019', age: '3', action: 'test'},
    { reference:'41329276', fname: 'Sally Margaret', lname: 'Ackah',nursery:'Kindergaten I', gender:'Female', birthDate:'Feb 28, 2019', age: '4', action: 'test'},
  ] 

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
      <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="CHILD OBSERVATIONS">
           <GoBack />
         </PageTitle>
         <div className="px-10 py-6 flex flex-col space-y-4 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl">
            <div className="px-4 py-2 w-full md:w-fit rounded bg-primary/90 text-primarybg text-[0.65rem] md:text-sm font-bold tracking-widest">EBENEZERZER KWABENA BLAY ACKAH</div>
            <div>
              <DataTable columns={observeColumns} data={observations} />
            </div>
         </div>
      </div>
    </main>
  );
}
