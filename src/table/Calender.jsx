import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Col, Container, Row } from 'react-bootstrap';


// Setup the localizer
const localizer = momentLocalizer(moment);

// Initial events
const initialEvents = [
  { id: 1, title: 'Meeting', start: new Date(2023, 9, 15, 10, 0), end: new Date(2023, 9, 15, 11, 0), type: 'meeting' },
  { id: 2, title: 'Leave', start: new Date(2023, 9, 20), end: new Date(2023, 9, 20), type: 'leave' },
];

// Draggable event types 
const draggableEvents = [
  { id: 'meeting', title: '📅 Meeting', type: 'meeting' },
  { id: 'leave', title: '🏖️ Leave', type: 'leave' },
  { id: 'presentation', title: '🎤 Presentation', type: 'presentation' },
  { id: 'work-from-home', title: '🏡 Work From Home', type: 'work-from-home' },
  { id: 'holiday', title: '🌴 Holiday', type: 'holiday' },
  { id: 'overtime', title: '⏳ Overtime', type: 'overtime' },
  { id: 'business-travel', title: '✈️ Business Travel', type: 'business-travel' },
];

const Calendar = () => {
  const [events, setEvents] = useState(initialEvents);
  const [draggedEvent, setDraggedEvent] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control pop-up visibility

  // Handle event drop on calendar
  const onDrop = (slotInfo) => {
    if (draggedEvent) {
      const newEvent = {
        id: events.length + 1,
        title: draggedEvent.title,
        start: slotInfo.start,
        end: slotInfo.end || slotInfo.start,
        type: draggedEvent.type,
      };
      setEvents([...events, newEvent]);
      setDraggedEvent(null);
    }
  };

  // Dragging logic
  const onDragStart = (event) => setDraggedEvent(event);
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const draggedType = draggableEvents.find((e) => e.id === result.draggableId);
    if (draggedType) setDraggedEvent(draggedType);
  };

  // Remove event on double-click
  const onEventDoubleClick = (event) => {
    setEvents(events.filter(e => e.id !== event.id));
  };

  // Handle event click to show pop-up
  const onEventClick = (event) => {
    setSelectedEvent(event);
    setIsPopupOpen(true);
  };

  // Close pop-up
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedEvent(null);
  };

  // Custom event styling
  const eventStyleGetter = (event) => {
    const colors = {
      meeting: '#007bff',
      leave: '#ff4444',
      presentation: '#00c851',
      'work-from-home': '#ffbb33',
      holiday: '#ff8800',
      overtime: '#9933cc',
      'business-travel': '#33b5e5',
    };
    return {
      style: {
        backgroundColor: colors[event.type] || '#3174ad',
        color: 'white',
        borderRadius: '5px',
        padding: '5px',
        fontSize: '12px',
        fontWeight: 'bold',
      },
    };
  };

  return (
<>
<Container fluid className='my-5'>
         <Row>
            <Col lg={3} ></Col>
            <Col lg={8} >
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>Calender</h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f6f9' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div
          style={{
            display: 'flex',
            backgroundColor: '#fff',
            maxWidth: '850px',
            width: '100%',
            borderRadius: '10px',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
          }}
        >
          {/* Draggable Events Sidebar */}
          <Droppable droppableId="sidebar">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  width: '150px',
                  padding: '15px',
                  backgroundColor: '#f4f4f4',
                  borderRight: '1px solid #ddd',
                }}
              >
                <h4 style={{ fontSize: '14px', textAlign: 'center', marginBottom: '10px', color: '#333' }}>📌 Drag Events</h4>
                {draggableEvents.map((event, index) => (
                  <Draggable key={event.id} draggableId={event.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onMouseDown={() => onDragStart(event)}
                        style={{
                          padding: '8px 12px',
                          marginBottom: '8px',
                          backgroundColor: '#fff',
                          border: '1px solid #ddd',
                          borderRadius: '5px',
                          textAlign: 'center',
                          fontSize: '12px',
                          cursor: 'grab',
                          transition: '0.2s',
                          fontWeight: 'bold',
                          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {event.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* Calendar */}
          <Droppable droppableId="calendar">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  flex: 1,
                  padding: '15px',
                  maxWidth: '700px',
                }}
              >
                <BigCalendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  eventPropGetter={eventStyleGetter}
                  views={['month']}
                  defaultView="month"
                  selectable
                  onSelectSlot={onDrop} // Handle event drop
                  onDoubleClickEvent={onEventDoubleClick} // Remove event on double-click
                  onSelectEvent={onEventClick} // Handle event click
                  style={{
                    height: '80vh',
                    fontSize: '13px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
                    padding: '10px',
                  }}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>

      {/* Pop-up Menu */}
      {isPopupOpen && selectedEvent && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          }}
        >
          <h3>{selectedEvent.title}</h3>
          <p>Start: {selectedEvent.start.toLocaleString()}</p>
          <p>End: {selectedEvent.end.toLocaleString()}</p>
          <button
            onClick={closePopup}
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
            </Col>
         </Row>
      </Container>
</>
  );
};

export default Calendar;