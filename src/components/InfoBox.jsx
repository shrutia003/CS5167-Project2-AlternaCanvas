import React from 'react';
import Announcement from './Announcement';

function InfoBox({ type, courseName }) {
    // Determine the content and header based on the 'type' prop
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
        // position: 'absolute', // Position header absolutely to align it to the top left
        top: '10px', // Align top edge with a 10px distance from the box's top edge
        left: '10px', // Align left edge with a 10px distance from the box's left edge
        margin: 0, // Remove default margin from header
        marginLeft: '40px',
        width: '100%',
        textAlign: 'left', // Align text to the left
    };

    const lineStyle = {
        width: 'calc(100% - 20px)', // Subtract 20px (10px padding on each side)
        height: '1px', // Line thickness
        backgroundColor: '#ccc', // Line color
        // position: 'absolute', // Position line absolutely
        top: '40px', // Position below the header text
        left: '10px', // Align with the left padding of the box
    };

    const scrollableViewStyle = {
        marginTop: '20px', // Make room for the header and line
        height: '190px', // Adjust height to account for the header space
        width: '100%',
        overflowY: 'auto',
        textAlign: 'justify',
    };

    const scrollableTextStyle = {
        marginLeft: '20px',
        marginRight: '20px',
        textAlign: 'justify',
    };

    // Sample data for demonstration, replace with actual data
    const announcementData = {
        title: "New Assignment Posted",
        date: "October 15, 2023",
        body: "Please check the new assignment in the assignments section. It is due by next week.",
    };

    // const history = useHistory();

    // const buttonStyle = {
    //     display: 'block',
    //     width: '100%', // Take the full width of the parent minus padding
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