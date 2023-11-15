import React from 'react';

function Profile() {
  const todayDate = new Date(2023, 9, 13);
  const semesterStart = new Date(2023, 7, 21);
  const semesterEnd = new Date(2023, 11, 7);

  const progress = ((todayDate - semesterStart) / (semesterEnd - semesterStart)) * 100;

  const studentName = 'Toby Determined';
  const studentId = 'M12345678';
  const gradeAndMajor = '5th Year in Computer Science';
  const graduationStatus = 'Graduating Spring 2024';

  const enrolledCourses = ['UI Design', 'Senior Design', 'Computer Graphics'];

  const progressBarStyle = {
    width: '400%', 
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

  return ( //needs some styling help
    <div>
      <h1>Profile</h1>
      <p>Date: {todayDate.toDateString()}</p>
      <p >Semester Progress:</p>
      <div style={progressBarStyle }>
        <div style={progressFillStyle}></div>
      </div>
      <br />
      <p>Name: {studentName}</p>
      <p>ID: {studentId}</p>
      <p>Grade and Major: {gradeAndMajor}</p>
      <p>Graduation: {graduationStatus}</p>
      <p>Enrolled Courses:</p>
      <ul>
        {enrolledCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
