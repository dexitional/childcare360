"use client"
 
import { ColumnDef } from "@tanstack/react-table"
  
export type Payment = {
  id: string
  title: string
  reference: string
  child: string
  paidAt: string
  amount: number
  
}
   
export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "narrative",
    header: "Payment Narrative",
  },
  {
    accessorKey: "reference",
    header: "Payment Reference",
  },
  {
    accessorKey: "child",
    header: "Child Name",
  },
  {
    accessorKey: "paidAt",
    header: "Payment Date",
  },
  {
    accessorKey: "amount",
    header: "Payment Amount",
  }
]