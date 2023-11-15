import React from 'react';
import { Link } from 'react-router-dom';

function Assignments({ selectedCourse }) {
  if (!selectedCourse) {
    // Render a default message or redirect to another page
    return (
      <div>
        <p>No course selected for assignments</p>
      </div>
    );
  }

  // Convert the course name to a lowercase, hyphenated format
  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');

  // Mapping of courses to the number of assignments
  const assignmentsMapping = {
    'computer_graphics': 9,
    'senior_design': 6,
    'ui_design': 8,
    // Add more courses as needed
  };

  // Get the number of assignments for the selected course
  const numberOfAssignments = assignmentsMapping[formattedCourseName] || 0;

  // Generate links for assignments 01 to the actual number of assignments
  const assignmentLinks = Array.from({ length: numberOfAssignments }, (_, index) => {
    const assignmentNumber = index + 1;
    const formattedAssignmentNumber = assignmentNumber.toString().padStart(2, '0');
    const assignmentPath = `/src/data/${formattedCourseName}/assignments/assignment_${formattedAssignmentNumber}.html`;

    return (
      <li key={assignmentNumber}>
        <Link to={assignmentPath} target="_blank">
          Assignment {formattedAssignmentNumber}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h3>Assignments for {selectedCourse}</h3>
      <ul>{assignmentLinks}</ul>
    </div>
  );
}

export default Assignments;
