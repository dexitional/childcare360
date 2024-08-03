"use server"

import { PrismaClient } from "@prisma/client";
import moment from "moment";
import { revalidatePath } from "next/cache";
const db = new PrismaClient();

      export async function authenticate(username:string,password:string) {
        try {
       
        
        } catch (error: any) {
            console.log(error)
        }
    }

    /* AUTHENTICATION MODELS */

    /* NURSERY MODELS */
    export async function fetcNurseries() {
        const resp = await db.nursery.findMany({ include: { staff: true } , orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcNursery(id: string) {
        const resp = await db.nursery.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postNursery(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        const { id } = data ?? null;
        delete data.id

        if(id){   // Update
            resp = await db.nursery.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.nursery.create({
              data
           });
        }
        
        revalidatePath('/nurseries')
        if(resp) return resp;
        return null;
    }

    export async function deleteNursery(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.nursery.delete({ where: { id } });
        
        revalidatePath('/nurseries')
        if(resp ) return resp;
        return null;
    }


    /* STAFF MODELS */
    export async function fetcStaffs() {
        const resp = await db.staff.findMany({ include: { nursery: true } , orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcStaff(id: string) {
        const resp = await db.staff.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postStaff(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        //data.nurseryId = "3404f444-f25d-4ec1-ae57-b7908d2093d3";
        const { id } = data ?? null;
        delete data.id

        if(id){   // Update
            resp = await db.staff.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.staff.create({
              data
           });
        }
        
        revalidatePath('/staff')
        if(resp) return resp;
        return null;
    }

    export async function deleteStaff(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.staff.delete({ where: { id } });
        
        revalidatePath('/staff')
        if(resp ) return resp;
        return null;
    }

    /* CHILD MODELS */
    export async function fetcChilds() {
        const resp = await db.child.findMany({ include: { nursery: true, parentChild: { select: { parent:true }}} , orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcChildByParent(id:string) {
        // @ts-ignore
        const resp = await db.child.findMany({ where:{ parentChild: { childId: id }}, include: { parentChild: { select: { parent:true }}} , orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcChildByClass(id: string) {
        const resp = await db.child.findMany({ where:{ nurseryId: id }, include: { parentChild: { select: { parent:true }}} , orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcChild(id: string) {
        const resp = await db.child.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postChild(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        const { id } = data ?? null;
        data.birthDate = moment(data.birthDate);
        delete data.id
        

        if(id){   // Update
            resp = await db.child.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.child.create({
              data
           });
        }
        
        revalidatePath('/child')
        if(resp) return resp;
        return null;
    }

    export async function deleteChild(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.child.delete({ where: { id } });
        
        revalidatePath('/child')
        if(resp ) return resp;
        return null;
    }

    /* PARENT MODELS */
    export async function fetcParents() {
        const resp = await db.parent.findMany({ include: { parentChild: true } , orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcParent(id: string) {
        const resp = await db.parent.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postParent(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        const { id } = data ?? null;
        delete data.id

        if(id){   // Update
            resp = await db.parent.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.parent.create({
              data
           });
        }
        
        revalidatePath('/parents')
        if(resp) return resp;
        return null;
    }

    export async function deleteParent(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.parent.delete({ where: { id } });
        
        revalidatePath('/parents')
        if(resp ) return resp;
        return null;
    }

    /* PAYMENT MODELS */
    export async function fetcPayments() {
        const resp = await db.payment.findMany({ include: { child: true }, orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcPayment(id: string) {
        const resp = await db.payment.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postPayment(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        const { id } = data ?? null;
        data.amount = parseFloat(data.amount);
        data.paidOn = moment(data.paidOn);
        delete data.id

        if(id){   // Update
            resp = await db.payment.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.payment.create({
              data
           });
        }
        
        revalidatePath('/payments')
        if(resp) return resp;
        return null;
    }

    export async function deletePayment(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.payment.delete({ where: { id } });
        
        revalidatePath('/payments')
        if(resp ) return resp;
        return null;
    }

    /* MEDICAL RECORDS MODELS */
    export async function fetcMedicals() {
        const resp = await db.medicalRecord.findMany({ orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcMedical(id: string) {
        const resp = await db.medicalRecord.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postMedical(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        const { id } = data ?? null;
        delete data.id

        if(id){   // Update
            resp = await db.medicalRecord.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.medicalRecord.create({
              data
           });
        }
        
        revalidatePath('/medicals')
        if(resp) return resp;
        return null;
    }

    export async function deleteMedical(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.medicalRecord.delete({ where: { id } });
        
        revalidatePath('/medicals')
        if(resp ) return resp;
        return null;
    }

    /* ACTIVITY CATEGORY MODELS */
    export async function fetcCategories() {
        const resp = await db.activityType.findMany({ include:{ nursery: true }, orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcCategory(id: string) {
        const resp = await db.activityType.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postCategory(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        const { id } = data ?? null;
        data.period = moment(data.period);
        delete data.id
        console.log(data)
        if(id){   // Update
            resp = await db.activityType.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.activityType.create({
              data
           });
        }
        revalidatePath('/categories')
        if(resp) return resp;
        return null;
    }

    export async function deleteCategory(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.activityType.delete({ where: { id } });
        
        revalidatePath('/categories')
        if(resp ) return resp;
        return null;
    }

    /* ACTIVITY MODELS */
    export async function fetcActivities() {
        const resp = await db.activity.findMany({ include:{ child: true, activityType: true }, orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcActivity(id: string) {
        const resp = await db.activity.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postActivity(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        const { id } = data ?? null;
        delete data.id

        if(id){   // Update
            resp = await db.activity.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.activity.create({
              data
           });
        }
        
        revalidatePath('/activities')
        if(resp) return resp;
        return null;
    }

    export async function deleteActivity(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.activity.delete({ where: { id } });
        
        revalidatePath('/activities')
        if(resp ) return resp;
        return null;
    }

    /* ATTENDANCE MODELS */
    export async function fetcAttendances() {
        const resp = await db.activity.findMany({ include:{ child: true, activityType: true }, orderBy: { createdAt: 'desc' }});
        if(resp.length) return resp;
        return null;
    }

    export async function fetcAttendance(id: string) {
        const resp = await db.attendance.findUnique({ where: { id } });
        if(resp ) return resp;
        return null;
    }

    export async function postAttendance(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        let resp;
        const { id } = data ?? null;
        delete data.id

        if(id){   // Update
            resp = await db.attendance.update({
                where: { id },
                data
             });
        } else {  // Create
           resp = await db.attendance.create({
              data
           });
        }
        
        revalidatePath('/attendance')
        if(resp) return resp;
        return null;
    }

    export async function deleteAttendance(formData: FormData) {
        let data:any = Object.fromEntries(formData);
        const { id } = data ?? null;
        const resp = await db.attendance.delete({ where: { id } });
        
        revalidatePath('/attendance')
        if(resp ) return resp;
        return null;
    }

    /* REPORT MODELS */
    

    /*
        <DropdownMenuItem><Link href="/child/4/payments">View Attendances</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/child/4/attendance">View Attendance</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/child/4/activities">View Activities</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/child/4/medicals">View Medical Records</Link></DropdownMenuItem>
        // Fetch staff list
        // Fetch Payment list
        // Fetch child list by nurseryId
        // Fetch child list by parentId
    */


