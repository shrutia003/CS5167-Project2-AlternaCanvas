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

  const headerStyle = {
    margin: '20px'
  }

  const divStyle = {
    margin: '20px'
  }

  const progressBarStyle = {
    width: '400px', 
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

  // Dev Function to clear submitted assignments from local storage
  const clearSubmissions = () => {
    localStorage.removeItem('submittedAssignments');
  };

  // Styles for the button
  const buttonStyle = {
    backgroundColor: '#F0342C',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    opacity: 0, // Initially hidden
  };

  // Styles for the button on hover - handled by onMouseEnter and onMouseLeave
  const buttonHoverStyle = {
    ...buttonStyle,
    opacity: 1, // Visible on hover
  };

  // State to handle hover style
  const [hover, setHover] = React.useState(false);

  return ( //needs some styling help
    <div>
      <h1 style={headerStyle}>Profile</h1>
      <div style={divStyle}>
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
        <button 
        style={hover ? buttonHoverStyle : buttonStyle} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clearSubmissions}
      >
        RESET PROGRESS
      </button>
      </div>
    </div>
  );
}

export default Profile;
