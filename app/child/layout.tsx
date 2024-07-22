import Header from "@/components/Header";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
     <Header />
     <main>{children}</main>
   </>
  );
}
