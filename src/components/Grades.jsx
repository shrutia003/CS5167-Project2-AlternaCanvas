import React from 'react';

function Grades({ grades }) {
  if (!grades || !Object.keys(grades).length) {
    // Handle the case when grades is undefined or an empty object
    return (
      <div>
        <p></p>
      </div>
    );
  }

  // Calculate the average grade
  const averageGrade = (
    Object.values(grades).reduce((sum, grade) => sum + parseFloat(grade), 0) /
    Object.keys(grades).length
  ).toFixed(2);

  return (
    <div>
      <h3>Grades</h3>
      <ul>
        {Object.entries(grades).map(([assignmentNumber, grade]) => (
          <li key={assignmentNumber}>Assignment {assignmentNumber}: {grade}%</li>
        ))}
      </ul>
      <p>Average Grade: {averageGrade}%</p>
      <a href="/download-grades" download="grades.xlsx">
        <button>Download</button>
      </a>
    </div>
  );
}

export default Grades;
