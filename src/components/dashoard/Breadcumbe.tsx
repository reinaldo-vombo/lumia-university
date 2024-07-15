'use client'
import { ChevronRight } from "lucide-react"
import Link from "next/link"
type TBreadcrumbe = {
   mainRoute: string
   secondaryRoute: string
   subRoute: string
}

const Breadcumbe = ({ mainRoute, secondaryRoute, subRoute }: TBreadcrumbe) => {
   return (
      <div className="p-4 flex items-center justify-between">
         <div>
            <h2 className="text-xl font-semibold">{mainRoute}</h2>
         </div>
         <div className="flex items-center gap-3">
            <div className="flex items-center gap-4">
               <Link href={'#'} className="text-[#a7b2bd]">{secondaryRoute}</Link>
               <ChevronRight />
            </div>
            { }
            <div className="flex items-center gap-4">
               <Link href={'#'} className="text-[#a7b2bd]">{subRoute}</Link>
               <ChevronRight />
            </div>
            <div>
               <Link href={'#'}>{mainRoute}</Link>
            </div>
         </div>
      </div>
   )
}

export default Breadcumbe
