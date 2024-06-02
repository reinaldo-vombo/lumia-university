import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumia - Eduction Admin Dashboard",
  description: "Lumia - Empawer your educatinal institute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background-main`}>
        <main className="h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}