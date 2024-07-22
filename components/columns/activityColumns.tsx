"use client"
 
import { ColumnDef } from "@tanstack/react-table"
  
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
  },
  {
    accessorKey: "type",
    header: "Activity Type",
  },
  {
    accessorKey: "note",
    header: "Activity Remarks",
  }
]