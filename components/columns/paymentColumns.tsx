"use client"
 
import { ColumnDef } from "@tanstack/react-table"
  
export type Payment = {
  id: string
  title: string
  reference: string
  paidAt: string
  amount: number
  
}
   
export const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "title",
    header: "Payment Narrative",
  },
  {
    accessorKey: "reference",
    header: "Payment Reference",
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