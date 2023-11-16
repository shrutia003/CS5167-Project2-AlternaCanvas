import React from 'react';

function Sidebar({ onProfileClick, onDashboardClick, onCoursesClick, onCalendarClick }) {
	const sidebarStyle = {
		width: '100px',
		backgroundColor: '#000000',
	};

	const navListStyle = {
		listStyle: 'none',
		padding: 0,
	};

	const navItemStyle = {
		display: 'block',
		padding: '10px',
		textDecoration: 'none',
		color: '#f4f4f4',
		cursor: 'pointer',
	};

	return (
		<aside style={sidebarStyle}>
			<nav>
				<ul style={navListStyle}>
					<li>
						<div
							style={navItemStyle}
							onClick={() => {
								onProfileClick();
							}}>
							Profile
						</div>
					</li>
					{/* <li>
						<div style={navItemStyle}
							onClick={() => {
								onDashboardClick();
							}}>
							Dashboard
						</div>
					</li> */}
					<li>
						<div style={navItemStyle}
							onClick={() => {
								onCoursesClick();
							}}>
							Courses
						</div>
					</li>
					<li>
						<div style={navItemStyle}
							onClick={() => {
								onCalendarClick();
							}}>
							Calendar
						</div>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
