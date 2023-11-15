// AssignmentCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Import the custom styles

function AssignmentCalendar({ assignmentDueDates }) {
  const defaultDate = new Date(2023, 9, 13); // October is represented as 9 (zero-based index)

  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const tileContent = ({ date }) => {
    // Check if the date is in the assignment due dates
    const isDueDate = assignmentDueDates.some(
      (dueDate) =>
        dueDate.getDate() === date.getDate() &&
        dueDate.getMonth() === date.getMonth() &&
        dueDate.getFullYear() === date.getFullYear()
    );

    return isDueDate ? <div className="due-date-marker"></div> : null
  }; //due date marker isnt showing up in the correct places yet, hmmm...

  return (
    <div>
      <h1>Calendar</h1>
      <div>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={tileContent}
        />
      </div>
    </div>
  );
}

export default AssignmentCalendar;
