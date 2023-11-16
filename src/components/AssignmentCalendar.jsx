import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function AssignmentCalendar({ assignmentDueDates }) {
  const headerStyle = {
    margin: '20px'
  };

  const divStyle = {
    margin: '20px'
  };

  const defaultDate = new Date(2023, 9, 13);

  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [comments, setComments] = useState({});

  const tileContent = ({ date, view }) => {
    const isDueDate = assignmentDueDates.some(
      (dueDate) =>
        dueDate.getDate() === date.getDate() &&
        dueDate.getMonth() === date.getMonth() &&
        dueDate.getFullYear() === date.getFullYear()
    );

    const hasComment = comments[date.toISOString()];

    const highlightStyle = hasComment ? { backgroundColor: 'yellow' } : {};

    return (
      <div className="calendar-tile" style={highlightStyle}>
        {isDueDate && <div className="due-date-marker"></div>}
      </div>
    );
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setComment(comments[date.toISOString()] || '');
  };

  const handleCommentChange = (event) => {
    const updatedComments = { ...comments, [selectedDate.toISOString()]: event.target.value };
    setComments(updatedComments);
  };

  return (
    <div>
      <h1 style={headerStyle}>Calendar</h1>
      <div style={divStyle}>
        <Calendar
          onChange={handleDateClick}
          value={selectedDate}
          tileContent={tileContent}
        />
        <div>
          <label htmlFor="comment">Comment for {selectedDate.toDateString()}:</label>
          <textarea
            id="comment"
            value={comments[selectedDate.toISOString()] || ''}
            onChange={handleCommentChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default AssignmentCalendar;
