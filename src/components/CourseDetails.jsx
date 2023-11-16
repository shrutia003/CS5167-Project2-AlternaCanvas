import React, { useState, useEffect } from 'react';
import InfoBox from './InfoBox';

function CourseDetails({ courseName, completedAssignments }) {
	if (!courseName) {
		return null; 
	}
  
	const formattedCourseName = courseName.toLowerCase().replace(/\s+/g, '_');
	const assignmentsMapping = {
		'computer_graphics': 9,
		'senior_design': 6,
		'ui_design': 8,
	};
	
	// Calculate completion percentage
	const totalAssignments = assignmentsMapping[formattedCourseName] || 0;;
	const completedCount = completedAssignments.size;
	const completionPercentage = completedCount > 0 ? (completedCount / totalAssignments) * 100 : 0;

	
	const progressBarStyle = {
		width: '60%',
		height: '20px',
		backgroundColor: '#e0e0e0',
		borderRadius: '5px',
		margin: '10px 0',
	};

	const progressFillStyle = {
		width: `${completionPercentage}%`,
		height: '100%',
		backgroundColor: '#F4364C',
		borderRadius: '5px',
	};

	const containerStyle = {
		margin: '20px',
		paddingBottom: '-20px'
	}

	const previewStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start'
	};

	const boxStyle = {
		height: '300px',
		flexBasis: 'calc(50% - 10px)', // 10px padding
		background: 'linear-gradient(45deg, #36454F, #29323c)',
		border: 'none',
		borderRadius: '5px',
		boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#FFFFFF',
	};

	return (
		<div style={containerStyle}>
			<h2>Course Details for {courseName}</h2>
			<p >Semester Progress:</p>
			<div style={progressBarStyle}>
				<div style={progressFillStyle}></div>
			</div>
			<br />
			<div style={previewStyle}>
				<InfoBox type="announcement" courseName={courseName} style={boxStyle} />
				{/* <InfoBox type="module" courseName={courseName} style={boxStyle} /> */}
			</div>
		</div>
	);
}

export default CourseDetails;
