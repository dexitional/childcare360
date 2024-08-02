"use client"
 
import { deleteStaff } from "@/backend/controller"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { HiDotsHorizontal } from "react-icons/hi"
import SheetModal from "../SheetModal"
import StaffForm from "../forms/StaffForm"
import { toast } from "../ui/use-toast"
  
export type Child = {
  id: string
  title: string
  reference: string
  fname: string
  lname: string
  gender: string
  phone: string
  address: string
  class: string
  position: string
  action: any
  
}
   
export const staffColumns: ColumnDef<Child>[] = [
  
  {
    accessorKey: "reference",
    header: "Reference",
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
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "class",
    header: "Class Group",
    cell: ({ row }) => {
      const data:any = row?.original;
      return (<div>{data?.nursery?.name }</div>)
    }
  },
  {
    accessorKey: "position",
    header: "Position",
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
          <SheetModal title="Edit Staff" Trigger={<button className={`px-2 text-sm`}>Edit Record</button>}><StaffForm data={row?.original}/></SheetModal>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
              <form action={async (formData:FormData) => {
                  try {
                     const resp = await deleteStaff(formData);
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