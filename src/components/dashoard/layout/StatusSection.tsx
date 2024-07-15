import { content } from "@/src/constant/site-content"
import { ArrowUpNarrowWide } from "lucide-react"


const StatusSection = () => {
   return (
      <section className="grid grid-cols-12 gap-4">
         {content.status.map((item) => (
            <div className="col-span-3 p-3 space-y-3 rounded bg-background-main">
               <div className="flex items-center justify-between">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <span className="p-4 bg-indigo-800 rounded-xl"></span>
               </div>
               <div className="flex items-center justify-start gap-2">
                  <h3 className="font-bold text-xl">{item.data}%</h3>
               </div>
               <div className="flex items-center justify-start gap-2">
                  <ArrowUpNarrowWide className="text-primary-text text-green-400" />
                  <span className="text-green-400">{item.percemtage}</span>
                  semana passada
               </div>
            </div>
         ))}
      </section>
   )
}

export default StatusSection
