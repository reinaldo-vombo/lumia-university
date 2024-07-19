'use client'
import { useState } from 'react';
import { Calendar } from '../ui/calendar'
import { DayPickerProps } from 'react-day-picker';

const SigleCalendar = () => {
   const [date, setDate] = useState<Date | undefined>(new Date())
   const [selectedDate, setSelectedDate] = useState<Date | undefined>();
   const modifiers: DayPickerProps["modifiers"] = {};
   if (selectedDate) {
      modifiers.selected = selectedDate;
   }

   return (
      <Calendar
         modifiers={modifiers}
         mode="single"
         selected={date}
         onSelect={setDate}
         className="rounded-md border"
         onDayClick={(day, modifiers) => {
            if (modifiers.selected) {
               setSelectedDate(undefined);
            } else {
               setSelectedDate(day);
            }
         }}
         footer={selectedDate && `You selected ${selectedDate.toDateString()}`}
      />
   )
}

export default SigleCalendar
