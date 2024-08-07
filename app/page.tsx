"use client"
import Header from "@/components/Header";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import Bg from '../public/loginbg.svg';

export default function Home() {
  const router = useRouter();
  const [form,setForm ]:any = useState();
  const [ loading, setLoading ] = useState(false);
  const [ msg, setMsg ] = useState(null);


  const onChange = (e:any) => setForm({ ...form, [e.target.name]: e.target.value })
  
  const submitLogin:any = async (e:any) => {
    e.preventDefault();
    try {
      setLoading(true)
      const resp:any = await signIn('credentials', { redirect: false, callbackUrl: `/dash`, username: form?.username?.trim(), password: form?.password?.trim() })
      if(resp?.ok){
        router.push(resp?.url); 
        //window.location.href=resp?.url
        setLoading(false);
      } else {
        toast({
          position:"top",
          title: "INVALID CREDENTIALS!",
          className: "py-3 bg-red-500 text-white text-3xl font-black tracking-wide"
        })
        setLoading(false);
        
      }
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }
  
  return (
    <main className="flex min-h-screen flex-col">
        <Header />
        <div className={`relative w-full md:h-[50rem] bg-primarybg  rounded-bl-[95%]`}>
            <Image src={Bg} alt="Login" priority className="z-1 absolute right-0 top-64 md:-top-10" width={1000} height={1000} /> 
            <div className="mt-20  md:py-20 md:mx-auto md:max-w-7xl rounded-xl grid md:grid-cols-3">
                <div></div>
                <div></div>
                <div className="z-10 h-64 bg-secondary/20 border-8 border-secondary rounded-tr-3xl rounded-bl-3xl shadow-xl flex items-center justify-center">
                    <form method="post" onSubmit={submitLogin} className="p-6 w-full bg-[#BCE3BA] font-roboto rounded-xl flex flex-col space-y-3">
                      <label htmlFor="" className="flex flex-col -space-y-1">
                         <span className="py-2 font-black font-kalam text-lg text-primary tracking-widest">USERNAME</span>
                         <input name="username" onChange={onChange} className="px-4 py-3 ring-4 ring-secondary placeholder:text-[#F69320] placeholder:text-sm placeholder:font-semibold placeholder:tracking-widest rounded-full" type="text" placeholder="USERNAME" />
                      </label>
                      <label htmlFor="" className="flex flex-col -space-y-1">
                         <span className="py-2 font-black font-kalam text-lg text-primary tracking-widest">PASSWORD</span>
                         <input name="password" onChange={onChange} className="px-4 py-3 ring-4 ring-secondary placeholder:text-[#F69320] placeholder:text-sm placeholder:font-semibold placeholder:tracking-widest rounded-full" type="text" placeholder="PASSWORD" />
                      </label>
                      <button type="submit" className="px-6 py-3 bg-primary border-4 border-secondary rounded-full text-secondary text-xl font-inter font-bold tracking-widest">
                        { !loading 
                          ? <span>SIGN IN</span>
                          : <div className="flex item-center justify-center space-x-3">
                              <BiLoaderCircle className="h-6 w-6 animate-spin" />
                              <span className="tracking-wide text-lg animate-pulse">Authenticating ...</span>
                            </div>
                        }
                      </button>
                    </form>
                </div>
            </div>
        </div>
        <footer></footer>
    </main>
  );
}
