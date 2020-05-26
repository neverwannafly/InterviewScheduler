import React, { useEffect } from 'react';

import { Calendar as FullCalendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';

const Calendar = () => {
  useEffect(() => {
    
    const calendarEl = document.getElementById('calendar-root');
    const calendar = new FullCalendar(calendarEl, {
      plugins: [timeGridPlugin],
    });
    calendar.render();
  });
  return (
    <div id="calendar-root">
      
    </div>
  )
}

export default Calendar;