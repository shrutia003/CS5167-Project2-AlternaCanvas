import React from 'react';

function CourseDetails({ courseName }) {
	const todayDate = new Date(2023, 9, 13);
	const semesterStart = new Date(2023, 7, 21);
	const semesterEnd = new Date(2023, 11, 7);

	const progress = ((todayDate - semesterStart) / (semesterEnd - semesterStart)) * 100;

	const progressBarStyle = {
		width: '60%', 
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

	const containerStyle = {
		margin: '20px'
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
		// Add more styling as needed
  };

	const courseButtonStyle = {
		padding: '50px',
		marginRight: '50px',
		marginLeft: '50px',
		backgroundColor: '#F4364C',
		color: '#ffffff',
		border: 'solid',
		borderRadius: '5px',
		borderColor: 'ffffff',
		cursor: 'pointer',
		fontSize: '50px',
	 };

	return (
		<div style={containerStyle}>
			<h2>Course Details for {courseName}</h2>
			{/* Add specific details for each course as needed */}
			<p >Semester Progress:</p>
			<div style={progressBarStyle }>
				<div style={progressFillStyle}></div>
			</div>
			<br />
			<div style={previewStyle}>
				<div style={boxStyle}>
					{/* Content for Announcements */}
				</div>
				<div style={boxStyle}>
					{/* Content for Current Module */}
				</div>
			</div>

			<p>Course Materials</p>
			<p>Assignments</p>
			<p>Syllabus</p>
			<p>Zoom</p>
		</div>
	);
}

export default CourseDetails;
