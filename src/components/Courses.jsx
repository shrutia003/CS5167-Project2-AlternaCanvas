import React, { useState } from 'react';
import CourseDetails from './CourseDetails';

function Courses({ selectedAssignment }) {
    const todayDate = new Date(2023, 9, 13);
    const semesterStart = new Date(2023, 7, 21);
    const semesterEnd = new Date(2023, 11, 7);

    const progress = ((todayDate - semesterStart) / (semesterEnd - semesterStart)) * 100;

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
        backgroundColor: '#36454F',
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
        <div>
            <h1>Courses</h1>
            {selectedAssignment ? (
                <CourseDetails courseName={selectedAssignment.course} />
            ) : (
                <div style={coursesContainerStyle}>
                    <button style={courseButtonStyle} onClick={() => handleCourseClick('UI Design')}>
                        UI Design
                    </button>
                    <button style={courseButtonStyle} onClick={() => handleCourseClick('Senior Design')}>
                        Senior Design
                    </button>
                    <button style={courseButtonStyle} onClick={() => handleCourseClick('Computer Graphics')}>
                        Computer Graphics
                    </button>
                </div>
            )}

            {selectedCourse && (
                <div>
                    <h2>Course Details for {selectedCourse}</h2>
                    {/* Add specific details for each course as needed */}
                    <p >Semester Progress:</p>
                    <div style={progressBarStyle}>
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
            )}
        </div>
    );
}

export default Courses;
