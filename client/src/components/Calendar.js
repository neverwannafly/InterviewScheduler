import React, { useEffect } from 'react';

import { Calendar as FullCalendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import { SERVER_PREFIX } from '../config';
import attachHeaders from '../utils/attachHeaders';

const Calendar = ({userData}) => {
  useEffect(() => {
    const calendarEl = document.getElementById('calendar-root');
    const baseUrl = `${SERVER_PREFIX}/api/interviews/fetch`;
    const calendar = new FullCalendar(calendarEl, {
      plugins: [timeGridPlugin],
      events: {
        url: attachHeaders(baseUrl, userData),
      },
      eventClick: async info => {
        const interviewId = info.event.id;
        const baseUrl = `${SERVER_PREFIX}/api/interviews/get/${interviewId}`;
        const response = await fetch(attachHeaders(baseUrl, userData), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const data = await response.json();
        console.log(data);
      }
    });
    calendar.render();
  });
  return (
    <div id="calendar-root">
      
    </div>
  )
}

export default Calendar;