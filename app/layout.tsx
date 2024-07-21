import type { Metadata } from "next";
import { Inter,Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import { Open_Sans, Roboto_Mono, Kalam, Great_Vibes } from 'next/font/google'

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
      <body className={`${kalam.variable} ${greatVibes.variable} ${openSans.variable} ${robotoMono.variable} ${inter.variable} ${shadowsIntoLight.variable}`}>{children}</body>
    </html>
  );
}
