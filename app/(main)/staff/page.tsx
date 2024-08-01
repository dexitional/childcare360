import { staffColumns } from "@/components/columns/staffColumns";
import Create from "@/components/Create";
import StaffForm from "@/components/forms/StaffForm";
import GoHome from "@/components/GoHome";
import PageTitle from "@/components/PageTitle";
import SheetModal from "@/components/SheetModal";
import { DataTable } from "@/components/ui/datatable";
import { FaFemale, FaMale } from "react-icons/fa";
import { FaChildren, FaHandsHoldingChild, FaPeopleGroup, FaPeopleRoof, FaRegMoneyBill1 } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";


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

  const staff:any = [
    { reference:'41329276', fname: 'Ebenezer Kwabena Blay', lname: 'Ackah', position:'Tutor',class:'Nursery I', gender:'Male', phone:'0277675089', email:'ebenezerkb@gmail.com'},
    { reference:'1234567', fname: 'Adwoa', lname: 'Antwi', position:'Tutor',class:'Creche', gender:'Female', phone:'0277675089', email:'ebenezerkb@gmail.com'},
  ] 

  return (
    <main className="px-3 md:px-0 min-h-screen bg-primarybg/70 flex flex-col">
       <div className="py-4 md:py-10 md:mx-auto w-full md:max-w-7xl flex flex-col space-y-4 md:space-y-14">
         <PageTitle label="STAFF MANAGEMENT">
           <SheetModal title="Add Staff" Trigger={<Create />}><StaffForm /></SheetModal>
           <GoHome />
         </PageTitle>
         <div className="px-6 py-6 flex flex-col space-y-4 bg-white shadow-[0px_0px_8px_#ccc_inset] rounded-xl">
            <div>
              <DataTable columns={staffColumns} data={staff} />
            </div>
         </div>
      </div>
    </main>
  );
}
