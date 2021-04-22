import React from 'react';

let Welcome = () => {
  return (
    <div className="welcome-wrapper">
      <div className="welcome-content">
        <div className="welcome-left"></div>
        <div className="welcome-right"></div>
      </div>
      <div className="welcome-overlay">
        <div className="welcome-text center">
          <div className="slideFromLeft">
            <h1>hello</h1>
          </div>
          <h1 className="period slideFromRight">.</h1>
        </div>
      </div>
    </div>
  )
}

export default Welcome;