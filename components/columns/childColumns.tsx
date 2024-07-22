"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { HiDotsHorizontal } from "react-icons/hi"
  
export type Child = {
  id: string
  title: string
  reference: string
  fname: string
  lname: string
  gender: string
  birthPlace: string
  nursery: string
  age: number
  action: any
  
}
   
export const childColumns: ColumnDef<Child>[] = [
  {
    accessorKey: "reference",
    header: "Child Reference",
  },
  {
    accessorKey: "fname",
    header: "First Name",
  },
  {
    accessorKey: "lname",
    header: "Last Name",
  },
  {
    accessorKey: "nursery",
    header: "Class Group",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "birthDate",
    header: "Date of Birth",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    id:'343',
    //accessorKey: "action",
    header: () => <div className="text-right">&nbsp;</div>,
    cell: ({ row }) => {
      // const amount = parseFloat(row.getValue("amount"))
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(amount)
      
      /*
         View attentance
         View Payments
         View Activities
         View Medical Records
         Edit Child
      
      */
 
      return <button className="px-2 py-0 rounded border-2 border-primary/40 text-right font-medium">
          <HiDotsHorizontal className="h-6 w-6 text-primary/60" />
      </button>
    },
  },
  
]