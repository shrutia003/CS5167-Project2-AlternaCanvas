import React from 'react';

function Grades({ grades, selectedCourse }) {
  if (!selectedCourse) {
    return (
      <div>
        <h3></h3>
      </div>
    );
  }

  if (!grades || !Object.keys(grades).length) {
    return (
      <div>
        <h3>Grades for {selectedCourse} </h3>
        <p>No grades available for display.</p>
      </div>
    );
  }

  // Calculate the average grade
  const averageGrade = (
    Object.values(grades).reduce((sum, grade) => sum + parseFloat(grade), 0) /
    Object.keys(grades).length
  ).toFixed(2);

  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');
  const gradesPath = `/src/data/${formattedCourseName}/course_info/grading.xlsx`;

  return (
    <div>
      <h3>{selectedCourse} Grades</h3>
      <ul>
        {Object.entries(grades).map(([assignmentNumber, grade]) => (
          <li key={assignmentNumber}>Assignment {assignmentNumber}: {grade}%</li>
        ))}
      </ul>
      <p>Average Grade: {averageGrade}%</p>
      <a href={gradesPath} download={`grading.xlsx`}>
        <button>Download</button>
      </a>
    </div>
  );
}

export default Grades;
