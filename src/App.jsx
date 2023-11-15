import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Dashboard from './components/Dashboard';
import AssignmentCalendar from './components/AssignmentCalendar';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  };

  const mainLayoutStyle = {
    display: 'flex',
    flex: 1,
  };

  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const handleProfileClick = () => {
    setActiveSection('profile');
  };

  const handleCoursesClick = () => {
    setActiveSection('courses');
  };

  const handleDashboardClick = () => {
    setActiveSection('dashboard');
    setSelectedAssignment(null);
  };

  const handleCalendarClick = () => {
    setActiveSection('calendar');
  };

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
    setActiveSection('courses');
  };

  // Example assignment due dates
  const assignmentDueDates = [
    new Date(2023, 10, 20),
    new Date(2023, 10, 25),
    new Date(2023, 11, 5),
  ];

  return (
    <div style={appStyle}>
      <DashboardHeader />
      <div style={mainLayoutStyle}>
        <Sidebar
          onProfileClick={handleProfileClick}
          onDashboardClick={handleDashboardClick}
          onCoursesClick={handleCoursesClick}
          onCalendarClick={handleCalendarClick}
        />
        {activeSection === 'dashboard' && (
          <Dashboard onAssignmentClick={handleAssignmentClick} />
        )}
        {activeSection === 'profile' && <Profile />}
        {activeSection === 'courses' && <Courses selectedAssignment={selectedAssignment} />}
        {activeSection === 'calendar' && (
          <AssignmentCalendar assignmentDueDates={assignmentDueDates} />
        )}
      </div>
    </div>
  );
}

export default App;
