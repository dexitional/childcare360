"use client"
 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
import { HiDotsHorizontal } from "react-icons/hi"
import SheetModal from "../SheetModal"
import AttendanceForm from "../forms/AttendanceForm"
  
export type Child = {
  id: string
  title: string
  reference: string
  fname: string
  lname: string
  gender: string
  phone: string
  address: string
  username: string
  action: any
  
}
   
export const mainAttendColumns: ColumnDef<Child>[] = [
  
  {
    accessorKey: "child",
    header: "Child Name",
  },
  {
    accessorKey: "period",
    header: "Period",
  },
  {
    accessorKey: "checkin",
    header: "Time In",
  },
  {
    accessorKey: "checkout",
    header: "Time Out",
  },
  {
    id:'343',
    //accessorKey: "action",
    header: () => <div className="text-right">&nbsp;</div>,
    cell: ({ row }) => {
      // const id = parseFloat(row.getValue("id"))
     
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-2 py-0 rounded border-2 border-primary/40 text-right font-medium">
              <HiDotsHorizontal className="h-6 w-6 text-primary/60" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-semibold text-primary/80 tracking-wide">
            <DropdownMenuSeparator />
            <SheetModal title="Edit Attendance" Trigger={<button className={`px-2 text-sm`}>Edit Record</button>}><AttendanceForm data={row}/></SheetModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href="/attendance/4/delete">Delete Record</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]