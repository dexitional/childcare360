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
import NurseryForm from "../forms/NurseryForm"
  
  
export type Nursery = {
  id: string
  title: string
  reference: string
  child: string
  paidAt: string
  amount: number
  
}
   
export const nurseryColumns: ColumnDef<Nursery>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "staff",
    header: "Assigned Staff",
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
            <DropdownMenuItem><Link href="/">Goto Classroom</Link></DropdownMenuItem>
            <DropdownMenuSeparator />
            <SheetModal title="Edit Nursery" Trigger={<button className={`px-2 text-sm`}>Edit Record</button>}><NurseryForm data={row}/></SheetModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href="/">Delete Record</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]