import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AnnouncementList({ selectedCourse }) {
  if (!selectedCourse) {
    return <div><p>Select a course to view announcements.</p></div>;
  }

  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');
  const announcementCounts = {
    'Computer Graphics': 3,
    'Senior Design': 6,
    'UI Design': 4,
  };

  const [announcements, setAnnouncements] = useState([]);
  const [viewedAnnouncements, setViewedAnnouncements] = useState({});

  useEffect(() => {
    const fetchAnnouncements = async () => {
      let fetchedAnnouncements = [];

      for (let i = 1; i <= announcementCounts[selectedCourse]; i++) {
        const announcementNumber = i.toString().padStart(2, '0');
        const announcementPath = `/src/data/${formattedCourseName}/announcements/announcement_${announcementNumber}.html`;

        try {
          const response = await fetch(announcementPath);
          const html = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const title = doc.querySelector('h2')?.innerText;
          const date = doc.querySelector('h3')?.innerText;

          fetchedAnnouncements.push({ number: announcementNumber, title, date, path: announcementPath });
        } catch (error) {
          console.error('Error fetching announcement:', error);
        }
      }

      setAnnouncements(fetchedAnnouncements);
    };

    fetchAnnouncements();
  }, [selectedCourse]);

  const markAsViewed = (announcementNumber) => {
    setViewedAnnouncements((prevViewed) => ({ ...prevViewed, [announcementNumber]: true }));
  };

  return (
    <div>
      <h3>Announcements for {selectedCourse}</h3>
      <ul>
        {announcements.map(({ number, title, date, path }) => {
          const isViewed = viewedAnnouncements[number];
          return (
            <li key={number}>
              <Link to={path} target="_blank" onClick={() => markAsViewed(number)}>
                {date} - {title}
              </Link>
              {isViewed && <span style={{ color: 'green', marginLeft: '5px' }}>✅</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AnnouncementList;
