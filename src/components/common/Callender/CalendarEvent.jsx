"use client";

import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://192.168.1.22:8000/api/events/");
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        const data = await response.json();
        
        const formattedEvents = data.map(event => ({
          title: event.title,
          start: event.start,
          end: event.end || event.start,
          location: event.location,
          description: event.description,
          className: event.className,
          extendedProps: {
            description: event.description || "Tidak ada deskripsi",
          },
        }));

        setEvents(formattedEvents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      description: clickInfo.event.extendedProps.description,
    });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className=" container mx-auto min-h-screen p-4 md:p-6 flex flex-col gap-6">
      <div className="rounded-xl  shadow-lg bg-white p-3 md:p-4">
        <h3 className="text-lg md:text-xl font-bold text-green-900 mb-4">
          Event Calendar
        </h3>
        {loading ? (
          <p className="text-gray-600">Loading events...</p>
        ) : error ? (
          <p className="text-red-600">Error: {error}</p>
        ) : (
          <FullCalendar
          
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            height="auto"
            aspectRatio={1}
            eventTextColor="white"
            eventDisplay="block"
            eventClick={handleEventClick}
            eventDidMount={(info) => {
              if (info.event.classNames.includes("important")) {
                info.el.style.backgroundColor = "#000";
              }
            }}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "today",
            }}
          />
        )}
      </div>

      {selectedEvent && (
        <div className="fixed mx-2 inset-0 flex items-center justify-center bg-opacity-50 z-[9999]">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-green-900 mb-2">{selectedEvent.title}</h2>
            <p className="text-gray-700">{selectedEvent.description}</p>
            <p className="text-gray-600 mt-2">
              {new Date(selectedEvent.start).toLocaleDateString()} - {selectedEvent.end ? new Date(selectedEvent.end).toLocaleDateString() : "Single Day"}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
   
 
 
 

      {/* Event List */}
      <div className="rounded-xl shadow-lg bg-white p-4">
  <h4 className="text-lg font-bold text-green-900 mb-4">Event List</h4>
  <div className="flex flex-col gap-4">
    {events.length > 0 ? (
      events.map((event, index) => {
        const currentDate = new Date();
        const eventEndDate = new Date(event.end || event.start); // Use start date if no end date
        const isEventCompleted = eventEndDate < currentDate; // Check if the event's end date has passed

        return (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="text-[18px] font-semibold text-green-900">
                {new Date(event.start).toLocaleDateString()} - {event.end ? new Date(event.end).toLocaleDateString() : "Single Day"}
              </p>
              <p className="text-[15px] text-green-700">
                {event.title} <br />
                {event.location || "Unknown Location"}
              </p>
            </div>
            <button
              className={`px-4 py-2 text-[15px] rounded-lg ${
                isEventCompleted ? 'bg-gray-800' : 'bg-green-800'
              } text-white`}
            >
              {isEventCompleted ? 'selesai' : 'berlangsung'}
            </button>
          </div>
        );
      })
    ) : (
      <p className="text-gray-600">No events available</p>
    )}
  </div>
</div>


      {/* Contact Section */}
      <div className="rounded-xl shadow-lg bg-white p-6 text-center">
        <p className="text-[20px] font-semibold text-green-900  ">
          Book for  
        </p>
        <p className="text-[40px] font-bold text-green-900  ">YOUR EVENT  </p>
        <p className="text-[20px] font-bold text-green-900  ">now!</p>
        <button className="px-6 py-4 my-10 text-[20px] font-medium text-white bg-green-900 rounded-lg hover:bg-green-800">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CalendarEvent;
