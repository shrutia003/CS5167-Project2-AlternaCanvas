import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AnnouncementList({ selectedCourse }) {
  if (!selectedCourse) {
    return (
      <div>
        <p></p>
      </div>
    );
  }

  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');

  const announcementCounts = {
    'Computer Graphics': 3,
    'Senior Design': 6,
    'UI Design': 4,
  };

  const [viewedAnnouncements, setViewedAnnouncements] = useState({});

  const announcementLinks = Array.from({ length: announcementCounts[selectedCourse] }, (_, index) => {
    const announcementNumber = index + 1;
    const formattedAnnouncementNumber = announcementNumber.toString().padStart(2, '0');
    const announcementPath = `/src/data/${formattedCourseName}/announcements/announcement_${formattedAnnouncementNumber}.html`;

    const isViewed = viewedAnnouncements[announcementNumber];

    return (
      <li key={announcementNumber}>
        <Link to={announcementPath} target="_blank" onClick={() => markAsViewed(announcementNumber)}>
          Announcement {formattedAnnouncementNumber}
        </Link>
        {isViewed && <span style={{ color: 'green', marginLeft: '5px' }}>✅</span>}
      </li>
    );
  });

  const markAsViewed = (announcementNumber) => {
    setViewedAnnouncements((prevViewed) => ({ ...prevViewed, [announcementNumber]: true }));
  };

  return (
    <div>
      <h3>Announcements for {selectedCourse}</h3>
      <ul>{announcementLinks}</ul>
    </div>
  );
}

export default AnnouncementList;
