import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <main className="h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
