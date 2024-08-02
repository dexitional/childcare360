import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions & any = {
    providers: [
      CredentialsProvider({
        name: "login",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "Username" },
          password: { label: "Password", type: "password", placeholder: "Password" }
        },
        async authorize(credentials, req) {
          try {
              const { username, password }: any = credentials;
              if(!username) throw new Error("Username empty!")
              if(!password) throw new Error("Password empty!")
              
              // const resp = await getVoucher(serial,pin);
              const resp = { total: 0, documents: [] }
              if(resp.total > 0){
                 const user:any = resp?.documents[0];
                 return { ...user, gid: 1 }
              } else { 
                throw new Error("Invalid details");
              }
          } catch(error){
             console.log(error)
             return null;
          }
         
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      async jwt({ token, user, profile, account }: any) {
          return { ...token, ...user };
      },
      async session({ session, token, user }: any) {
          // Send properties to the client, like an access_token from a provider.
          session.user = { ...token };
          return session;
      },
    },
    pages:{
      signIn:'/',
      error: "/error",
    },
    
  };