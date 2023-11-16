import React, { useState, useEffect, useRef } from 'react';
import Announcement from './Announcement';

function InfoBox({ type, courseName }) {
  if (!courseName) {
    return null; // or return <div></div> or any other placeholder content
  }

  const [announcementContent, setAnnouncementContent] = useState('');

  useEffect(() => {
    if (type === 'announcement' && courseName) {
      const formattedCourseName = courseName.toLowerCase().replace(/\s+/g, '_');
      const announcementPath = `/src/data/${formattedCourseName}/announcements/announcement_01.html`;

      fetch(announcementPath)
        .then(response => response.text())
        .then(htmlContent => {
          setAnnouncementContent(htmlContent);
        })
        .catch(error => console.error('Error fetching announcement:', error));
    }
  }, [type, courseName]);

  const headerText = type === 'announcement' ? 'Latest Announcement:' : 'Current Module:';
  const sampleText = type === 'announcement'
    ? announcementContent
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
        marginTop: '20px',
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
        marginTop: '0px', // Make room for the header and line
        paddingBottom: '0px',
        height: '100%', // Adjust height to account for the header space
        width: '100%',
        overflowY: 'auto',
        textAlign: 'justify',
    };

    const scrollableTextStyle = {
        marginLeft: '20px',
        marginRight: '20px',
        textAlign: 'justify',
    };

    const scrollableRef = useRef(null);

    useEffect(() => {
        if (scrollableRef.current) {
            const childElements = Array.from(scrollableRef.current.children);
            
            childElements.forEach(child => {
                child.style.marginTop = '0';
            });
      
            const h2 = scrollableRef.current.querySelector('h2');
            const h3 = scrollableRef.current.querySelector('h3');
            if (h2) h2.style.marginBottom = '5px'; // Reduce bottom margin of h2
            if (h3) h3.style.marginTop = '5px';    // Reduce top margin of h3
        }
      }, [announcementContent]);

    return (
        <div style={{ ...boxStyle }}>
            <h3 style={{ ...headerStyle }}>{headerText}</h3>
            <hr style={{ ...lineStyle }} />
            <div style={{ ...scrollableViewStyle }}>
                {type === 'announcement' ? (
                    <div ref={scrollableRef} style={{ ...scrollableTextStyle }} dangerouslySetInnerHTML={{ __html: sampleText }} />
                ) : (
                    <div style={{ ...scrollableTextStyle }}>
                        <p>{sampleText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InfoBox;