
"use client"
import { postStaff } from "@/backend/controller";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { SheetClose } from "../ui/sheet";
import { toast } from "../ui/use-toast";

type Props = {
    data?: any;
}
 

function StaffForm({ data }: Props) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
  const [helper, setHelper]:any = useState({})
  
  const getData = async () => {
      const resp = await fetch(`/api/helpers?action=nursery`, { cache: 'no-store'});
      const nurseries = await resp.json()
      if(nurseries) setHelper({ nurseries })
  }

  const action = async (formData: FormData) => {
    const resp = await postStaff(formData);
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
        action={action} 
        className="py-10 w-full h-full grid gap-6 overflow-y-scroll"
        ref={formRef}
    >
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Surname</span>
            <input type="text" name="lastName" defaultValue={data?.lastName} placeholder="Surname" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Other name(s) </span>
            <input type="text" name="firstName" defaultValue={data?.firstName} placeholder="Other name(s)" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Staff Reference </span>
            <input type="text" name="reference" defaultValue={data?.reference} placeholder="Staff Reference" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Position </span>
            <input type="text" name="position" defaultValue={data?.position} placeholder="Staff Role or Position" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Gender</span>
            <select name="gender" defaultValue={data?.gender} className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40">
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
        </label>
        
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Address</span>
            <input type="text" name="address" defaultValue={data?.address} placeholder="Address" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Phone Number</span>
            <input type="tel" name="phone" defaultValue={data?.phone} placeholder="Phone Number" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Email address</span>
            <input type="email" name="email" defaultValue={data?.email} placeholder="Email address" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Assign Group</span>
            <select name="nurseryId" defaultValue={data?.nurseryId} className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40">
              { helper?.nurseries?.map((row:any) => (
                <option key={row?.id} value={row?.id} selected={data?.nurseryId == row?.id}>{row?.name}</option>    
              ))}
                
            </select>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Set Password</span>
            <input type="password" name="password" defaultValue={data?.password} placeholder="Password" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
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

export default StaffForm