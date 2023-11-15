import React from 'react';

function CourseDetails({ courseName }) {
    const todayDate = new Date(2023, 9, 13);
    const semesterStart = new Date(2023, 7, 21);
    const semesterEnd = new Date(2023, 11, 7);
  
    const progress = ((todayDate - semesterStart) / (semesterEnd - semesterStart)) * 100;

    const progressBarStyle = {
        width: '60%', 
        height: '20px', 
        backgroundColor: '#e0e0e0', 
        borderRadius: '5px',
        margin: '10px 0', 
      };
    
      const progressFillStyle = {
        width: `${progress}%`, 
        height: '100%', 
        backgroundColor: '#F4364C', 
        borderRadius: '5px', 
      };
  return (
    <div>
      <h2>Course Details for {courseName}</h2>
      {/* Add specific details for each course as needed */}
      <p >Semester Progress:</p>
      <div style={progressBarStyle }>
        <div style={progressFillStyle}></div>
      </div>
      <br />
      <p>Announcements</p>
      <p>Modules</p>
      <p>Course Materials</p>
      <p>Assignments</p>
      <p>Syllabus</p>
      <p>Zoom</p>
    </div>
  );
}

export default CourseDetails;
