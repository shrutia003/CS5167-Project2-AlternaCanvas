function Sidebar() {
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
	};
	
	return (
		<aside style={sidebarStyle}>
			<nav>
				<ul style={navListStyle}>
					<li><a href="/profile" style={navItemStyle}>Profile</a></li>
					<li><a href="/dashboard" style={navItemStyle}>Dashboard</a></li>
					<li><a href="/courses" style={navItemStyle}>Courses</a></li>
					<li><a href="/calendar" style={navItemStyle}>Calendar</a></li>
					<li><a href="/inbox" style={navItemStyle}>Inbox</a></li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;