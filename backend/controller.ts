"use server"

import { revalidatePath } from "next/cache";

      export async function authenticate(req: Request,res: Response) {
        try {
        //    const { username, password }:{ username: string, password: string } = req.body;
        //    if(!username) throw new Error('No username provided!');
        //    if(!password) throw new Error('No password provided!');
           
        //    const isUser:any = await sso.user.findFirst({ where: { username, OR: [{ password: sha1(password) },{ unlockPin: password }]}, include: { group: { select: { title: true }}}});
        //    const isApplicant:any = await sso.voucher.findFirst({ where: { serial: username, pin: password }, include: { admission: true }});
        //    if (isUser) {
        //         const token = jwt.sign(userdata || {}, process.env.SECRET, { expiresIn: 60 * 60});
        //         // Send Response to Client
        //         return res.status(200).json({ success: true, data: userdata, token });
            
        //     } else if(isApplicant) {
        //          // Generate Session Token & 
        //         const token = jwt.sign(userdata || {}, process.env.SECRET, { expiresIn: 60 * 60});
        //         // Send Response to Client
        //         return res.status(200).json({ success: true, data: userdata, token });
            
        //     } else {
        //         return res.status(401).json({ success: false, message: "Invalid Credentials!" });
        //     }
        
        } catch (error: any) {
            console.log(error)
            // return res.status(401).json({ success: false, message: error.message });
        }
    }

    /* AUTHENTICATION MODELS */

    /* NURSERY MODELS */
    export async function fetcNurseries() {}
    export async function fetcNursery(id: string) {
        "use server"
        return null
    }
    export async function postNursery(formData: FormData) {
        console.log(formData);
        // formData.get("key")
        // Connect Prisma
        revalidatePath('/nurseries')
    }
    export async function updateNursery() {}
    export async function deleteNursery() {}


    /* STAFF MODELS */
    /* CHILD MODELS */
    /* PARENT MODELS */
    /* PAYMENT MODELS */
    /* MEDICAL RECORDS MODELS */
    /* ACTIVITY MODELS */
    /* ATTENDANCE MODELS */
    /* REPORT MODELS */

    /*
        <DropdownMenuItem><Link href="/child/4/payments">View Payments</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/child/4/attendance">View Attendance</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/child/4/activities">View Activities</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/child/4/medicals">View Medical Records</Link></DropdownMenuItem>
        // Fetch staff list
        // Fetch Parent list
        // Fetch child list by nurseryId
        // Fetch child list by parentId
    */


