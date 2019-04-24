import React from 'react';
import Button from 'react-bootstrap/Button';


const Welcome = () => {
    return (
        <div className="welcome-page">
            <h2 className="welcome-title">Welcome to our mini hotel</h2>
            <p className="welcome-subtitle">you can check in here</p>

            <Button href="/checkin" variant="light">Check In</Button>
        </div>
    )
}

export default Welcome;