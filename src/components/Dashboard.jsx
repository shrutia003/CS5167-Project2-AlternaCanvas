import React, { useState } from 'react';
import CourseDetails from './CourseDetails';

function Dashboard({ onAssignmentClick }) {
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // get assignments from given files
  const assignments = [
    { id: 1, course: 'UI Design', title: 'Assignment 1', dueDate: '2023-11-20' },
    { id: 2, course: 'Senior Design', title: 'Assignment 2', dueDate: '2023-11-25' },
    { id: 3, course: 'Computer Graphics', title: 'Assignment 3', dueDate: '2023-12-05' },
  ];

  const assignmentStyle = {
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#F4364C',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '20px',
  };

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
    onAssignmentClick(assignment); 
  }; // need to add assignment details page but this navigates to course details currently

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Your Assignments</h2>
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          onClick={() => handleAssignmentClick(assignment)}
          style={assignmentStyle}
        >
          {assignment.course} - {assignment.title} (Due: {assignment.dueDate})
        </div>
      ))}
      {selectedAssignment && <CourseDetails courseName={selectedAssignment.course} />}
    </div>
  );
}

export default Dashboard;
