import React from 'react';
import { Link } from 'react-router-dom';

function AnnouncementList({ selectedCourse }) {
  if (!selectedCourse) {
    // Render a default message or redirect to another page
    return (
      <div>
        <p></p>
      </div>
    );
  }

  // Convert the course name to a lowercase, hyphenated format
  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');

  // Define the number of announcements for each course
  const announcementCounts = {
    'Computer Graphics': 3,
    'Senior Design': 6,
    'UI Design': 4,
  };

  // Generate links for announcements
  const announcementLinks = Array.from({ length: announcementCounts[selectedCourse] }, (_, index) => {
    const announcementNumber = index + 1;
    const formattedAnnouncementNumber = announcementNumber.toString().padStart(2, '0');
    const announcementPath = `/src/data/${formattedCourseName}/announcements/announcement_${formattedAnnouncementNumber}.html`;


    return (
      <li key={announcementNumber}>
        <Link to={announcementPath} target="_blank">
          Announcement {formattedAnnouncementNumber}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h3>Announcements for {selectedCourse}</h3>
      <ul>{announcementLinks}</ul>
    </div>
  );
}

export default AnnouncementList;
