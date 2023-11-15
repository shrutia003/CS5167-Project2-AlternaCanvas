import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from './CourseDetails';
import Announcements from './Announcements';
import Assignments from './Assignments';
import CourseMaterials from './CourseMaterials';
import Modules from './Modules';
import Syllabus from './Syllabus';
import Zoom from './Zoom';

function Courses({ selectedAssignment }) {
  const todayDate = new Date(2023, 9, 13);
  const semesterStart = new Date(2023, 7, 21);
  const semesterEnd = new Date(2023, 11, 7);

  const progress = ((todayDate - semesterStart) / (semesterEnd - semesterStart)) * 100;

  const headerStyle = {
    margin: '20px'
  }

  const progressBarStyle = {
    width: '70%',
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

  const [selectedCourse, setSelectedCourse] = useState(null);

  const coursesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    background: 'linear-gradient(45deg, #36454F, #29323c)',
    color: '#F6F6F6',
  };

  const courseButtonStyle = {
    padding: '50px',
    marginRight: '50px',
    marginLeft: '50px',
    backgroundColor: '#F4364C',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '50px',
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <Router>
      <div>
        <h1 style={headerStyle}>Courses</h1>
        {selectedAssignment ? (
          <CourseDetails courseName={"selectedAssignment.course"} />
        ) : (
          <div style={coursesContainerStyle}>
            <Link to="/courses/UI Design">
              <button style={courseButtonStyle} onClick={() => handleCourseClick('UI Design')}>
                UI Design
              </button>
            </Link>
            <Link to="/courses/Senior Design">
              <button style={courseButtonStyle} onClick={() => handleCourseClick('Senior Design')}>
                Senior Design
              </button>
            </Link>
            <Link to="/courses/Computer Graphics">
              <button style={courseButtonStyle} onClick={() => handleCourseClick('Computer Graphics')}>
                Computer Graphics
              </button>
            </Link>
          </div>
        )}
        
        <Routes>
          <Route path="/courses/UI Design" element={<CourseDetails courseName={selectedCourse} />} />
          <Route path="/courses/Senior Design" element={<CourseDetails courseName={selectedCourse} />} />
          <Route path="/courses/Computer Graphics" element={<CourseDetails courseName={selectedCourse} />} />
        </Routes>

        {/* {selectedCourse && (
          <div>
            <Routes>
              <Route path="/courses/:course/announcements" element={<Announcements />} />
              <Route path="/courses/:course/assignments" element={<Assignments />} />
              <Route path="/courses/:course/coursematerials" element={<CourseMaterials />} />
              <Route path="/courses/:course/modules" element={<Modules />} />
              <Route path="/courses/:course/syllabus" element={<Syllabus />} />
              <Route path="/courses/:course/zoom" element={<Zoom />} />
            </Routes>
          </div>
        )} */}
      </div>
    </Router>
  );
}

export default Courses;
