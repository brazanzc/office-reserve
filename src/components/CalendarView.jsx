import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { reservations } from '../data/reservations';
import { spaces } from '../data/spaces';

export default function CalendarView() {
  const events = reservations.map(res => ({
    id: res.id,
    title: spaces.find(s => s.id === res.spaceId)?.name || 'Espacio no encontrado',
    start: `${res.date}T${res.startTime}`,
    end: `${res.date}T${res.endTime}`,
    extendedProps: {
      user: res.userId,
      status: res.status
    }
  }));

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
      />
    </div>
  );
}