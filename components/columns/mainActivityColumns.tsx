"use client"
 
import { deleteActivity } from "@/backend/controller"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
import { HiDotsHorizontal } from "react-icons/hi"
import SheetModal from "../SheetModal"
import ActivityForm from "../forms/ActivityForm"
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
  username: string
  action: any
  
}
   
export const mainActivityColumns: ColumnDef<Child>[] = [
  
  {
    accessorKey: "child",
    header: "Child Name",
    cell: ({ row }) => {
      const data:any = row?.original;
      if(!data?.child) return(<div className="text-xs font-medium">-- Not Assigned --</div>)
      return (<div className="text-primary font-medium">{data?.child?.firstName} {data?.child?.lastName}</div>)
    }
  },
  {
    accessorKey: "activity",
    header: "Activity Category",
    cell: ({ row }) => {
      const data:any = row?.original;
      if(!data?.activityType) return(<div className="text-xs font-medium">-- Not Assigned --</div>)
      return (<div className="text-primary font-medium">{data?.activityType?.name}</div>)
    }
  },
  {
    accessorKey: "note",
    header: "Activity Note",
  },
  {
    accessorKey: "period",
    header: "Activity Period",
    cell: ({ row }:any) => {
      const dob =  moment(row?.original?.period).format("MMMM DD, YYYY hh:mm A");
      return <div>{dob}</div>
    }
  },
  {
    id:'343',
    //accessorKey: "action",
    header: () => <div className="text-right">&nbsp;</div>,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="px-2 py-0 rounded border-2 border-primary/40 text-right font-medium">
                <HiDotsHorizontal className="h-6 w-6 text-primary/60" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-semibold text-primary/80 tracking-wide">
            <DropdownMenuSeparator />
            <SheetModal title="Edit Activity" Trigger={<button className={`px-2 text-sm`}>Edit Record</button>}><ActivityForm data={row?.original}/></SheetModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <form action={async (formData:FormData) => {
                try {
                  const resp = await deleteActivity(formData);
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