function DashboardHeader() {
    const headerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        backgroundColor: '#F6F6F6',
        height: '100px',
        paddingRight: '20px',
    };
    
    const logoAndTitleStyle = {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    };

    const logoStyle = {
        width: '100px', // Logo width
        height: '100%', // Logo height to fill the header
        justifyContent: 'center',
        margin: '0',
    };
    
    const titleStyle = {
        marginLeft: '20px', // Space between logo and title
        color: '#333333',
    };

    return (
        <header style={headerStyle}>
            <div style={logoAndTitleStyle}>
                <div style={logoStyle}>
                    <img src='/src/assets/UI_logo.png' alt="University Logo" style={{ height: '100%' }}/>
                </div>
                <h1 style={titleStyle}>Alterna-Canvas</h1>
            </div>
        </header>
    );
}

export default DashboardHeader;
