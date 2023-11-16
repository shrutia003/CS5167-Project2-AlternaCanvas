import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import AnnouncementList from './AnnouncementList';
import Assignments from './Assignments';
import CourseMaterials from './CourseMaterials';
import Modules from './Modules';
import Syllabus from './Syllabus';
import Zoom from './Zoom';
import Grades from './Grades';

function Courses({ selectedAssignment }) {
  const headerStyle = {
    margin: '20px'
  };
  
  const navigationLinksStyle = {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    // background: 'linear-gradient(45deg, #36454F, #29323c)',
    color: '#F6F6F6',
  };

  const navigationLinkStyle = {
    padding: '10px',
    backgroundColor: '#F4364C',
    color: '#ffffff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  // ASSIGNMENT UPDATE HANDLER //

  const [completedAssignments, setCompletedAssignments] = useState(new Set());

  // Load completed assignments from local storage when selectedCourse changes
  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submittedAssignments') || '{}');
    if (storedSubmissions[selectedCourse]) {
      setCompletedAssignments(new Set(storedSubmissions[selectedCourse]));
    } else {
      setCompletedAssignments(new Set()); // Reset if no submissions for this course
    }
  }, [selectedCourse]);
  
  // Function to handle assignment submission
  const handleAssignmentSubmit = (assignmentId) => {
    setCompletedAssignments(prev => {
      const updatedAssignments = new Set([...prev, assignmentId]);
  
      // Save the updated set to local storage
      const storedSubmissions = JSON.parse(localStorage.getItem('submittedAssignments') || '{}');
      storedSubmissions[selectedCourse] = Array.from(updatedAssignments);
      localStorage.setItem('submittedAssignments', JSON.stringify(storedSubmissions));
  
      return updatedAssignments;
    });
  };

  // ///////////////////////// //

  // GRADE UPDATE HANDLER //

  const [grades, setGrades] = useState({
    'UI Design': {
      assignments: [90, 85, 92], 
      participation: [95], 
      projects: [95, 90], 
      // finalExam: [85], 
    },
    'Senior Design': {
      assignments: [85, 88, 90, 87], 
      participation: [90], 
      exams: [80], 
    },
    'Computer Graphics': {
      assignments: [92, 88, 90, 82, 86, 95], 
      participation: [85], 
      exams: [89], 
    },
  });
  
  // //////////////////// //

  const coursesContainerStyle = {
    display: 'flex',
    width: '1240px',
    justifyContent: 'center', // Center the buttons as a group
    alignItems: 'center', // Optional, if you want to align them vertically
    padding: '20px',
    background: 'linear-gradient(45deg, #36454F, #29323c)',
    color: '#F6F6F6',
    gap: '80px', // This sets the space between each item in the flex container
  };

  const getBackgroundImage = (selectedCourse, completedCount) => {
    const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');
    const imageName = `${formattedCourseName}/${completedCount}.png`;
    return `url(/src/assets/${imageName})`;
  };

  const courseButtonStyle = (course, selectedCourse, completedCount) => {
    const isSelected = selectedCourse === course;
    return {
      width: '300px',
      padding: '50px',
      backgroundColor: 'transparent',
      backgroundImage: getBackgroundImage(course, isSelected ? completedCount : 0),
      color: '#ffffff',
      outline: isSelected ? '3px solid white' : 'none', // Use outline for no layout shift
      outlineOffset: '-3px', // Adjust as needed
      boxShadow: isSelected ? '0 0 0 2px #F4364C' : 'none',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '50px',
      transition: 'background-image 0.5s ease-in-out',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textShadow: `
      -2px -2px 0 #000,  
      2px -2px 0 #000,
      -2px  2px 0 #000,
      2px  2px 0 #000`
    }
  };

  return (
    <Router>
      <div>
        <h1 style={headerStyle}>Courses</h1>
        {selectedAssignment ? (
          <div style={coursesContainerStyle}></div>
        ) : (
          <div>
            <div style={coursesContainerStyle}>
              <Link to="/courses/UI Design">
                <button
                  style={courseButtonStyle('UI Design', selectedCourse, completedAssignments.size)}
                  onClick={() => handleCourseClick('UI Design')}
                >
                  UI Design
                </button>
              </Link>
              <Link to="/courses/Senior Design">
                <button
                  style={courseButtonStyle('Senior Design', selectedCourse, completedAssignments.size)}
                  onClick={() => handleCourseClick('Senior Design')}
                >
                  Senior Design
                </button>
              </Link>
              <Link to="/courses/Computer Graphics">
                <button
                  style={courseButtonStyle('Computer Graphics', selectedCourse, completedAssignments.size)}
                  onClick={() => handleCourseClick('Computer Graphics')}
                >
                  Computer Graphics
                </button>
              </Link>
            </div>

            <CourseDetails
              courseName={selectedCourse}
              completedAssignments={completedAssignments}
            />


            {selectedCourse && (
              <div style={navigationLinksStyle}>
                <Link to={`/courses/${selectedCourse}/announcements`} style={navigationLinkStyle}>Announcements</Link>
                <Link to={`/courses/${selectedCourse}/assignments`} style={navigationLinkStyle}>Assignments</Link>
                <Link to={`/courses/${selectedCourse}/grades`} style={navigationLinkStyle}>Grades</Link>
                <Link to={`/courses/${selectedCourse}/coursematerials`} style={navigationLinkStyle}>Course Materials</Link>
                <Link to={`/courses/${selectedCourse}/modules`} style={navigationLinkStyle}>Modules</Link>
                <Link to={`/courses/${selectedCourse}/syllabus`} style={navigationLinkStyle}>Syllabus</Link>
                <Link to={`/courses/${selectedCourse}/zoom`} style={navigationLinkStyle}>Zoom</Link>
              </div>
            )}

            <Routes>
              <Route path="/courses/:course/announcements" element={<AnnouncementList selectedCourse={selectedCourse} />} />
              <Route path="/courses/:course/assignments" element={<Assignments selectedCourse={selectedCourse} onAssignmentSubmit={handleAssignmentSubmit} />} />
              <Route path="/courses/:course/grades" element={<Grades selectedCourse={selectedCourse} grades={grades[selectedCourse]}/>} />
              <Route path="/courses/:course/coursematerials" element={<CourseMaterials selectedCourse={selectedCourse} />} />
              <Route path="/courses/:course/modules" element={<Modules selectedCourse={selectedCourse} />} />
              <Route path="/courses/:course/syllabus" element={<Syllabus selectedCourse={selectedCourse} />} />
              <Route path="/courses/:course/zoom" element={<Zoom selectedCourse={selectedCourse} />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default Courses;
