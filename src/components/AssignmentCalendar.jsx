import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; 

function AssignmentCalendar({ assignmentDueDates }) {
  const headerStyle = {
    margin: '20px'
  }

  const divStyle = {
    margin: '20px'
  }

  const defaultDate = new Date(2023, 9, 13); 

  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const tileContent = ({ date }) => {
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
      <h1 style={headerStyle}>Calendar</h1>
      <div style={divStyle}>
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
