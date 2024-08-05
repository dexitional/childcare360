import Header from "@/components/Header";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


const session:any = await getServerSession(authOptions)
if(!session) redirect('/')

  return (
   <>
     <Header />
     <main>{children}</main>
   </>
  );
}
