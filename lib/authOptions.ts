import { authenticate } from "@/backend/controller";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions & any = {
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          try {
              const { username, password }: any = credentials;
              if(!username) throw new Error("Username empty!")
              if(!password) throw new Error("Password empty!")
              
              const resp = await authenticate(username,password);
              if(resp) return resp;
              else throw new Error("Invalid details");
             
          } catch(error){
             console.log(error)
             return null;
          }
         
        },
      }),
    ],
    callbacks: {
      async jwt({ token, user, profile, account }: any) {
        return { ...token };
      },
      async session({ session, token, user }: any) {
        session.user = { ...token };
        console.log(session)
        return session;
      },
    },
    pages:{
      signIn:'/',
    },
    
  };