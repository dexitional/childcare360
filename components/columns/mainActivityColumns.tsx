"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { HiDotsHorizontal } from "react-icons/hi"
    
export type Activity = {
  id: string
  period: string
  type: string
  note: string
 }
   
export const mainActivityColumns: ColumnDef<Activity>[] = [
  {
    accessorKey: "child",
    header: "Child Name",
  },
  {
    accessorKey: "period",
    header: "Activity Period",
  },
  {
    accessorKey: "type",
    header: "Activity Type",
  },
  {
    accessorKey: "note",
    header: "Activity Remarks",
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
            <DropdownMenuItem><Link href="/">Edit Payment</Link></DropdownMenuItem>
            <DropdownMenuItem><Link href="/">Delete Payment</Link></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]