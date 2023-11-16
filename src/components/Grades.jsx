import React from 'react';

function Grades({ grades, selectedCourse }) {
  if (!selectedCourse || !grades) {
    return (
      <div>
        <p></p>
      </div>
    );
  }

  const gradeBreakdowns = {
    'Computer Graphics': { assignments: 0.5, participation: 0.1, exams: 0.4 },
    'Senior Design': { assignments: 0.5, participation: 0.1, exams: 0.4 },
    'UI Design': { assignments: 0.1, participation: 0.05, projects: 0.75, finalExam: 0.1 },
  };

  const categoryDisplayName = {
    assignments: 'Assignment',
    participation: 'Participation',
    exams: 'Exam',
    projects: 'Project',
    finalExam: 'Final Exam',
  };

  const totalGrade = Object.entries(grades).reduce((total, [category, categoryGrades]) => {
    return total + (categoryGrades.reduce((sum, grade) => sum + grade, 0) / categoryGrades.length) * gradeBreakdowns[selectedCourse][category];
  }, 0);

  const totalWeight = Object.values(gradeBreakdowns[selectedCourse]).reduce((sum, weight) => sum + weight, 0);

  const categoryAverages = Object.entries(grades).reduce((averages, [category, categoryGrades]) => {
    const average = (categoryGrades.reduce((sum, grade) => sum + grade, 0) / categoryGrades.length).toFixed(2);
    return { ...averages, [category]: average };
  }, {});

  return (
    <div>
      <h3>{selectedCourse} Grades</h3>
      <ul>
        {Object.entries(grades).map(([category, categoryGrades]) => (
          <li key={category}>
            <h3>{categoryDisplayName[category]} Grades:</h3>
            {categoryGrades.map((grade, index) => (
              <div key={index}>
                {`${categoryDisplayName[category]} ${index + 1} - ${grade}%`}
              </div>
            ))}
            - Average: {categoryAverages[category]}%
          </li>
        ))}
      </ul>
      <h3>Total Average Grade: {(totalGrade / totalWeight).toFixed(2)}%</h3>
    </div>
  );
}

export default Grades;
