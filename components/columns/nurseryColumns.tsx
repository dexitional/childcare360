"use client"
 
import { deleteNursery } from "@/backend/controller"
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
import { toast } from "../ui/use-toast"
  
  
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
    cell: ({ row }) => {
      const data:any = row?.original;
      if(!data?.staff.length) return(<div className="text-xs font-medium">-- Not Assigned --</div>)
      return (<div className="flex flex-col space-y-1 font-sans">{data?.staff?.map((r:any) => (<div key={r.id} className="text-primary font-medium">{r?.firstName} {r?.lastName}</div>))}</div>)
    }
  },
  {
    id: Date.now().toFixed(1),
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
            <SheetModal title="Edit Nursery" Trigger={<button className={`px-2 text-sm`}>Edit Record</button>}><NurseryForm data={row?.original}/></SheetModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <form action={async (formData:FormData) => {
                  try {
                     const resp = await deleteNursery(formData);
                     if(resp) toast({ title: "Record Deleted!", className:"px-4 py-3 bg-green-100 text-green-800", position:"top" })
                  } catch (error) {
                    toast({ title: "Deletion failed!", variant: "destructive", className:"py-3 tracking-wider", position:"top" })
                  }
                  
              }}>
                 <input type="hidden" name="id" value={row?.id} />
               <button type="submit">Delete Record</button>   
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]