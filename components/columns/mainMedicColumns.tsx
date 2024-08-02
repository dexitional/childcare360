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
import MedicalForm from "../forms/MedicalForm"
  
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
   
export const mainMedicColumns: ColumnDef<Child>[] = [
  
  {
    accessorKey: "child",
    header: "Child Name",
  },
  {
    accessorKey: "allergies",
    header: "Allergies",
  },
  {
    accessorKey: "medications",
    header: "Medications",
  },
  {
    accessorKey: "specialNeeds",
    header: "Special Needs",
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
            <SheetModal title="Edit Medical Record" Trigger={<button className={`px-2 text-sm`}>Edit Record</button>}><MedicalForm data={row}/></SheetModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href="/medicals/4/delete">Delete Record</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
  
]