import Navbar from "@/src/components/Navbar";
import Left from "@/src/components/sidear/Left";

export default function AdminLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <>
         <body className="flex">
            <Left />
            <div className="w-full">
               <Navbar />
               <main>
                  {children}
               </main>
            </div>
         </body>
      </>
   );
}