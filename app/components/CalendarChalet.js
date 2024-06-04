'use client';

import { useState, useEffect } from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const locale = 'fr-FR'; // Set your desired locale here

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/fetchIcsChalet');
        const icsData = await response.json();
        setEvents(icsData);
      } catch (error) {
        console.error('Error fetching ICS data:', error);
      }
    };

    fetchEvents();
  }, []);

  const isBooked = (date) => {
    return events.some(
      (event) => new Date(event.start) <= date && new Date(event.end) > date
    );
  };

  const renderCalendar = () => {
    const startOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    const startDay = startOfMonth.getDay();
    const daysInMonth = [];

    // Add blank days for the first week
    for (let i = 0; i < startDay; i++) {
      daysInMonth.push(null);
    }

    // Add days of the current month
    for (
      let date = new Date(startOfMonth);
      date <= endOfMonth;
      date.setDate(date.getDate() + 1)
    ) {
      daysInMonth.push(new Date(date));
    }

    return (
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`border p-2 h-10 flex items-center justify-center ${
              day && isBooked(day) ? 'bg-pink-500 text-white' : 'bg-white'
            }`}
          >
            {day && <div>{day.getDate()}</div>}
          </div>
        ))}
      </div>
    );
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div className=" max-w-[350px] mx-auto bg-white ">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className=" text-[18px]">
          <FaRegArrowAltCircleLeft />
        </button>
        <h2 className=" text-[13px] font-bold">
          {currentMonth.toLocaleString(locale, { month: 'long' })}{' '}
          {currentMonth.getFullYear()}
        </h2>
        <button onClick={handleNextMonth} className="text-[18px]">
          <FaRegArrowAltCircleRight />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-1">
        {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map((day) => (
          <div key={day} className="border p-2 text-center text-[12px]">
            {day}
          </div>
        ))}
      </div>
      <div>{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
