import Breadcumbe from "@/src/components/dashoard/Breadcumbe";
import ChartsSection from "@/src/components/dashoard/layout/ChartsSection";
import StatusSection from "@/src/components/dashoard/layout/StatusSection";
import TableSection from "@/src/components/dashoard/layout/TableSection";

export default function AdminPage() {
   return (
      <div className="space-y-6">
         <Breadcumbe mainRoute="Overview" secondaryRoute="Dashboard" subRoute="Admin" />
         <StatusSection />
         <ChartsSection />
         <TableSection />
      </div>
   )
}
