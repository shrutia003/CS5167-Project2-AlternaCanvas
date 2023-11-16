import React from 'react';

function Syllabus({ selectedCourse }) {
  if (!selectedCourse) {
    return (
      <div>
        <p>No course selected</p>
      </div>
    );
  }

  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');
  const syllabusPath = `/src/data/${formattedCourseName}/course_info/syllabus.html`;

  return (
    <div>
      <h3>Syllabus for {selectedCourse}</h3>
      <iframe title="Syllabus" src={syllabusPath} width="50%" height="1000px" />
    </div>
  );
}

export default Syllabus;
