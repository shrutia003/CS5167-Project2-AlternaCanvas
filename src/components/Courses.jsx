import React, { useState } from 'react';
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
  const todayDate = new Date(2023, 9, 13);
  const semesterStart = new Date(2023, 7, 21);
  const semesterEnd = new Date(2023, 11, 7);

  const progress = ((todayDate - semesterStart) / (semesterEnd - semesterStart)) * 100;

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
  const [grades, setGrades] = useState({
    'UI Design': { assignments: 90, participation: 80, projects: 95, finalExam: 85 },
    'Senior Design': { assignments: 85, participation: 90, exams: 80 },
    'Computer Graphics': { assignments: 92, participation: 88, exams: 75 },
  });

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
                  style={{ ...courseButtonStyle, backgroundColor: selectedCourse === 'UI Design' ? '#2a353f' : '#F4364C' }}
                  onClick={() => handleCourseClick('UI Design')}
                >
                  UI Design
                </button>
              </Link>
              <Link to="/courses/Senior Design">
                <button
                  style={{ ...courseButtonStyle, backgroundColor: selectedCourse === 'Senior Design' ? '#2a353f' : '#F4364C' }}
                  onClick={() => handleCourseClick('Senior Design')}
                >
                  Senior Design
                </button>
              </Link>
              <Link to="/courses/Computer Graphics">
                <button
                  style={{ ...courseButtonStyle, backgroundColor: selectedCourse === 'Computer Graphics' ? '#2a353f' : '#F4364C' }}
                  onClick={() => handleCourseClick('Computer Graphics')}
                >
                  Computer Graphics
                </button>
              </Link>
            </div>

            <CourseDetails courseName={selectedCourse} />


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
              <Route path="/courses/:course/assignments" element={<Assignments selectedCourse={selectedCourse} />} />
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
