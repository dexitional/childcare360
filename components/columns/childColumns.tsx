"use client"
 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import moment from 'moment'
import Link from "next/link"
import { HiDotsHorizontal } from "react-icons/hi"
import SheetModal from "../SheetModal"
import ChildForm from "../forms/ChildForm"
  
export type Child = {
  id: string
  title: string
  reference: string
  fname: string
  lname: string
  gender: string
  birthPlace: string
  nursery: string
  age: number
  action: any
  
}
   
export const childColumns: ColumnDef<Child>[] = [
  
  {
    accessorKey: "reference",
    header: "Child Ref",
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "nursery",
    header: "Class Group",
    cell: ({ row }) => {
      const data:any = row?.original;
      return (<div>{data?.nursery?.name }</div>)
    }
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "birthDate",
    header: "Date of Birth",
    cell: ({ row }:any) => {
      const dob =  moment(row?.original?.birthDate).format("MMMM DD, YYYY");
      const age =  moment().diff(moment(row?.original?.birthDate),'year');
      return <div>
          {dob}<br/>
          <span className="indent-2 text-sm font-bold tracking-wider italic">{age} yrs</span>
        </div>
    }
  },
  {
    accessorKey: "parent",
    header: "Parents",
    cell: ({ row }) => {
      const data:any = row?.original;
      if(!data?.parentChild.length) return(<div className="text-xs font-medium">-- Not Assigned --</div>)
        return (<div className="flex flex-col space-y-1 font-sans">{data?.parentChild?.map((r:any) => (<div key={r.id} className="text-primary font-medium">{r?.parent?.firstName} {r?.parent?.lastName}</div>))}</div>)
    }
  },
  {
    id:'343',
    //accessorKey: "action",
    header: () => <div className="text-right">&nbsp;</div>,
    cell: ({ row }) => {
       const id = row?.original?.id;
     
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-2 py-0 rounded border-2 border-primary/40 text-right font-medium">
                <HiDotsHorizontal className="h-6 w-6 text-primary/60" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-semibold text-primary/80 tracking-wide">
            <DropdownMenuSeparator />
            <SheetModal title="Edit Child" Trigger={<button className={`px-2 text-sm`}>Edit Record</button>}><ChildForm data={row?.original}/></SheetModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href={`/child/${id}/payments`}>View Payments</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href={`/child/${id}/attendance`}>View Attendance</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href={`/child/${id}/activities`}>View Activities</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href={`/child/${id}/medicals`}>View Medical Records</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]