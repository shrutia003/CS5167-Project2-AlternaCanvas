import React from 'react';
import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import DashboardFeed from './components/DashboardFeed';

function App() {
	const appStyle = {
	  display: 'flex',
	  flexDirection: 'column',
	  height: '100vh',
	  width: '100vw',
	};
 
	const mainLayoutStyle = {
	  display: 'flex',
	  flex: 1,
	};
 
	return (
	  <div style={appStyle}>
		 <DashboardHeader /> {/* The Header will include the logo, title, and buttons */}
		 <div style={mainLayoutStyle}>
			<Sidebar />
			<DashboardFeed />
		 </div>
	  </div>
	);
 }

export default App;