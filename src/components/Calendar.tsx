'use client'

import clsx from "clsx";
import {
   addDays,
   eachDayOfInterval,
   endOfMonth,
   format,
   getDay,
   isToday,
   startOfMonth,
   subDays,
} from "date-fns";
import { useMemo, useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Event {
   date: Date;
   title: string;
}

interface EventCalendarProps {
   events: Event[];
}

const Calendar = () => {
   const [showEvent, setShowEvent] = useState<Event | []>([]);
   const events = [
      { date: subDays(new Date(), 6), title: "Post video" },
      { date: subDays(new Date(), 1), title: "Edit video" },
      { date: addDays(new Date(), 3), title: "Code" },
   ]
   const currentDate = new Date();
   const firstDayOfMonth = startOfMonth(currentDate);
   const lastDayOfMonth = endOfMonth(currentDate);

   const daysInMonth = eachDayOfInterval({
      start: firstDayOfMonth,
      end: lastDayOfMonth,
   });

   const startingDayIndex = getDay(firstDayOfMonth);

   const eventsByDate = useMemo(() => {
      return events.reduce((acc: { [key: string]: Event[] }, event) => {
         const dateKey = format(event.date, "yyyy-MM-dd");
         if (!acc[dateKey]) {
            acc[dateKey] = [];
         }
         acc[dateKey].push(event);
         return acc;
      }, {});
   }, [events]);

   const creatEvent = () => {
      alert('cria evento')
   }
   const showEventPrewie = (event: Event) => {
      setShowEvent(event)
   }


   return (
      <div className="container mx-auto p-4 h-screen">
         <div className="mb-4">
            <h2 className="text-center">{format(currentDate, "MMMM yyyy")}</h2>
         </div>
         <div className="grid grid-cols-7 gap-2">
            {WEEKDAYS.map((day) => {
               return (
                  <div key={day} className="font-bold text-center">
                     {day}
                  </div>
               );
            })}
            {Array.from({ length: startingDayIndex }).map((_, index) => {
               return (
                  <div
                     key={`empty-${index}`}
                     className="border rounded-md p-2 text-center"
                  />
               );
            })}
            {daysInMonth.map((day, index) => {
               const dateKey = format(day, "yyyy-MM-dd");
               const todaysEvents = eventsByDate[dateKey] || [];
               return (
                  <div
                     key={index}
                     onClick={creatEvent}
                     className={clsx("border-slate-600 border cursor-pointer dark:border-gray-900 rounded-md p-2 text-center", {
                        "bg-indigo-500": isToday(day),
                        "text-gray-900": isToday(day),
                     })}
                  >
                     {format(day, "d")}
                     {todaysEvents.map((event) => {
                        return (
                           <div
                              key={event.title}
                              onClick={() => showEventPrewie(event)}
                              className="bg-green-500 rounded-md text-gray-900 cursor-pointer"
                           >
                              {event.title}
                           </div>
                        );
                     })}
                  </div>
               );
            })}
         </div>
      </div>
   );

}

export default Calendar
