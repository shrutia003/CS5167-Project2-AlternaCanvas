import React from 'react';
import Announcement from './Announcement';

function InfoBox({ type, courseName }) {
  if (!courseName) {
    return null; // or return <div></div> or any other placeholder content
  }

  const headerText = type === 'announcement' ? 'Latest Announcement:' : 'Current Module:';
  const sampleText = type === 'announcement'
    ? "Announcement content for " + courseName
    : "Module content for " + courseName;

    // Styles
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
        // position: 'relative',
        // padding: '10px',
  };

    const headerStyle = {
        fontWeight: 'bold',
        top: '10px', 
        left: '10px', 
        margin: 0, 
        marginLeft: '40px',
        width: '100%',
        textAlign: 'left', 
    };

    const lineStyle = {
        width: 'calc(100% - 20px)', 
        height: '1px', 
        backgroundColor: '#ccc', 
        top: '40px',
        left: '10px', 
    };

    const scrollableViewStyle = {
        marginTop: '20px', 
        height: '190px', 
        width: '100%',
        overflowY: 'auto',
        textAlign: 'justify',
    };

    const scrollableTextStyle = {
        marginLeft: '20px',
        marginRight: '20px',
        textAlign: 'justify',
    };

    const announcementData = {
        title: "New Assignment Posted",
        date: "October 15, 2023",
        body: "Please check the new assignment in the assignments section. It is due by next week.",
    };

    // const history = useHistory();

    // const buttonStyle = {
    //     display: 'block',
    //     width: '100%', 
    //     padding: '10px',
    //     margin: '10px 0',
    //     backgroundColor: 'red',
    //     color: 'white',
    //     border: 'none',
    //     borderRadius: '5px',
    //     cursor: 'pointer',
    // };

    // const handleNavigation = () => {
    //     // Determine the navigation path based on the type
    //     const path = type === 'announcement' ? `/assignment-list/${courseName}` : `/modules/${courseName}`;
    //     history.push(path);
    // };

    return (
        <div style={{ ...boxStyle }}>
            <h3 style={{ ...headerStyle }}>{headerText}</h3>
            <hr style={{ ...lineStyle }} />
            <div style={{ ...scrollableViewStyle }}>
                <div style={{ ...scrollableTextStyle }}>
                    {type === 'announcement' ? (
                        <Announcement
                            title={announcementData.title}
                            date={announcementData.date}
                            body={announcementData.body}
                        />
                    ) : (
                        <p>{sampleText}</p> // Render module text if type is not 'announcement'
                    )}
                </div>
            </div>
        </div>
    );
}

export default InfoBox;