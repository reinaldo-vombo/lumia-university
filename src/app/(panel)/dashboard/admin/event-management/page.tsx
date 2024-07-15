import Calendar from '@/src/components/Calendar'
import Breadcumbe from '@/src/components/dashoard/Breadcumbe'

export default function EventManagemte() {
   return (
      <section className="space-y-6">
         <Breadcumbe mainRoute="Gestore de eventos" secondaryRoute="Dashboard" subRoute="Admin" />
         <Calendar />
      </section>
   )
}
