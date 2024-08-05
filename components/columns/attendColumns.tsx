"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
  
export type Activity = {
  id: string
  period: string
  type: string
  note: string
 }
   
export const attendColumns: ColumnDef<Activity>[] = [
  {
    accessorKey: "period",
    header: "Period",
    cell: ({ row }:any) => {
      const dob =  moment(row?.original?.checkIn).format("dddd, MMMM DD, YYYY");
      return <div>{dob}</div>
    }
  },
  {
    accessorKey: "checkIn",
    header: "Report Time",
    cell: ({ row }:any) => {
      const dob =  moment(row?.original?.checkIn).format("hh:mm A");
      return <div>{dob}</div>
    }
  },
  {
    accessorKey: "checkOut",
    header: "Depart Time",
    cell: ({ row }:any) => {
      const dob =  moment(row?.original?.checkOut).format("hh:mm A");
      return <div>{dob}</div>
    }
  }
]