
"use client"
import { postNursery } from "@/backend/controller";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

type Props = {
    data?: any;
}
 

function NurseryForm({ data }: Props) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
 

  return (
    <form 
        action={ async (formData) => {
          await postNursery(formData);
          formRef.current?.reset();
        }} 
        className="py-10 w-full grid gap-6"
        ref={formRef}
    >
        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Title</span>
            <input type="text" name="name" defaultValue={data?.name} placeholder="Title" className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
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

export default NurseryForm