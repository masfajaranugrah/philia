"use client";

import React from "react";

const CalendarEvent = () => {
  return (
    <div className="min-h-screen p-6 flex flex-col gap-6">
      {/* Calendar */}
      <div className="rounded-xl shadow-lg bg-white p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-green-900">January</h3>
          <button className="text-sm font-medium text-green-800 underline">
            ▼
          </button>
        </div>
        <div className="grid grid-cols-7 text-center text-green-900 font-medium">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 border-t pt-2 mt-2">
          {/* Render empty spaces for days before the 1st */}
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} />
          ))}
          {/* Render days */}
          {Array.from({ length: 31 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-12 border rounded-lg flex items-center justify-center ${
                idx === 3 ? "bg-green-800 text-white" : ""
              }`}
            >
              {idx + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Event List */}
      <div className="rounded-xl shadow-lg bg-white p-4">
        <h4 className="text-lg font-bold text-green-900 mb-4">Event List</h4>
        <div className="flex flex-col gap-4">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="text-[18px] font-semibold text-green-900">
                  23-24 January 2025
                </p>
                <p className="text-[15px] text-green-700">
                  Anniversary Lorem Ipsum <br />
                  Kedai Philia Aula VIP
                </p>
              </div>
              <button className="px-4 py-4 bg-green-800 text-white text-[15px] rounded-lg">
                Completed
              </button>
            </div>
          ))}
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
