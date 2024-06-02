'use client'

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar = () => {
   const events = [
      { title: 'Meeting', start: new Date() }
   ]
   return (
      <div className="h-screen">
         <FullCalendar
            plugins={[dayGridPlugin]}
            initialView='dayGridMonth'
            weekends={false}
            events={events}
            eventContent={renderEventContent}
         />

      </div>
   )

}
function renderEventContent(eventInfo: any) {
   return (
      <>
         <b>{eventInfo.timeText}</b>
         <i>{eventInfo.event.title}</i>
      </>
   )
}

export default Calendar
