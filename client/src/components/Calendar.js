import React, { useEffect, useState } from 'react';

import { Calendar as FullCalendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';

import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';
import { SERVER_PREFIX } from '../config';
import attachHeaders from '../utils/attachHeaders';
import ViewInterview from './ViewInterview';
import {Modal} from 'react-bootstrap';

const Calendar = ({userData}) => {
  const [show, setShow] = useState(false);
  const [interview, setInterview] = useState({});

  const handleModalClose = () => setShow(false);

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
        setInterview(data); setShow(true);
        console.log(data);
      }
    });
    calendar.render();
  }, [userData]);
  return (
    <div className="component">
      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewInterview interview={interview} />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary btn-inline" onClick={handleModalClose}>
            Close
          </button>
          <button className="btn btn-outline-success btn-inline" onClick={handleModalClose}>
            Edit
          </button>
          <button className="btn btn-outline-danger btn-inline" onClick={handleModalClose}>
            Delete
          </button>
        </Modal.Footer>
      </Modal>
      <div id="calendar-root"></div>
    </div>
  )
}

export default Calendar;