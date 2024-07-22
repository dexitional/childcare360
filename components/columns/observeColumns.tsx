"use client"
 
import { ColumnDef } from "@tanstack/react-table"
  
export type Activity = {
  id: string
  period: string
  type: string
  note: string
 }
   
export const observeColumns: ColumnDef<Activity>[] = [
  {
    accessorKey: "period",
    header: "Period",
  },
  {
    accessorKey: "observation",
    header: "Observations",
  },
  {
    accessorKey: "recommendation",
    header: "Recommendations",
  }
]