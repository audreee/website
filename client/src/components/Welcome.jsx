import React from 'react';

let Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-content">
        <div className="welcome-left"></div>
        <div className="welcome-right"></div>
      </div>
      <div className="welcome-overlay">
        <div className="welcome-text">
          <h1>Hi.</h1>
        </div>
      </div>
    </div>
  )
}

export default Welcome;