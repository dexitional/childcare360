import Image from "next/image";
import Bg from '../public/loginbg.svg'
import Header from "@/components/Header";


export default function Home() {
  return (
    <main className="h-full bg-primarybg/70 flex flex-col">
      <div className="py-10 mx-auto w-full max-w-7xl min-h-screen flex flex-col space-y-20">
         <h1 className="text-3xl text-primary font-inter">DashBoard Page</h1>
         <div className="grid grid-cols-4">
            <div>
                <span>STAFF MANAGEMER</span>
            </div>
         </div>
      </div>
      
    </main>
  );
}
