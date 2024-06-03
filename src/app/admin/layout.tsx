import Navbar from "@/src/components/Navbar";
import Left from "@/src/components/sidear/Left";
import { PageProvider } from "@/src/providers/AppProvider";

export default function AdminLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <PageProvider>
         <Navbar />
         <main className="h-screen flex">
            <Left />
            <div className="bg-secondary-action rounded-lg w-full">
               {children}
            </div>
         </main>
      </PageProvider>
   );
}