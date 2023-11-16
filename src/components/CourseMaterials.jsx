import React from 'react';

function CourseMaterials({ selectedCourse }) {
  if (!selectedCourse) {
    return (
      <div>
        <p>No course selected for course materials</p>
      </div>
    );
  }

  const formattedCourseName = selectedCourse.toLowerCase().replace(/\s+/g, '_');

  const presentationCounts = {
    'Computer Graphics': 23,
    'Senior Design': 8,
    'UI Design': 21,
  };

  const presentationLinks = Array.from({ length: presentationCounts[selectedCourse] }, (_, index) => {
    const presentationNumber = index + 1;
    const formattedPresentationNumber = presentationNumber.toString().padStart(2, '0');
    const presentationPath = `/src/data/${formattedCourseName}/presentations/01_${formattedPresentationNumber}.pptx`;

    return (
      <li key={presentationNumber}>
        <div>
          <p>Presentation {formattedPresentationNumber}</p>
          <button onClick={() => window.open(presentationPath, '_blank')}>
            View in Browser
          </button>
          <a href={presentationPath} download={`Presentation_${formattedPresentationNumber}.pptx`}>
            <button>Download</button>
          </a>
        </div>
      </li>
    );
  });

  return (
    <div>
      <h3>Course Materials for {selectedCourse}</h3>
      <ul>{presentationLinks}</ul>
    </div>
  );
}

export default CourseMaterials;
