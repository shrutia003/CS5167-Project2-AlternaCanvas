import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Assignments({ selectedCourse }) {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [submittedAssignments, setSubmittedAssignments] = useState(new Set());

  const markAsSubmitted = (assignmentNumber) => {
    setSubmittedAssignments((prevSubmittedAssignments) => {
      const newSubmittedAssignments = new Set(prevSubmittedAssignments);
      newSubmittedAssignments.add(assignmentNumber);
      return newSubmittedAssignments;
    });
  };

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

    return (
      <li key={assignmentNumber}>
        <div>
          <Link to={`/assignments/${formattedCourseName}/${formattedAssignmentNumber}`} target="_blank">
            View Assignment {formattedAssignmentNumber}
          </Link>
          <button onClick={() => setSelectedAssignment(formattedAssignmentNumber)}>
            Submit Assignment {formattedAssignmentNumber}
          </button>
          {submittedAssignments.has(formattedAssignmentNumber) && (
            <span role="img" aria-label="checkmark">
              ✔️
            </span>
          )}
        </div>
        {selectedAssignment === formattedAssignmentNumber && (
          <div>
            <h4>Submission for Assignment {formattedAssignmentNumber}</h4>
            {/* Add text entry or file upload options here */}
            <textarea placeholder="Enter your submission here" rows="4" cols="50" />
            <input type="file" accept=".pdf,.doc,.docx" />
            {/* Add a submit button or any additional UI for submission */}
            <button
              onClick={() => {
                markAsSubmitted(formattedAssignmentNumber);
                setSelectedAssignment(null);
              }}
            >
              Submit
            </button>
          </div>
        )}
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
