import Image from "next/image";
import Bg from '../public/loginbg.svg'
import Header from "@/components/Header";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
        <Header />
        <div className={`relative w-full h-[50rem] bg-primarybg  rounded-bl-[95%]`}>
            <Image src={Bg} alt="Login" className="z-1 absolute right-0 top-40 sm:-top-10" width={1000} height={1000} /> 
            <div className="md:py-20 md:mx-auto md:max-w-7xl rounded-xl grid md:grid-cols-3">
                <div></div>
                <div></div>
                <div className="z-10 h-64 bg-secondary/20 border-8 border-secondary rounded-tr-3xl rounded-bl-3xl shadow-xl flex items-center justify-center">
                    <form action="" className="p-6 w-full bg-[#BCE3BA] font-roboto rounded-xl flex flex-col space-y-3">
                      <label htmlFor="" className="flex flex-col -space-y-1">
                         <span className="py-2 font-black font-kalam text-lg text-primary tracking-widest">USERNAME</span>
                         <input className="px-4 py-3 ring-4 ring-secondary placeholder:text-[#F69320] placeholder:text-sm placeholder:font-semibold placeholder:tracking-widest rounded-full" type="text" placeholder="USERNAME" />
                      </label>
                      <label htmlFor="" className="flex flex-col -space-y-1">
                         <span className="py-2 font-black font-kalam text-lg text-primary tracking-widest">PASSWORD</span>
                         <input className="px-4 py-3 ring-4 ring-secondary placeholder:text-[#F69320] placeholder:text-sm placeholder:font-semibold placeholder:tracking-widest rounded-full" type="text" placeholder="PASSWORD" />
                      </label>
                      <button className="px-6 py-3 bg-primary border-4 border-secondary rounded-full text-secondary text-xl font-inter font-bold tracking-widest">SIGN IN</button>
                    </form>
                </div>
            </div>
        </div>
        <footer></footer>
    </main>
  );
}
