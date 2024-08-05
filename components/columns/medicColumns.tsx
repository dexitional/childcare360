"use client"
 
import { deleteMedical } from "@/backend/controller"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { HiDotsHorizontal } from "react-icons/hi"
import SheetModal from "../SheetModal"
import MedicalForm from "../forms/MedicalForm"
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
   
export const medicColumns: ColumnDef<Child>[] = [
  
  
  {
    accessorKey: "allergies",
    header: "Allergies",
  },
  {
    accessorKey: "medication",
    header: "Medications",
  },
  {
    accessorKey: "specialNeeds",
    header: "Special Needs",
  }
  
]