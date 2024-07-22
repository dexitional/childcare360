"use client"
 
import { ColumnDef } from "@tanstack/react-table"
  
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
  },
  {
    accessorKey: "checkin",
    header: "Report Time",
  },
  {
    accessorKey: "checkout",
    header: "Depart Time",
  }
]