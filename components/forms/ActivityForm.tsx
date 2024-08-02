
"use client"
import { postNursery } from "@/backend/controller";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

type Props = {
    data?: any;
}
 

function ActivityForm({ data }: Props) {
  const { pending } = useFormStatus();
  const formRef = useRef<HTMLFormElement>(null);
 

  return (
    <form 
        action={ async (formData) => {
          await postNursery(formData);
          formRef.current?.reset();
        }} 
        className="py-10 w-full min-h-fit grid gap-6 overflow-y-scroll"
        ref={formRef}
    >
        <label htmlFor="" className=" w-full grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80 ">Name of Child</span>
            <select name="nurseryId" defaultValue={data?.nurseryId} className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40 w-full">
                <option value="Creche">Miguel Kwekucher Blay Ackah (ID1002), CRECHE I</option>
                <option value="Creche">Sally Margaret (ID1002), NURSERY I</option>
            </select>
        </label>
        <label htmlFor="" className=" w-full grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80 ">Activity Type</span>
            <select name="activityTypeId" defaultValue={data?.activityTypeId} className="px-4 py-2 bg-[#FAF6F2] rounded-full text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40 w-full">
                <option value="NAP">NAP</option>
                <option value="MEAL">MEAL</option>
                <option value="MEDICATION">MEDICATION</option>
            </select>
        </label>

        <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Activity Period</span>
            <input name="note" type="datetime-local" defaultValue={data?.createdAt} placeholder="Activity Period" className="px-4 py-2 bg-[#FAF6F2] rounded-lg text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
        </label>

       <label htmlFor="" className="grid gap-1.5">
            <span className="indent-4 font-bold text-base text-primary/80">Activity Note </span>
            <textarea name="note" defaultValue={data?.note} placeholder="Activity Note" rows={6} className="px-4 py-2 bg-[#FAF6F2] rounded-lg text-primary shadow focus:outline-none focus:ring-4 focus:ring-secondary/40"/>
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

export default ActivityForm