export default function StudentLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <body>{children}</body>
      </div>
   );
}