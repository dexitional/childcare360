"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment"
  
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
    cell: ({ row }) => {
      const data:any = row?.original;
      console.log(data)
      if(!data?.child) return(<div className="text-xs font-medium">-- Not Assigned --</div>)
      return (<div className="text-primary font-medium">{data?.child?.firstName} {data?.child?.lastName}</div>)
    }
  },
  {
    accessorKey: "paidOn",
    header: "Payment Date",
    cell: ({ row }:any) => {
      const dob =  moment(row?.original?.paidOn).format("MMMM DD, YYYY");
      return <div>{dob}</div>
    }
  },
  {
    accessorKey: "amount",
    header: "Payment Amount",
    cell: ({ row }:any) => {
      const value =  row.getValue("amount");
      return <div>USD {value}</div>
    }
  }
]