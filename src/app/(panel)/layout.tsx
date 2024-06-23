import Navbar from "@/src/components/dashoard/Navbar";
import Left from "@/src/components/sidear/Left";
import { PageProvider } from "@/src/providers/AppProvider";

export default function AdminLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <PageProvider>
         <div className="h-screen flex">
            <Left />
            <div className="bg-secondary-action rounded-lg w-full">
               <Navbar />
               {children}
            </div>
         </div>
      </PageProvider>
   );
}