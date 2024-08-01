
"use client"
import { postNursery } from "@/backend/controller";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

type Props = {
    data?: any;
}
 

function StaffForm({ data }: Props) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
 

  return (
    <form 
        action={ async (formData) => {
          await postNursery(formData);
          formRef.current?.reset();
        }} 
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
            <input type="text" name="reference" defaultValue={data?.reference} placeholder="Staff Reference" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
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
                <option value="Creche">Creche I</option>
                <option value="Nursery">Nursery I</option>
            </select>
        </label>
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Set Password</span>
            <input type="password" name="password" defaultValue={data?.password} placeholder="Password" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>
       
        <input name="id" defaultValue={data?.id} type="hidden" />

        { pending 
          ? <button type="button" disabled className=" px-6 py-2 mx-auto w-3/5 bg-secondary/30 border-b-8 border-primary/20 rounded text-primary font-black text-lg">
                <span>SAVING ...</span>
            </button>  
          : <button type="submit" className="px-6 py-2 mx-auto w-3/5 bg-secondary/60 border-b-8 border-primary/20 rounded text-primary font-black text-lg">
                <span>SAVE</span>
            </button>
        }
    </form>
  )
}

export default StaffForm