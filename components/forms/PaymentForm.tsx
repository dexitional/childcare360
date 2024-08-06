
"use client"
import { postPayment } from "@/backend/controller";
import moment from "moment";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { SheetClose } from "../ui/sheet";
import { toast } from "../ui/use-toast";

type Props = {
    data?: any;
}
 

function PaymentForm({ data }: Props) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
  const [helper, setHelper]:any = useState({})
  
  const getData = async () => {
      const resp = await fetch(`/api/helpers?action=child`, { cache: 'no-store'});
      const child = await resp.json()
      if(child) setHelper({ child })
  }

  const action = async (formData: FormData) => {
    const resp = await postPayment(formData);
    if(resp){
       formRef.current?.reset(); 
       toast({
          title: "Record Saved!",
          className:"py-3 px-4 bg-green-100 text-green-800",
       })
    } else {
        toast({
           title: "Submission failed!",
           className:"py-3 px-4 bg-red-100 text-red-800",
        })
    }
  }

  useLayoutEffect(() => {
    getData();
  },[])

  return (
    <form 
        action={ action } 
        className="py-10 w-full min-h-fit grid gap-6 overflow-y-scroll"
        ref={formRef}
    >
        <label htmlFor="" className="grid gap-1.5">
          <span className="indent-4 font-bold text-base text-primary/80">Narrative</span>
          <input type="text" name="narrative" defaultValue={data?.narrative} placeholder="Narrative" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
          <span className="indent-4 font-bold text-base text-primary/80">Amount In USD </span>
          <input type="text" name="amount" defaultValue={data?.amount} placeholder="Amount" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
          <span className="indent-4 font-bold text-base text-primary/80">Payment Date </span>
          <input type="date" name="paidOn" defaultValue={moment(data?.paidOn).format("YYYY-MM-DD")} placeholder="Amount" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
       
        <label htmlFor="" className="grid gap-1.5">
          <span className="indent-4 font-bold text-base text-primary/80">Payment Reference </span>
          <input type="text" name="reference" defaultValue={data?.reference} placeholder="reference" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>

        <label htmlFor="" className="grid gap-1.5">
          <span className="indent-4 font-bold text-base text-primary/80">Payment Method</span>
          <select name="method" defaultValue={data?.method} className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40">
            <option value="CASH">CASH</option>
            <option value="CHECK">CHECK</option>
          </select>
        </label>
        <label htmlFor="" className=" w-full grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80 ">Name of Child</span>
            <select name="childId" defaultValue={data?.childId} className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40 w-full">
             <option>-- Choose Child --</option>
              { helper?.child?.map((row:any) => (
                <option key={row?.id} value={row?.id} selected={data?.childId == row?.id}>{row?.firstName} {row?.lastName} ({row?.reference}) - {row?.nursery?.name}</option>    
              ))}
            </select>
        </label>
       
        <input name="id" defaultValue={data?.id} type="hidden" />
        <SheetClose asChild>
        { pending 
          ? <button type="button" disabled className=" px-6 py-2 mx-auto w-3/5 bg-secondary/30 border-b-8 border-primary/20 rounded text-primary font-black text-lg">
                <span>SAVING ...</span>
            </button>  
          : <button type="submit" className="px-6 py-2 mx-auto w-3/5 bg-secondary/60 border-b-8 border-primary/20 rounded text-primary font-black text-lg">
                <span>SAVE</span>
            </button>
        }
        </SheetClose>
    </form>
  )
}

export default PaymentForm