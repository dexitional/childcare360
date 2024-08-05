"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
  
export type Activity = {
  id: string
  period: string
  type: string
  note: string
 }
   
export const activityColumns: ColumnDef<Activity>[] = [
  {
    accessorKey: "period",
    header: "Activity Period",
    cell: ({ row }:any) => {
      const dob =  moment(row?.original?.period).format("MMMM DD, YYYY hh:mm A");
      return <div>{dob}</div>
    }
  },
  {
    accessorKey: "type",
    header: "Activity Type",
    cell: ({ row }) => {
      const data:any = row?.original;
      if(!data?.activityType) return(<div className="text-xs font-medium">-- Not Assigned --</div>)
      return (<div className="text-primary font-medium">{data?.activityType?.name}</div>)
    }
  },
  {
    accessorKey: "note",
    header: "Activity Remarks",
  }
]