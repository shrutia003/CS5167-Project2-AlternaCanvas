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

  const gradeBreakdowns = {
    'Computer Graphics': { assignments: 0.5, participation: 0.1, exams: 0.4 },
    'Senior Design': { assignments: 0.5, participation: 0.1, exams: 0.4 },
    'UI Design': { assignments: 0.1, participation: 0.05, projects: 0.75, finalExam: 0.1 },
  };

  // Calculate the total grade based on the grade breakdowns
  const totalGrade = Object.entries(grades).reduce((total, [category, grade]) => {
    return total + (grade * gradeBreakdowns[selectedCourse][category]);
  }, 0);

  // Calculate the total weight (sum of weights)
  const totalWeight = Object.values(gradeBreakdowns[selectedCourse]).reduce((sum, weight) => sum + weight, 0);

  // Create a mapping for category names to be displayed
  const categoryDisplayName = {
    assignments: 'Assignments',
    participation: 'Participation',
    exams: 'Exams',
    projects: 'Projects',
    finalExam: 'Final Exam',
  };

  // Calculate the average grade
  const averageGrade = ((totalGrade / totalWeight)).toFixed(2);

  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');
  const gradesPath = `/src/data/${formattedCourseName}/course_info/grading.xlsx`;

  return (
    <div>
      <h3>{selectedCourse} Grades</h3>
      <ul>
        {Object.entries(grades).map(([category, grade]) => (
          <li key={category}>{categoryDisplayName[category]}: {grade}%</li>
        ))}
      </ul>
      <p>Average Grade: {averageGrade}%</p>
      <a href={gradesPath} download={`grading.xlsx`}>
        <button>Download Grade Breakdown</button>
      </a>
    </div>
  );
}

export default Grades;
