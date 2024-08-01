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
import ActivityTypeForm from "../forms/ActivityTypeForm"
    
export type MainActivity = {
  id: string
  activity: string
  class: string
}
   
export const mainActivityCatColumns: ColumnDef<MainActivity>[] = [
  {
    accessorKey: "activity",
    header: "Main Activity",
  },
  {
    accessorKey: "class",
    header: "Class Group",
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
            <SheetModal title="Edit Category" Trigger={<button className={`px-2 text-sm`}>Edit Record</button>}><ActivityTypeForm data={row}/></SheetModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href="/">Delete Record</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]