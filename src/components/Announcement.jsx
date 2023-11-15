import React from 'react';

function Announcement({ title, date, body }) {
    // Styles
    const titleStyle = {
        fontWeight: '600', // bolder than normal but not as bold as a header
        fontSize: '1.25rem', // example size, adjust as needed
        margin: '0 0 5px 0', // space below the title
    };

    const dateStyle = {
        fontWeight: '400', // normal weight
        fontSize: '1rem', // smaller than title
        color: '#aaaaaa', // a muted color for the subheader
        margin: '0 0 10px 0', // space below the date
    };

    const bodyStyle = {
        textAlign: 'justify', // for better readability
        lineHeight: '1.6', // adjust line spacing for readability
    };

    return (
        <div>
            <h2 style={titleStyle}>{title}</h2>
            <h3 style={dateStyle}>{date}</h3>
            <p style={bodyStyle}>{body}</p>
        </div>
    );
}

export default Announcement;