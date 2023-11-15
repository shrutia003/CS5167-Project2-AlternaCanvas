import React from 'react';

function Zoom({ selectedCourse }) {
  if (!selectedCourse) {
    // Render a default message or redirect to another page
    return (
      <div>
        <p></p>
      </div>
    );
  }

  return (
    <div>
      <h2>Zoom</h2>
      <p>~Future Work~</p>
    </div>
  );
}

export default Zoom;