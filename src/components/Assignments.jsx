import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function getRandomGrade() {
  // Generate a random grade between 80 and 100
  return (Math.random() * 20 + 80).toFixed(2);
}

function Assignments({ selectedCourse, onAssignmentSubmit, updateGrades }) {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [submittedAssignments, setSubmittedAssignments] = useState(new Set());

  // Load submitted assignments from local storage when the component mounts
  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submittedAssignments') || '{}');
    if (storedSubmissions[selectedCourse]) {
      setSubmittedAssignments(new Set(storedSubmissions[selectedCourse]));
    }
  }, [selectedCourse]);

  const markAsSubmitted = (assignmentNumber) => {
    setSubmittedAssignments((prevSubmittedAssignments) => {
      const newSubmittedAssignments = new Set(prevSubmittedAssignments);
      newSubmittedAssignments.add(assignmentNumber);

      // Save the updated set to local storage
      const storedSubmissions = JSON.parse(localStorage.getItem('submittedAssignments') || '{}');
      storedSubmissions[selectedCourse] = Array.from(newSubmittedAssignments);
      localStorage.setItem('submittedAssignments', JSON.stringify(storedSubmissions));

      onAssignmentSubmit(assignmentNumber);

      return newSubmittedAssignments;
    });

    const grade = getRandomGrade();
    updateGrades && updateGrades(assignmentNumber, grade);
  };

  if (!selectedCourse) {
    return (
      <div>
        <p></p>
      </div>
    );
  }

  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');

  const assignmentsMapping = {
    'computer_graphics': 9,
    'senior_design': 6,
    'ui_design': 8,
  };

  const numberOfAssignments = assignmentsMapping[formattedCourseName] || 0;

  const assignmentLinks = Array.from({ length: numberOfAssignments }, (_, index) => {
    const assignmentNumber = index + 1;
    const formattedAssignmentNumber = assignmentNumber.toString().padStart(2, '0');

    return (
      <li key={assignmentNumber}>
        <div>
          <Link to={`/src/data/${formattedCourseName}/assignments/assignment_${formattedAssignmentNumber}.html`} target="_blank">
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
            <textarea placeholder="Enter your submission here" rows="4" cols="50" />
            <input type="file" accept=".pdf,.doc,.docx" />
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
