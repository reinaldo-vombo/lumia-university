'use client'

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useState } from "react";
import Image from "next/image";

const Calendar = () => {
   const [show, setShow] = useState(null)
   const events = [
      {
         title: 'Meeting',
         start: new Date(),
         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellendus nam magnam ratione sit? Laboriosam eos odit perspiciatis. Unde est harum laborum aut cum consequuntur magni temporibus voluptatum nam labore.'
      },
      { title: 'Event 2', date: '2024-07-21', classNames: ['text-emerald-200'] },
   ]

   const handleEventResize = (info: any) => {
      alert(`Event resized to end at ${info.event.end.toISOString()}`);
      // Update event in state or server
   };
   const [popoverVisible, setPopoverVisible] = useState(false);
   const [popoverContent, setPopoverContent] = useState({ timeText: '', title: '', });

   const handleEventClick = (clickInfo: any) => {

      const rect = clickInfo.el.getBoundingClientRect();
      setPopoverContent({
         timeText: clickInfo.event.startStr,
         title: clickInfo.event.title,
      });
      setPopoverVisible(true);
   };

   const closePopover = () => {
      setPopoverVisible(false);
   };


   return (
      <div className="relative">
         <FullCalendar
            contentHeight="auto"
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
            initialView='dayGridMonth'
            weekends={true}
            events={events}
            eventClick={handleEventClick}
            editable={true}
            eventResize={handleEventResize}
         />
         {popoverVisible && (
            <div className="bg-white fixed top-0 right-0 bottom-0 h-56 w-48">

               <button onClick={closePopover}>Close</button>
               <b>{popoverContent.timeText}</b>
               <i>{popoverContent.title}</i>
            </div>
         )}
      </div>
   )

}
function renderEventContent(eventInfo: any) {
   console.log(eventInfo);

   return (
      <div className="bg-white fixed text-black right-0 h-56 w-48">
         <b>{eventInfo.timeText}</b>
         <i>{eventInfo.event.title}</i>
      </div>
   )
}

export default Calendar
