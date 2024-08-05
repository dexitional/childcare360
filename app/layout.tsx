import Provider from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Great_Vibes, Inter, Kalam, Open_Sans, Roboto_Mono, Shadows_Into_Light } from "next/font/google";
import "./globals.css";

const inter = Inter({
   subsets: ["latin"],
   display: 'swap',
   variable: '--font-inter' 
});

const shadowsIntoLight = Shadows_Into_Light({ 
    weight:"400",
    subsets: ["latin"],
    variable: '--font-shadows' 
});

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-opensans',
})

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

const greatVibes = Great_Vibes({
    subsets: ['latin'],
    weight:"400",
    variable: '--font-vibes',
})

const kalam = Kalam({
    subsets: ['latin'],
    weight:"400",
    variable: '--font-kalam',
})

export const metadata: Metadata = {
  title: "ChildCare360",
  description: "Childcare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} ${greatVibes.variable} ${openSans.variable} ${robotoMono.variable} ${inter.variable} ${shadowsIntoLight.variable}`}>
        <Provider> 
          {children}
        </Provider> 
        <Toaster />  
      </body>
    </html>
  );
}
