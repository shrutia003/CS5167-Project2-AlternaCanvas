import React from 'react';
import { Link } from 'react-router-dom';

function Modules({ selectedCourse }) {
  if (!selectedCourse) {
    return (
      <div>
        <p></p>
      </div>
    );
  }

  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');

  const moduleCounts = {
    'Computer Graphics': 16,
    'Senior Design': 0,
    'UI Design': 12,
  };

  const moduleLinks = Array.from({ length: moduleCounts[selectedCourse] }, (_, index) => {
    const moduleNumber = index + 1;
    const formattedModuleNumber = moduleNumber.toString().padStart(2, '0');
    const modulePath = `/src/data/${formattedCourseName}/pages/${formattedModuleNumber}.html`;


    return (
      <li key={moduleNumber}>
        <Link to={modulePath} target="_blank">
          Module {formattedModuleNumber}
        </Link>
      </li>
    );
  });

  return (
    <div>
      <h3>Modules for {selectedCourse}</h3>
      <ul>{moduleLinks}</ul>
    </div>
  );
}

export default Modules;
